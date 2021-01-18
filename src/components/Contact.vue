<template>
  <div id="contact-form" class="flex">
    <div class="flex-initial">
      <div>
        <img
          class="pt-12 pb-12 w-full object-cover lg:absolute lg:h-full"
          src="https://images.unsplash.com/photo-1556761175-4b46a572b786?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80"
          alt="Stock office setting"
        />
      </div>
    </div>
    <div class="flex-initial">
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
a[href^="mailto"]::before {
  content: "📧 ";
}
a[href^="tel"]::before {
  content: "📞 ";
}
.clickup-embed {
  background: transparent;
}
</style>
