import Vue from 'vue'
import Vuex from 'vuex'
import ActivitiesModule from './ActivitiesModule.js'

Vue.use(Vuex)

export default new Vuex.Store({
    strict: true,
    modules: {
        ActivitiesModule
    },
 
})
