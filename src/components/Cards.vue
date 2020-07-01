<template>
  <div class="card-container text-center text-emiyablack">
    <div class="max-w-m rounded overflow-hidden shadow-lg pt-4">
      <p class="font-bold text-xl">
        Why Emiya Consulting
      </p>
      <ul class="-card-text">
        <li class="-card-item">
          Services designed for your business, no one-size-fits-all solutions
        </li>
        <li class="-card-item">
          End-to-end support: We manage design, development, deployment and
          hosting
        </li>
        <li class="-card-item">Simple: no overcomplicated, costly solutions</li>
        <li>
          Business experience: 25+ Years at an F500 corporation; you don't need
          just a coder, but someone who understands real-world business
        </li>
      </ul>
    </div>
    <div class="max-w-m rounded overflow-hidden shadow-lg pt-4">
      <p class="font-bold text-xl">
        Web Design and Development
      </p>
      <ul class="-card-text">
        <li class="-card-item">
          Responsive, accessible static websites as well as dynamic web apps,
          SPAs, PWAs, and Electron desktop apps
        </li>
        <li class="-card-item">
          Modern front-end frameworks and libraries including Vue.js, React.js,
          Bootstrap and Tailwind
        </li>
        <li class="-card-item">
          Security, SEO, and disaster recovery at every step
        </li>
        <li>
          Back-end APIs / web services and databases using Node.js or Go,
          connected to MongoDB, MySQL, MS SQL, Firebase / Firestore, or
          PostgreSQL
        </li>
      </ul>
    </div>
    <div class="max-w-m rounded overflow-hidden shadow-lg pt-4">
      <p class="font-bold text-xl">
        Mobile iOS App Development
      </p>
      <ul class="-card-text">
        <li class="-card-item">
          Apps built for iOS and iPadOS devices with Swift 5
        </li>
        <li class="-card-item">
          Back-ends built to code once and deploy anywhere so they can be shared
          by web and mobile apps
        </li>
        <li class="-card-item">
          Cloud first: Specializations in Google Cloud Platform, Firebase, and
          AWS allow for fast deployment and easy updates
        </li>
        <li>
          Your apps are monitored and maintained for reasonable maintenance
          costs
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Cards"
};
</script>

<style scoped>
.card-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1em;
  height: 25em;
  z-index: 10;
  margin-top: 4em;
  margin-bottom: 2em;
}
.-card-text {
  padding: 0 4rem;
}
.-card-item {
  margin-bottom: 1rem;
  border-bottom: grey 1px solid;
  padding-bottom: 1rem;
}
</style>
