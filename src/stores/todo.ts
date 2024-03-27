import { reactive } from 'vue'
import { defineStore } from 'pinia'
import { IsTodoArray, type Todo } from './types/todo'

const todosKey = 'todos'

const getTodosFromLocalStorage = (key: string): Todo[] => {
  const todos = localStorage.getItem(key)

  if (!todos) {
    return []
  }

  const parsed = JSON.parse(todos)

  if (!IsTodoArray(parsed)) {
    return []
  }

  return parsed
}

export const updateStorage = (key: string, todos: Todo[]): void => {
  localStorage.setItem(key, JSON.stringify(todos))
}

export const useTodoStore = defineStore('todo', () => {
  const todos = reactive<Todo[]>(getTodosFromLocalStorage(todosKey))

  const removeTodo = (id: number) => {
    const index = todos.findIndex((todo) => todo.id === id)

    if (index === -1) {
      return
    }

    todos.splice(index, 1)

    updateStorage(todosKey, todos)
  }

  const createTodo = (name: string, description: string) => {
    todos.push({
      id: todos.length,
      name,
      description
    })

    updateStorage(todosKey, todos)
  }

  return { todos, removeTodo, createTodo }
})
