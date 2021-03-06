import Vue from 'vue'
import Vuex from 'vuex';

import store from './store'

Vue.use(Vuex);
const vuexStore = new Vuex.Store(store);
export default vuexStore