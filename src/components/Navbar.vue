<template>
  <header>
    <img src="../assets/ec_new_logo_tags_small.svg" alt="" />
  </header>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style scoped>
header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 1;
  opacity: 0.9;
  padding-top: 1rem;
  text-align: center;
}
img {
  width: 20%;
}
</style>
