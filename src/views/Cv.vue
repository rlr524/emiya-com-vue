<template>
  <div class="lg:mx-64 sm:mx-16 lg:px-32 sm:px-4 my-16">
    <h1 class="text-3xl font-bold text-emiyablack">
      Skills, experience, tech + programming languages
    </h1>
    <ol>
      <li class="font-bold mt-4 mb-2">
        Web development
      </li>
      <ol class="list-disc ml-5">
        <li>HTML, CSS / Sass, JavaScript</li>
        <li>
          Vue.js - JavaScript front-end framework for single page apps (SPA)
        </li>
        <li>React.js - JavaScript front-end library for SPA</li>
        <li>Tailwind - CSS utility library for styling</li>
        <li>
          Bootstrap - CSS framework for styling and styled components developed
          by Twitter
        </li>
        <li>
          Material UI / Material Design - Styling and component framework
          designed by Google primarily for product commerce sites. Material UI
          is the implementation of Material Design for apps built using React.js
        </li>
        <li>
          Electron - Electron is a framework for building desktop applications
          for Windows, Mac or Linux using JavaScript. Electron apps are designed
          to run from a local application installed on a user's computer but
          will look and feel like a web application. Some examples of Electron
          apps are Facebook Messenger, Twitch, Microsoft Teams and Visual Studio
          Code, the development environment we use to develop many of your sites
          and apps
        </li>
      </ol>
      <li class="font-bold mt-4 mb-2">
        Back-end APIs / databases
      </li>
      <ol class="list-disc ml-5">
        <li>
          Javascript / Node.js - one of the most common languages and runtimes
          for web back-ends
        </li>
        <li>
          Go - a modern language created by a team at Google for developing web
          applications at scale; we often use Go for writing web services where
          performance is especially crucial however deployment of services
          written in Go may be costlier that services using Node.js
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
          Heroku - Platform for hosting back-end code and databases in a single
          on-demand environment
        </li>
        <li>
          Firebase - Google's platform, similar to Heroku, for hosting apps and
          databases; we also use Firebase in most cases for user authentication
          where needed
        </li>
      </ol>
      <li class="font-bold mt-4 mb-2">
        Mobile app development
      </li>
      <ol class="list-disc ml-5">
        <li>
          In the vast majaority of cases, the web applications built for our
          clients will be entirely responsive and perform seamlessly on both
          desktops / laptops and Apple or Android device browsers. What is
          "responsiveness"? Open this page or any other page on our site in your
          mobile phone's browser, or simply shrink your browser window now to
          see! However, in some cases clients may want a separate native mobile
          application. At this time, we are able to build applications for Apple
          devices
        </li>
        <li>
          Swift including UIKit and SwiftUI - Apple provides two APIs for
          development of iOS apps; SwiftUI is the newer of the two, however it
          will work only on devices running iOS versions 13+, so we recommend it
          only in specific cases
        </li>
        <li>
          Firebase mobile app back-end integration
        </li>
        <li>
          Available soon in limited cases: Flutter - Flutter is a technology
          developed by Google allowing for "code once, deploy many" mobile
          applications, where a single codebase may be used to deploy to both
          Apple and Android devices. In most cases, we recommend native apps for
          all but the simplest mobile apps due to potential performance issues
          inherent in apps built using non-native code
        </li>
      </ol>
      <li class="font-bold mt-4 mb-2">
        Professional experience
      </li>
      <ol class="list-disc ml-5">
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
    </ol>
  </div>
</template>

<script>
export default {
  name: "Cv",
  components: {}
};
</script>

<style scoped></style>
