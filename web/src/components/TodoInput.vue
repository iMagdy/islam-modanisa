<template>
  <form :submit={createTODO}>
    <input type="text" />
    <button :click={createTODO} type="submit"></button>
  </form>
</template>

<script>
export default {
  name: 'TodoInput',
}
</script>

<style>
</style>
