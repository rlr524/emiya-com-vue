<template>
  <header>
    <img src="../assets/ec_new_logo_tags_small.svg" alt="" />
    <div class="nav-right">
      <p><a href="/pricing">Pricing</a></p>
      <p><a href="/contact">Contact</a></p>
    </div>
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
  padding-top: 1em;
  text-align: center;
  margin-bottom: 0.5em;
}
img {
  width: 16%;
}

header a {
  color: #333333;
  padding: 0.45em;
  margin: 0 0.25em;
  text-decoration: none;
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
