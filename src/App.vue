<template>
  <div id="app">
    <Navbar />
    <Main />
    <Cards />
    <Port />
    <Engage />
    <Footer />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
import Main from "@/components/Main";
import Cards from "@/components/Cards";
import Port from "@/components/Port";
import Engage from "@/components/Engage";
import Footer from "@/components/Footer";

export default {
  name: "App",
  components: {
    Navbar,
    Main,
    Cards,
    Port,
    Engage,
    Footer
  }
};
</script>

<style>
#app {
  font-family: Helvetica, Arial, sans-serif;
  font-size: 1rem;
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: auto;
  width: 80%;
  max-width: 1600px;
}
</style>
