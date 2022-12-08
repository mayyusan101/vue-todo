<template>
    <div class="row flex">
        <div class="col-3">
            <p>Limit todos </p>
            <select v-model="limit" @change="filterTodo(limit)">
                <option value="10">10</option>
                <option value="50">50</option>
                <option value="100">100</option>
                <option value="150">150</option>
                <option value="200">200</option>
            </select>
        </div>
        <div class="col-6" >
        <div class="p-inputgroup">
            <InputText placeholder="Enter todo task" @keyup.enter="addTodo(newTodo)" v-model="newTodo.title" />
            <Button @click="addTodo(newTodo)" label="Add" icon="pi pi-check" class="p-button-sm"  />
        </div>
    </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
    export default {
        data() {
        return{
            newTodo:{
                title:''
            },
            limit:null
        }
        },
        methods:mapActions(['addTodo','filterTodo'])
    }
</script>

<style lang="stylus" scoped>

</style>
