import Vue from 'vue';
import VeeValidate from 'vee-validate';
import vSelect from "vue-select";
import "vue-select/dist/vue-select.css";

import Bahnhof from './admin/Bahnhof';
import Adresse from './admin/Adresse';
import Erklarung from './admin/Erklarung';

//import "vue-select/dist/vue-select.css";


import { store } from './_store';
import { router } from './_helpers';
import App from './app/App';

Vue.use(VeeValidate);
Vue.component("v-select", vSelect);
Vue.component("Bahnhof", Bahnhof);
Vue.component("Adresse", Adresse);
Vue.component("Erklarung", Erklarung);


// setup fake backend
//import { configureFakeBackend } from './_helpers';
//configureFakeBackend();

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
});