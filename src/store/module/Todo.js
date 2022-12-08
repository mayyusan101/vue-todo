import axios from 'axios'
export default{
    state:{
        todos:[],
    },
    getters:{
        myTodo : (state) => state.todos
    },
    mutations:{
        setTodos(state,data){
            state.todos = data
        },
        setTodo(state, newTodo){
            state.todos = [newTodo,...state.todos]
        },
        completed(state,todoId){
            state.todos.map((todo) => {
                todo.id === todoId ? todo.completed = !todo.completed : todo
            })
        },
        deleteTodo(state,todoId){
            state.todos = state.todos.filter((todo) => todo.id != todoId);
        }
    },
    actions:{
        async getTodos({ commit }){
          let res = await axios.get('https://jsonplaceholder.typicode.com/todos');
          commit('setTodos',res.data);
        },
        async addTodo(context, newTodo){
            if(newTodo.title){
            const lastId = context.state.todos.length + 1;
            const todo ={
                title: newTodo.title,
                id:lastId,
                completed:false
            };
            context.commit('setTodo',todo)
            newTodo.title = ''
            }
        },
        async filterTodo({commit},limit){
            console.log(limit);            
            let res = await axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}`);
            commit('setTodos',res.data)
        }
        
    }  
}