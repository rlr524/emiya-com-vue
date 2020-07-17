<template>
  <div id="contact" class="mx-16 my-16">
    Emiya Consulting is not currently accepting clients.
    <address>
      <p>
        <br />
        <a href="mailto:admin@emiyaconsulting.com">admin@emiyaconsulting.com</a>
        <br />
        <a href="tel:+14252725745">(425) 272-5745</a>
      </p>
    </address>
  </div>
</template>

<script>
export default {
  name: "Contact",
  components: {}
};
</script>

<style scoped>
a[href^="mailto"]::before {
  content: "📧 ";
}
a[href^="tel"]::before {
  content: "📞 ";
}
</style>
