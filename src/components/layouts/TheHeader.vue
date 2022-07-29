<template>
  <header>
    <h1>{{ title }}</h1>
  </header>
</template>

<script>
export default {
  props: ["title"],
};
</script>

<style scoped>
header {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 5rem;
  background-color: #640032;
}
header h1 {
  margin: 0;
  color: #fff;
}
</style>
