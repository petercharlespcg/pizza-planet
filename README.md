# pizza-planet

> Vue.js: Build a Full Stack App with Firebase, Vuex and Router

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).

## Vue.js: Build a Full Stack App with Firebase, Vuex and Router
https://proquestpubliclibrary-safaribooksonline-com.ezproxy.torontopubliclibrary.ca/video/programming/javascript/9781838980627
# Notes
Chapter 1 : Introduction & Getting Started

Chapter 2 : Project Setup: Planet Pizza App
npm install -g @vue/cli-init
Installation | Vue CLI
yarn global add @vue/cli

vue init webpack-simple pizza-planet
? Project name pizza-planet
? Project description A Vue.js project
? Author Peterg <petercharles.ca@gmail.com>
? License MIT
? Use sass? No

yarn
yarn dev

Chapter 3 : Firebase database and authentication setup
firebase.google.com
  var firebaseConfig = {
    apiKey: "AIzaSyAmm03SZzt1dF5nqyvNCf_VlO45787ntWk",
    authDomain: "my-sample-project-cf00d.firebaseapp.com",
    databaseURL: "https://my-sample-project-cf00d.firebaseio.com",
    projectId: "my-sample-project-cf00d",
    storageBucket: "my-sample-project-cf00d.appspot.com",
    messagingSenderId: "558586018838",
    appId: "1:558586018838:web:07e5252ad339f4e86a0937",
    measurementId: "G-CD60KHCZT1"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

yarn add firebase

https://console.firebase.google.com/project/my-sample-project-cf00d/authentication/users
petercharles.ca@gmail.com:y

Chapter 4 : Vue Router
yarn add vue-router

Chapter 5 : Stage Management with Vuex
yarn add vuex

Chapter 6 : Binding to Firebase & finishing our project
yarn add vuexfire

Binding Vuex to Firebase
posva/vuexfire
Did something change with firebaseAction / firebaseMutations ...
Yes, there were some changes. Please check https://github.com/vuejs/vuefire/blob/master/CHANGELOG.md for details
vuexfire: Rename firebaseMutations into vuexfireMutations. Rename firebaseAction into firestoreAction since we want to allow using RTDB as well and that name will be used for the firebaseAction as well
src\store\store.js
// import { firebaseMutations } from 'vuexfire'
import { vuexfireMutations } from "vuexfire";
  // mutations: { ...firebaseMutations },
  mutations: { ...vuexfireMutations },

http://localhost:8080/admin
$vm0.$store.state.orders["orders"][0][0].name
$vm0.$store.getters.getOrders[0][0].name

Chapter 6 : Binding to Firebase & finishing our project
yarn add accounting-js
src\main.js
import Accouting from 'accounting-js'
Vue.filter('currency', function (val) {
  return Accouting.formatMoney(val)
})
src\components\Menu.vue
        <p>Order total: {{ total | currency }} </p>

Chapter 7 : Lazy loading and code splitting
yarn add babel-plugin-syntax-dynamic-import --dev

Chapter 8 : Thank you
