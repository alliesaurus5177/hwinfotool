import $ from 'jquery';

import './app/index.js';

import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';

import 'bootstrap-vue/dist/bootstrap-vue.css';

import './sass/styles.scss';

import App from './app.vue';

Vue.use(BootstrapVue);

new Vue({
    el: '#app',
    render: h => h(App)
})