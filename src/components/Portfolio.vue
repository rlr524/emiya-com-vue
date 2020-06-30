<template>
  <div class="portfolio-container mb-8">
    <div class="rounded overflow-hidden -tindog">
      <a
        href="https://rlr524.github.io/tindog/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="../assets/img/tindog_screen.png"
          alt="Small thumbnail of Tindog web site - Click to visit Tindog: Tinder for Dogs"
          class="w-full h-full"
        />
      </a>
    </div>
    <div class="rounded overflow-hidden -kyotogo">
      <a
        href="https://emiya-kyotogo.netlify.app/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="../assets/img/kyotogo_screen.png"
          alt="Small thumbnail of Kyoto Go web site - Click to visit Kyoto Go - Tours of the Historic Heart of Japan"
          class="w-full h-full"
        />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Portfolio"
};
</script>

<style scoped>
.portfolio-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1em;
  height: 16em;
  z-index: 10;
  margin-bottom: 2em;
}
</style>
