<template>
  <ul>
    <li v-if="!items.length">You're all cought up!</li>
    <li v-else v-for="item in items" :key="item.id">
      {{ item.text }}
    </li>
  </ul>
</template>

<script>
export default {
  name: 'TodoList',
  props: {
    items: {
      type: Array,
      required: true,
      validator: (value) => value.every(({ id, text }) => 
        typeof text === 'string' && typeof id === 'string' )
    }
  }
}
</script>

<style>
  ul {
    list-style: none;
    display: grid;
    gap: var(--space);
  }
  
  li {
    font-size: var(--baseFontSize);
    border: 1px solid var(--color-todo-item-border);
    padding: calc(var(--space) / 2);
    border-radius: 3px;
  }
  
  li:last-of-type {
    border-bottom: none;
  }
</style>
