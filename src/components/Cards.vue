<template>
  <div class="card-container">
    <div class="max-w-sm rounded overflow-hidden shadow-lg">
      <i class="icon-basic-question text-5xl"></i>
      Why Emiya Consulting
    </div>
    <div class="max-w-sm rounded overflow-hidden shadow-lg">
      Web and Mobile App Development
    </div>
    <div class="max-w-sm rounded overflow-hidden shadow-lg">
      Business Services
    </div>
    <div class="max-w-sm rounded overflow-hidden shadow-lg">Portfolio</div>
  </div>
</template>

<script>
export default {
  name: "Cards"
};
</script>

<style scoped>
.card-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1em;
  height: 10em;
  z-index: 10;
}

@media (max-width: 768px) {
  .card {
    font-size: 0.7em;
  }
}
</style>
