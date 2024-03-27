<script setup lang="ts">
import type { Todo } from '@/stores/types/todo'

interface Props {
  todo: Todo
}

const props = defineProps<Props>()

const emit = defineEmits<{ (e: 'delete'): void }>()
</script>

<template>
  <div class="todo">
    <h2>{{ props.todo.name }}</h2>
    <p>{{ props.todo.description }}</p>
    <button @click="emit('delete')">Delete todo</button>
  </div>
</template>

<style scoped>
.todo {
  border: 2px black solid;
  border-radius: 10px;
  padding: 10px;
  margin: 10px;
}

h2,
p {
  color: black;
}

button {
  background: black;
  color: white;
  padding: 10px 20px;
  border-radius: 10px;
  box-shadow: 0;
}
</style>
