<template>
    <Card style=" margin-bottom: 2em">
        <template #title>
            {{ todo.title }}
        </template>
        <template #content>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt
            quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!</p>
        </template>
        <template #footer>
            <div  class="flex justify-content-between">
            <Button v-if="!todo.completed" @click="completed(todo.id)" label="Complete" icon="pi pi-check" class="p-button-sm p-button-primary" />
            <Button v-else @click="completed(todo.id)"   label="Undone"  icon="pi pi-times"  class="p-button-sm p-button-success" /> <Button @click="deleteTodo(todo.id)" label="Delete" icon="pi pi-trash" class="p-button-sm p-button-danger"  />
             </div>
        </template>
    </Card>
</template>

<script>
import { mapMutations } from 'vuex'
    export default {
        props:['todo'],
        methods:mapMutations(['completed', 'deleteTodo'])
    }
</script>

<style lang="stylus" scoped>

</style>
