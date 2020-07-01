<template>
  <div id="app">
    <Navbar />
    <Main />
    <Rule />
    <Cards />
    <Rule />
    <Port />
    <Rule />
    <Engage />
    <Footer />
  </div>
</template>

<script>
import Rule from "@/utilities/Rule";
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
    Rule,
    Cards,
    Port,
    Engage,
    Footer
  }
};
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: auto;
  width: 80%;
  max-width: 1600px;
}
</style>
