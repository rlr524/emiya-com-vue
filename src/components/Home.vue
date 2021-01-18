<template>
  <div id="home">
    <Main />
    <Rule />
    <Cards />
    <!-- <Rule />
    <Port />
    <Rule />
    <Pricing />
    <Rule />
    <Cv />
    <Rule />
    <Contact /> -->
  </div>
</template>

<script>
import Rule from "@/utilities/Rule";
import Main from "@/components/Main";
import Cards from "@/components/Cards";
// import Port from "@/components/Port";
// import Pricing from "@/components/Pricing";
// import Cv from "@/components/Cv";

export default {
  name: "Home",
  components: {
    Rule,
    Main,
    Cards,
    // Port,
    // Pricing,
    // Cv,
  },
  metaInfo() {
    return {
      title:
        "Emiya Consulting - Web design and development, mobile app development, and small business technology consulting in the Puget Sound (Seattle, Bellevue, Tacoma) area.",
      meta: [
        {
          name: "Emiya Consulting",
          content:
            "Web design and development, mobile app development, and small business technology consulting in the Puget Sound (Seattle, Bellevue, Tacoma) area.",
        },
      ],
    };
  },
};
</script>

<style scoped></style>
