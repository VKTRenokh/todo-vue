<script setup lang="ts">
import TodoItem from '@/components/todo-item.vue'
import { useTodoStore } from '@/stores/todo'
import { ref } from 'vue'

const store = useTodoStore()

const handleTodoDelete = (id: number) => {
  store.removeTodo(id)
}

const handleTodoCreate = (name: string, description: name) => {
  store.createTodo(name, description)
}

const todoName = ref<string>('')

const todoDescription = ref<string>('')
</script>

<template>
  <div class="todo-list">
    <div>
      <input type="text" v-model="todoName" placeholder="name" />
      <input type="text" v-model="todoDescription" placeholder="description" />
      <button @click="handleTodoCreate(todoName, todoDescription)">Create</button>
    </div>
    <div v-for="todo in store.todos" :key="todo.name">
      <TodoItem :todo="todo" @delete="handleTodoDelete(todo.id)" />
    </div>
  </div>
</template>

<style scoped>
.todo-list {
  background: white;
  padding: 10px 20px;
  border-radius: 10px;
  margin: 10px 0;
}
</style>
