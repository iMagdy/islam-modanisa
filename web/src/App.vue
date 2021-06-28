<template>
  <div class="app">
    <div class="input">
      <img :src="require('@/assets/logo.svg')" />
      <TodoInput @modanisa-create-todo="postTODO" />
    </div>
      
    <TodoList :items="items" />
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
  data() {
    return {
      items: []
    }
  },
  methods: {
    postTODO(todo) {
      fetch(`${API_URL}/todos`, { method: 'post', body: todo }).then(this.getTODOs);
    },
    async getTODOs() {
      const items = await fetch(`${API_URL}/todos`).then(res => res.json());
      this.items = items.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    }
  },
  mounted() {
    this.getTODOs();
  }
}
</script>

<style>
  .app {
    background: var(--color-todos-bg);
    width: var(--appWidth);
    max-width: var(--appMaxWidth);
    height: var(--appHeight);
    margin-top: 15vh;
    padding: 0 var(--space) var(--space);
    overflow-y: auto;
    border-radius: calc(var(--space) / 2);
    box-shadow: 0 0 calc(var(--space) / 4);
  }

  .input {
    position: sticky;
    top: 0;
    background: var(--color-input-bg);
    margin-bottom: var(--space);
    padding: var(--space) 0;
  }
  
  img {
    margin-bottom: var(--space);
  }
</style>
