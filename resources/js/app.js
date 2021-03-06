/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */
require('./bootstrap');

window.Vue = require('vue');
import BootstrapVue from 'bootstrap-vue'
import VueWorker from 'vue-worker'
Vue.use(VueWorker)
Vue.use(BootstrapVue)

Vue.prototype.__ = string =>{
    return window.i18n[string]?window.i18n[string]:string
}

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('map-component', require('./components/MapComponent.vue').default);
Vue.component('control-panel-component', require('./components/ControlPanelComponent.vue').default);
Vue.component('location-details-modal', require('./components/LocationDetailsModalComponent.vue').default);
Vue.component('add-panel-modal', require('./components/AddPanelModalComponent.vue').default);
Vue.component('busy-modal', require('./components/BusyModalComponent.vue').default);
Vue.component('add-turbine-modal', require('./components/AddTurbineModalComponent.vue').default);
Vue.component('add-edit-zone-modal', require('./components/AddEditZoneModalComponent.vue').default);
Vue.component('solar-table', require('./components/SolarTableComponent.vue').default);
Vue.component('wind-table', require('./components/WindTableComponent.vue').default);
Vue.component('zone-table', require('./components/ZoneTableComponent.vue').default);
Vue.component('results-table', require('./components/ResultsTableComponent.vue').default);



/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
});
