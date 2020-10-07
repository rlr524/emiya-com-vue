<template>
  <nav id="navbar">
    <div class="logo">
      <router-link to="/">
        <img
          class="w-full h-auto"
          src="../assets/ec_new_logo_tags_small.svg"
          alt=""
        />
      </router-link>
    </div>
    <nav class="nav-right">
      <!-- <a href="#portfolio" class="text-emiyablack mr-4">Portfolio</a>
      <a href="#cv" class="text-emiyablack mr-4">C.V.</a> -->
      <!-- <a href="#pricing" class="text-emiyablack mr-4">Pricing</a> -->
      <a href="#about" class="text-emiyablack mr-4">About</a>
      <a href="#contact" class="text-emiyablack mr-4">Contact</a>
    </nav>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  components: {},
};
</script>

<style scoped>
nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 1;
  opacity: 0.9;
  padding-top: 1em;
  text-align: center;
  margin-bottom: 0.5em;
}

nav a:hover {
  text-decoration: underline;
}

.nav-right {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
}

@media (max-width: 800px) {
  nav {
    display: block;
  }

  .nav-right {
    display: inline;
  }

  p {
    font-size: 0.8em;
  }
}
</style>
