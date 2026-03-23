import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export interface Todo {
  id: number
  text: string
  completed: boolean
}

export const useTodoStore = defineStore('todo', () => {
  // State
  const todos = ref<Todo[]>([])
  const nextId = ref<number>(1)

  // Getters
  const remainingTasks = computed<number>(() => {
    return todos.value.filter(todo => !todo.completed).length
  })

  const completedTasks = computed<number>(() => {
    return todos.value.filter(todo => todo.completed).length
  })

  const totalTasks = computed<number>(() => {
    return todos.value.length
  })

  // Actions
  const addTodo = (text: string): void => {
    const trimmedText = text.trim()
    if (trimmedText) {
      todos.value.push({
        id: nextId.value++,
        text: trimmedText,
        completed: false
      })
    } else {
      throw new Error('Todo text cannot be empty')
    }
  }

  const removeTodo = (id: number): void => {
    todos.value = todos.value.filter(todo => todo.id !== id)
  }

  const toggleTodo = (id: number): void => {
    const todo = todos.value.find(todo => todo.id === id)
    if (todo) {
      todo.completed = !todo.completed
    }
  }

  const clearCompleted = (): void => {
    todos.value = todos.value.filter(todo => !todo.completed)
  }

  return {
    // State
    todos,
    // Getters
    remainingTasks,
    completedTasks,
    totalTasks,
    // Actions
    addTodo,
    removeTodo,
    toggleTodo,
    clearCompleted
  }
})
