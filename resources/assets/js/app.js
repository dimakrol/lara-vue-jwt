import Vue from 'vue';
import VueRouter from 'vue-router';
import axios from 'axios';
import VueAxios from 'vue-axios';
import App from './App.vue';
import notesStore from './stores/noteStore';
import router from './routes';

Vue.use(VueRouter);
Vue.use(VueAxios, axios);

axios.defaults.baseURL = 'http://localhost:8000/api';

Vue.router = router;

Vue.use(require('@websanova/vue-auth'), {
    auth: require('@websanova/vue-auth/drivers/auth/bearer.js'),
    http: require('@websanova/vue-auth/drivers/http/axios.1.x.js'),
    router: require('@websanova/vue-auth/drivers/router/vue-router.2.x.js'),
});
App.router = Vue.router;
App.store = notesStore;

new Vue(App).$mount('#app');