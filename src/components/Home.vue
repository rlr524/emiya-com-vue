<template>
  <div id="home">
    <Main />
    <Rule />
    <Cards />
    <Rule />
    <Port />
    <Rule />
    <Pricing />
    <Rule />
    <Cv />
    <Rule />
    <Contact />
  </div>
</template>

<script>
import Rule from "@/utilities/Rule";
import Main from "@/components/Main";
import Cards from "@/components/Cards";
import Port from "@/components/Port";
import Pricing from "@/components/Pricing";
import Cv from "@/components/Cv";
import Contact from "@/components/Contact";

export default {
  name: "Home",
  components: {
    Rule,
    Main,
    Cards,
    Port,
    Pricing,
    Cv,
    Contact
  }
};
</script>

<style scoped></style>
