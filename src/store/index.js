import { createStore } from 'vuex'
import Todo from './module/Todo'

const store = createStore({
    modules:{ Todo }
})

export default store