import { reactive, ref } from 'vue'
import { defineStore } from 'pinia'
import { IsTodoArray, type Todo } from './types/todo'

const localStorageKey = 'todos'

const getTodosFromLocalStorage = (): Todo[] => {
  const todos = localStorage.getItem(localStorageKey)

  if (!todos) {
    return []
  }

  const parsed = JSON.parse(todos)

  if (!IsTodoArray(parsed)) {
    return []
  }

  return parsed
}

export const useTodoStore = defineStore('todo', () => {
  const todos = reactive<Todo[]>(getTodosFromLocalStorage())

  const removeTodo = (id: number) => {
    const index = todos.findIndex((todo) => todo.id === id)

    if (index === -1) {
      return
    }

    todos.splice(index, 1)

    localStorage.setItem(localStorageKey, JSON.stringify(todos))
  }

  const createTodo = (name: string, description: string) => {
    todos.push({
      id: todos.length,
      name,
      description
    })

    localStorage.setItem(localStorageKey, JSON.stringify(todos))
  }

  return { todos, removeTodo, createTodo }
})
