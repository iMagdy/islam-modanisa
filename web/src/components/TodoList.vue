<template>
  <ul>
    <li v-for="item in items" :key="item.id">
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
</style>
