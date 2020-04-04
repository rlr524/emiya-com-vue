<template>
  <div id="app">
    <Navbar />
    <Main />
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
import Main from "./components/Main";

export default {
  name: "App",
  components: {
    Navbar,
    Main,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0 auto;
  width: 80%;
  max-width: 1140px;
}
</style>
