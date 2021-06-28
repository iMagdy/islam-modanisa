<template>
  <form ref="form" @submit.prevent="createTODO">
    <input autofocus placeholder="Buy some milk?..." type="text" v-model="todo" required minlength="3" maxlength="50" />
    <button @click="createTODO" type="button">Add</button>
  </form>
</template>

<script>
export default {
  name: 'TodoInput',
  data() {
    return { todo: '' }
  },
  methods: {
    createTODO() {
      this.$emit('modanisa-create-todo', this.todo);
       this.$refs.form.reset();
    }
  }
}
</script>

<style>
  form {
    display: grid;
    grid-template-columns: 1fr 90px;
    gap: var(--space);
  }
  
  input {
    font-size: var(--baseFontSize);
    padding: calc(var(--space) / 2);
  }

  button {
    font-size: var(--baseFontSize);
  }
</style>
