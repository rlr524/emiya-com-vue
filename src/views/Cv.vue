<template>
  <div id="cv-container">
    <div
      class="flex flex-wrap h-auto md:mx-16 md:px-8 md:my-16 sm:mx-8 sm:px-4 sm:my-4"
    >
      <svg
        class="md:w-1/5 sm:w-1/5 flex justify-center"
        viewBox="0 0 20 20"
        fill="#1E44A9"
      >
        <path
          fill-rule="evenodd"
          d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
          clip-rule="evenodd"
        />
        <path
          d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"
        />
      </svg>
      <div class="md:w-2/5 sm:w-full flex justify-center">
        <ol class="list-none ml-5">
          <li class="font-bold mt-4 mb-2">
            Web development
          </li>
          <li>HTML, CSS / Sass, JavaScript</li>
          <li>
            Vue.js / React.js - JavaScript front-end frameworks / libraries for
            single page apps (SPA)
          </li>
          <div class="cv-callout">
            <li>
              Vue.js and React.js are commonly used in modern web design; React
              is supported by Facebook and is typically used for
              enterprise-grade applications while Vue is independent, nimble and
              used for smaller applications. This very site is built with Vue!
            </li>
          </div>
          <li>Tailwind / Bootstrap - CSS libraries / frameworks for styling</li>
          <li>
            Material UI / Material Design - Styling and component framework
            designed by Google primarily for product commerce sites
          </li>
          <div class="cv-callout">
            <li>
              CSS gives a web site its appearance; think of it as the clothes on
              the HTML body. Frameworks such as Tailwind, Bootstrap and
              MaterialUI allow us to reuse style components easily, leading to
              faster load times and less code. Emiyaconsulting.com uses Tailwind
              for styling!
            </li>
          </div>
          <li>
            Electron - Electron apps are designed to run from a local
            application installed on a user's computer but will look and feel
            like a web application
          </li>
        </ol>
      </div>
      <div class="md:w-2/5 sm:w-full flex items-center justify-center">
        <ol class="ml-5 list-none">
          <li class="font-bold mt-4 mb-2">
            Mobile app development for iOS
          </li>
          <li>
            In the vast majority of cases, web applications built for our
            clients will be responsive and perform seamlessly on both desktops /
            laptops and Apple or Android device browsers. However, in some cases
            clients may want a separate native mobile application
          </li>
          <div class="cv-callout">
            <li>
              What is "responsiveness"? Open this page or any other page on our
              site in your mobile phone's browser, or simply shrink your browser
              window to see!
            </li>
          </div>
          <li>
            Swift including UIKit and SwiftUI - Apple provides two APIs for
            development of iOS apps; SwiftUI is the newer of the two
          </li>
          <div class="cv-callout">
            <li>
              SwiftUI will work only on devices running iOS versions 13+, so we
              recommend it only in specific cases where you are not concerned
              about users with older Apple devices
            </li>
          </div>
          <li>
            Firebase mobile app back-end integration
          </li>
          <li>
            Available soon in limited cases: Flutter - Flutter is a technology
            developed by Google allowing a single codebase to be used to deploy
            to both Apple and Android devices
          </li>
          <div class="cv-callout">
            <li>
              In most cases, we recommend native apps for all but the simplest
              mobile apps due to potential performance issues inherent in apps
              built using non-native code
            </li>
          </div>
        </ol>
      </div>
    </div>
    <div
      class="flex flex-wrap h-auto md:mx-16 md:px-8 md:my-16 sm:mx-8 sm:px-4 sm:my-4"
    >
      <div class="w-1/2 flex items-center justify-center">
        <ol class="list-none ml-5">
          <li class="font-bold mt-4 mb-2">
            Back-end APIs / databases
          </li>

          <li>
            Javascript / Node.js - one of the most common languages and runtimes
            for web back-ends
          </li>
          <li>
            Go - a modern language created by a team at Google for developing
            web applications at scale; we often use Go for writing web services
            where performance is especially crucial however deployment of
            services written in Go may be costlier that services using Node.js
          </li>
          <li>
            MongoDB - NoSQL database that integrates effectively with web
            applications; best for applications with unstructured data such as
            creative content, documentation, or customer comments and reviews
          </li>
          <li>
            Realtime DB or Cloud Firestore - Like MongoDB but hosted by Google
          </li>
          <li>DynamoDB - Like MongoDB but hosted by Amazon</li>
          <li>
            Google Cloud SQL and Amazon RDS - Traditional SQL databases that are
            best for applications with structured data such as multi-dimensional
            product or customer data and financial data
          </li>
          <li>
            Heroku - Platform for hosting back-end code and databases in a
            single on-demand environment
          </li>
          <li>
            Firebase - Google's platform, similar to Heroku, for hosting apps
            and databases; we also use Firebase in most cases for user
            authentication where needed
          </li>
        </ol>
      </div>
    </div>
    <div
      class="flex flex-wrap h-auto md:mx-16 md:px-8 md:my-16 sm:mx-8 sm:px-4 sm:my-4"
    >
      <div class="w-1/2 flex items-center justify-center">
        <ol class="list-none ml-5">
          <li class="font-bold mt-4 mb-2">
            Professional experience
          </li>
          <li>
            25+ years at Nordstrom, Inc.
          </li>
          <li>
            13+ years owning and developing tech and operations strategies for
            Nordstrom's Legal / Risk Management organization
          </li>
          <li>
            3+ years owning and managing inventory and store technology for
            multiple Nordstrom locations
          </li>
          <li>
            Certified Associate in Project Management (CAPM)
          </li>
          <li>AWS Certified Cloud Practitioner</li>
        </ol>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Cv",
  components: {}
};
</script>

<style scoped>
li {
  @apply py-2;
}
.cv-callout {
  font-style: italic;
  font-weight: 500;
  margin: 0 1rem;
  padding: 0 1rem;
  background-color: lightgrey;
}
</style>
