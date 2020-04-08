<template>
  <div class="main-top">
    <h1>Keep your mind on your business while we mind your code</h1>
  </div>
</template>

<script>
export default {
  name: "Main",
};
</script>

<style scoped>
.main-top {
  background: url(../assets/Canva-WebApplicationDeveloperDesk.png) no-repeat
    center center/cover;
  height: 25em;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  padding-top: 9em;
  padding-bottom: 3.125em;
  margin-bottom: 1.25em;
}

.main-top h1 {
  width: 35%;
  margin-left: 1em;
  margin-bottom: 1em;
}

@media (max-width: 768px) {
  h1 {
    font-size: 1.1em;
  }
}
</style>
