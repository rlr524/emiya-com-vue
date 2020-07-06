<template>
  <div class="main-top">
    <p
      class="sm:text-2xl md:text-2xl lg:text-3xl xl:text-4xl text-emiyablack font-bold ml-8 -mind"
    >
      You mind your business We'll mind your tech
    </p>
    <p
      class="sm:text-xs md:text-xs lg:text-xs xl:text-base text-emiyablack ml-8 mt-2 -let"
    >
      You're not in business to write code. Let us build and manage your web and
      mobile app presence
    </p>
  </div>
</template>

<script>
export default {
  name: "Main"
};
</script>

<style scoped>
.main-top {
  background: url(../assets/img/Canva-WebApplicationDeveloperDesk.svg) no-repeat
    center center/cover;
  height: 25em;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  padding-top: 4em;
  padding-bottom: 3.125em;
  margin-bottom: 2em;
}
.-mind {
  width: 28%;
}
.-let {
  width: 28%;
}
</style>
