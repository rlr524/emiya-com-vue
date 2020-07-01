<template>
  <div class="engage-container text-center">
    <div class="engage-pricing">
      <span class="text-emiyablue text-2xl font-medium">Pricing</span>
    </div>
    <div class="engage-contact">
      <span class="text-emiyablue text-2xl font-medium">Contact</span>
    </div>
    <div class="engage-cv">
      <span class="text-emiyablue text-2xl font-medium">CV</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Engage"
};
</script>

<style scoped>
.engage-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  height: 20em;
  z-index: 10;
  margin-top: 4em;
  margin-bottom: 2em;
}
</style>
