<template>
  <div id="app">
    <Navbar />
    <Main />
    <Cards />
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Cards from "./components/Cards";

export default {
  name: "App",
  components: {
    Navbar,
    Main,
    Cards,
  },
};
</script>

<style>
#app {
  font-family: Helvetica, Arial, sans-serif;
  font-size: 1rem;
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: auto;
  width: 80%;
  max-width: 1600px;
}
</style>
