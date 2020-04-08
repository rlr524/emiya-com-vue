<template>
  <div class="card-container">
    <div class="card">Why Emiya Consulting</div>
    <div class="card">Web and Mobile App Development</div>
    <div class="card">Business Services</div>
    <div class="card">Portfolio</div>
  </div>
</template>

<script>
export default {
  name: "Cards",
};
</script>

<style scoped>
.card-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  height: 10rem;
}
.card {
  background-color: #e5dfdf;
}
</style>
