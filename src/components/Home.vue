<template>
  <div>
    <Main />
    <Rule />
    <Cards />
    <Rule />
    <Port />
    <Rule />
    <Footer />
  </div>
</template>

<script>
import Rule from "@/utilities/Rule";
import Main from "@/components/Main";
import Cards from "@/components/Cards";
import Port from "@/components/Port";
import Footer from "@/components/Footer";

export default {
  name: "Home",
  components: {
    Rule,
    Main,
    Cards,
    Port,
    Footer
  }
};
</script>

<style scoped></style>
