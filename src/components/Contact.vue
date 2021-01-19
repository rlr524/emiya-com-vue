<template>
  <div id="contact-form" class="relative">
    <div class="lg:absolute lg:inset-0">
      <div class="mr-12 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          class="pt-12 pb-12 w-full object-cover lg:absolute lg:h-full"
          src="https://images.unsplash.com/photo-1556761175-4b46a572b786?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80"
          alt="Stock office setting"
        />
      </div>
    </div>
    <div
      class="relative pt-12 pb-12 px-4 sm:pt-16 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto lg:grid lg:grid-cols-2"
    >
      <iframe
        class="clickup-embed clickup-dynamic-height"
        src="https://forms.clickup.com/f/828d0-175/4KHDZHZLT933K130VL"
        onwheel=""
        style="background: transparent"
      ></iframe>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contact",
  components: {},
};
</script>

<style scoped>
.clickup-embed {
  background: transparent;
}
</style>
