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
  ul { list-style: none; }
  
  li {
    font-size: 21px;
    border-bottom: 1px solid #333;
    padding: 10px 0;
  }
  
  li:last-of-type {
    border-bottom: none;
  }
</style>
