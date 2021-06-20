<template>
  <div id="app">
    <h1>Modanisa Todos</h1>

    <TodoInput @modanisa-create-todo="postTODO" />
    <TodoList />
  </div>
</template>

<script>
import TodoInput from '@/components/TodoInput';
import TodoList from '@/components/TodoList';
import { API_URL } from '@/config';

export default {
  name: 'ModanisaApp',
  components: {
    TodoInput,
    TodoList
  },
  methods: {
    async postTODO(todo) {
      await fetch(`${API_URL}/todos`, { method: 'post', body: todo });
    }
  }
}
</script>

<style>
</style>
