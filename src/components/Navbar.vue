<template>
  <header id="header">
    <router-link to="/">
      <img
        class="sm:w-full sm:h-auto"
        src="../assets/ec_new_logo_tags_small.svg"
        alt=""
      />
    </router-link>
    <nav class="nav-right">
      <a href="#portfolio" class="text-emiyablack mr-4">Portfolio</a>
      <a href="#cv" class="text-emiyablack mr-4">C.V.</a>
      <a href="#pricing" class="text-emiyablack mr-4">Pricing</a>
      <a href="#contact" class="text-emiyablack mr-4">Contact</a>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Navbar"
};
</script>

<style scoped>
header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 1;
  opacity: 0.9;
  padding-top: 1em;
  text-align: center;
  margin-bottom: 0.5em;
}

header a:hover {
  text-decoration: underline;
}

.nav-right {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
}

@media (max-width: 768px) {
  img {
    width: 44%;
  }

  p {
    font-size: 0.8em;
  }
}
</style>
