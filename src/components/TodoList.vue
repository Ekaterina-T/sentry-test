<template>
  <div class="todo-container">
    <h1>My To-Do List</h1>
    <div class="input-section">
      <input
        v-model="newTodo"
        @keyup.enter="addTodo"
        type="text"
        placeholder="Add a new task..."
        class="todo-input"
      />
      <button @click="addTodo" class="add-button">Add</button>
    </div>

    <div v-if="todoStore.totalTasks === 0" class="empty-state">
      <p>No tasks yet. Add one above!</p>
    </div>

    <ul v-else class="todo-list">
      <li
        v-for="todo in todoStore.todos"
        :key="todo.id"
        :class="{ completed: todo.completed }"
        class="todo-item"
      >
        <div class="todo-content">
          <input
            type="checkbox"
            :checked="todo.completed"
            @change="todoStore.toggleTodo(todo.id)"
            class="todo-checkbox"
          />
          <span class="todo-text">{{ todo.text }}</span>
        </div>
        <button @click="todoStore.removeTodo(todo.id)" class="delete-button">
          Delete
        </button>
      </li>
    </ul>

    <div v-if="todoStore.totalTasks > 0" class="stats">
      <p>
        <strong>{{ todoStore.remainingTasks }}</strong> of <strong>{{ todoStore.totalTasks }}</strong> tasks remaining
      </p>
      <button
        v-if="todoStore.completedTasks > 0"
        @click="todoStore.clearCompleted"
        class="clear-button"
      >
        Clear Completed
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useTodoStore } from '../stores/useTodoStore'

const todoStore = useTodoStore()
const newTodo = ref<string>('')

const addTodo = (): void => {
  const text = newTodo.value.trim()
  if (text) {
    todoStore.addTodo(text)
    newTodo.value = ''
  } else {
    throw new Error('Todo text cannot be empty')
  }
}
</script>

<style scoped>
.todo-container {
  background: white;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 30px;
}

.todo-container h1 {
  text-align: center;
  color: #42b983;
  margin-top: 0;
  margin-bottom: 30px;
}

.input-section {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}

.todo-input {
  flex: 1;
  padding: 12px 15px;
  border: 2px solid #e0e0e0;
  border-radius: 5px;
  font-size: 16px;
  transition: border-color 0.3s;
}

.todo-input:focus {
  outline: none;
  border-color: #42b983;
}

.add-button {
  padding: 12px 25px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.add-button:hover {
  background-color: #359268;
}

.empty-state {
  text-align: center;
  padding: 40px;
  color: #999;
}

.todo-list {
  list-style: none;
  padding: 0;
  margin: 0 0 20px 0;
}

.todo-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  border-bottom: 1px solid #f0f0f0;
  transition: background-color 0.2s;
}

.todo-item:hover {
  background-color: #f9f9f9;
}

.todo-item.completed .todo-text {
  text-decoration: line-through;
  color: #999;
}

.todo-content {
  display: flex;
  align-items: center;
  gap: 12px;
  flex: 1;
}

.todo-checkbox {
  width: 20px;
  height: 20px;
  cursor: pointer;
}

.todo-text {
  font-size: 16px;
  word-break: break-word;
}

.delete-button {
  padding: 8px 16px;
  background-color: #ff6b6b;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
  font-size: 14px;
}

.delete-button:hover {
  background-color: #ee5a5a;
}

.stats {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 20px;
  border-top: 2px solid #f0f0f0;
  color: #666;
}

.clear-button {
  padding: 8px 16px;
  background-color: #6c757d;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
  font-size: 14px;
}

.clear-button:hover {
  background-color: #5a6268;
}
</style>
