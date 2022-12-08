<template>
    <Add class="my-4 "/>
    <div class="grid ">
        <Todo v-for="todo in myTodo" :key="todo.id" class="col-12 md:col-6 lg:col-3 " :todo="todo"/>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

import Todo from './Todo.vue'
import Add from './Add.vue'
    export default {
        components:{ Todo, Add },
        computed:mapGetters(['myTodo']),
        methods:mapActions(['getTodos']),
        mounted(){
            this.getTodos();
        }
    }
</script>

<style lang="stylus" scoped>

</style>
