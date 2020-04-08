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
  gap: 1em;
  height: 10em;
}
.card {
  background-color: #e5dfdf;
}

@media (max-width: 768px) {
  .card {
    font-size: 0.7em;
  }
}
</style>
