<template>
  <div id="contact-form" class="relative">
  <div class="lg:absolute lg:inset-0">
    <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
      <img class="pt-12 pb-12 w-full object-cover lg:absolute lg:h-full" src="https://images.unsplash.com/photo-1556761175-4b46a572b786?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80" alt="Stock office setting">
    </div>
  </div>
  <div class="relative pt-12 pb-16 px-4 sm:pt-16 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto lg:grid lg:grid-cols-2">
    <div class="lg:pr-8">
      <div class="max-w-md mx-auto sm:max-w-lg lg:mx-0">
        <h2 class="text-base sm:text-base md:text-xl lg:text-3xl xl:text-4xl text-emiyablack font-bold tracking-tight">
          Let's work together
        </h2>
        <p class="text-base sm:text-sm md:text-base lg:text-sm xl:text-base text-emiyablack mt-4 sm:mt-3">
          We’d love to hear from you! Send us a message using the form or email us at <a href="mailto:rob@emiyaconsulting.com">rob@emiyaconsulting.com</a> 
        </p>
        <form action="#" method="POST" class="mt-9 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
          <div>
            <label for="first_name" class="block text-sm font-medium text-emiyablack">First name</label>
            <div class="mt-1">
              <input type="text" name="first_name" id="first_name" autocomplete="given-name" class="block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md">
            </div>
          </div>
          <div>
            <label for="last_name" class="block text-sm font-medium text-emiyablack">Last name</label>
            <div class="mt-1">
              <input type="text" name="last_name" id="last_name" autocomplete="family-name" class="block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md">
            </div>
          </div>
          <div class="sm:col-span-2">
            <label for="email" class="block text-sm font-medium text-emiyablack">Email</label>
            <div class="mt-1">
              <input id="email" name="email" type="email" autocomplete="email" class="block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md">
            </div>
          </div>
          <div class="sm:col-span-2">
            <label for="company" class="block text-sm font-medium text-emiyablack">Company</label>
            <div class="mt-1">
              <input type="text" name="company" id="company" autocomplete="organization" class="block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md">
            </div>
          </div>
          <div class="sm:col-span-2">
            <div class="flex justify-between">
              <label for="phone" class="block text-sm font-medium text-emiyablack">Phone (Optional)</label>
            </div>
            <div class="mt-1">
              <input type="text" name="phone" id="phone" autocomplete="tel" aria-describedby="phone_description" class="block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md">
            </div>
          </div>
          <div class="sm:col-span-2">
            <div class="flex justify-between">
              <label for="how_can_we_help" class="block text-sm font-medium text-emiyablack">How can we help you? (Max 500 characters)</label>
            </div>
            <div class="mt-1">
              <textarea id="how_can_we_help" name="how_can_we_help" aria-describedby="how_can_we_help_description" rows="4" class="block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"></textarea>
            </div>
          </div>
          <!-- <fieldset class="sm:col-span-2">
            <legend class="block text-sm font-medium text-gray-700">
              Expected budget
            </legend>
            <div class="mt-4 grid grid-cols-1 gap-y-4">
              <div class="flex items-center">
                <input id="budget_under_25k" name="budget" value="under_25k" type="radio" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300">
                <label for="budget_under_25k" class="ml-3">
                  <span class="block text-sm text-gray-700">Less than $25K</span>
                </label>
              </div>
              <div class="flex items-center">
                <input id="budget_25k-50k" name="budget" value="25k-50k" type="radio" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300">
                <label for="budget_25k-50k" class="ml-3">
                  <span class="block text-sm text-gray-700">$25K – $50K</span>
                </label>
              </div>
              <div class="flex items-center">
                <input id="budget_50k-100k" name="budget" value="50k-100k" type="radio" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300">
                <label for="budget_50k-100k" class="ml-3">
                  <span class="block text-sm text-gray-700">$50K – $100K</span>
                </label>
              </div>
              <div class="flex items-center">
                <input id="budget_over_100k" name="budget" value="over_100k" type="radio" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300">
                <label for="budget_over_100k" class="ml-3">
                  <span class="block text-sm text-gray-700">$100K+</span>
                </label>
              </div>
            </div>
          </fieldset> -->
          <div class="sm:col-span-2">
            <label for="how_did_you_hear_about_us" class="block text-sm font-medium text-emiyablack">How did you hear about us?</label>
            <div class="mt-1">
              <input type="text" name="how_did_you_hear_about_us" id="how_did_you_hear_about_us" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md">
            </div>
          </div>
          <div class="text-right sm:col-span-2">
            <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
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
</style>
