<template>
  <div>
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
    <Footer />
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
import Footer from "@/components/Footer";

export default {
  name: "Home",
  components: {
    Rule,
    Main,
    Cards,
    Port,
    Pricing,
    Cv,
    Contact,
    Footer
  }
};
</script>

<style scoped></style>
