<template>
  <div class="main-top">
    <p
      class="text-xs sm:text-sm md:text-xl lg:text-3xl xl:text-4xl w-1/2 sm:w-1/2 md:w-5/12 lg:w-1/2 xl:w-5/12 text-emiyablack font-bold ml-4 sm:ml-8"
    >
      You mind your business
    </p>
    <p
      class="text-xs sm:text-sm md:text-xl lg:text-3xl xl:text-4xl w-1/2 sm:w-1/2 md:w-5/12 lg:w-1/2 xl:w-5/12 text-emiyablack font-bold ml-4 sm:ml-8"
    >
      We'll mind your tech
    </p>
    <p
      class="hidden"
      aria-hidden="Main section image - MacBook Pro laptop showing css code"
    ></p>
    <p
      class="text-xs sm:text-sm md:text-base lg:text-sm xl:text-base w-1/3 sm:w-1/3 md:w-5/12 lg:w-1/3 text-emiyablack ml-4 sm:ml-8 mt-2 -let"
    >
      You're not in business to write code. Let us build and manage your web and
      mobile app presence
    </p>
    <!-- <button id="get-data" @click="getClientData">Get Data</button> -->
  </div>
</template>

<script>
export default {
  name: "Main",
  methods: {},
};
</script>

<style scoped>
.main-top {
  background: url("../assets/img/Canva-WebApplicationDeveloperDesk.svg")
    no-repeat center center/cover;
  height: 25em;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  padding-top: 1em;
  padding-bottom: 3.125em;
  margin-bottom: 2em;
}
</style>
