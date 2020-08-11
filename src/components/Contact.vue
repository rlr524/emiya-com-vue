<template>
  <div id="contact" class="mx-16 my-16">
    <div class="alert hidden">Thank you! Your message has been sent.</div>
    <div class="alert-error hidden">
      We're sorry, there has been an error submitting your message. You can
      email us direct at
      <a href="mailto:rob@emiyaconsulting.com" target="blank" rel="noreferrer">
        rob@emiyaconsulting.com
      </a>
    </div>
    <form class="w-full max-w-lg" id="contact-form" action="" method="post">
      <div class="flex wrap -mx-3 mb-6">
        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="name"
          >
            Name
          </label>
          <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            type="text"
            name="name"
            id="name"
            required
          />
          <p class="text-red-500 text-xs italic">
            Please fill out this field.
          </p>
        </div>
        <div class="w-full md:w-1/2 px-3">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="company"
          >
            Company
          </label>
          <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            type="text"
            name="company"
            id="company"
          />
        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="email"
            >
              Email address
            </label>
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="email"
              name="email"
              id="email"
              required
            />
          </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="phone"
          >
            Phone Number
          </label>
          <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            type="tel"
            name="phone"
            id="phone"
          />
        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="message"
          >
            Message
          </label>
          <textarea
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            type="text"
            name="message"
            id="message"
            rows="5"
          ></textarea>
        </div>
      </div>
      <div class="btn">
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          type="submit"
        >
          Submit
        </button>
      </div>
    </form>
    Emiya Consulting is not currently accepting clients.
    <address>
      <p>
        <br />
        <a href="mailto:admin@emiyaconsulting.com">admin@emiyaconsulting.com</a>
        <br />
        <a href="tel:+14252725745">(425) 272-5745</a>
        <br />
        Emiya Consulting LLC
        <br />
        PO Box 498
        <br />
        Issaquah, WA 98027
        <br />
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
