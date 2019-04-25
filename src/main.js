// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import storage from './utils/sessionStorage'
import encryption from "./utils/encryption";
import router from './router/index';
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import spins from './components/spin/spin'
import http from './api/http'
import ports from './api/ports'
// import './promission'

Vue.use(iView);
Vue.config.productionTip = false;
Vue.prototype.spins = spins;
Vue.prototype.http = http;
Vue.prototype.ports = ports;
Vue.prototype.storage = storage;
Vue.prototype.encryption = encryption;


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
