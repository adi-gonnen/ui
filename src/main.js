import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App.vue'
import router from './router'
import store from './stores/store'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars, faCog, faCaretLeft, faCaretDown, faReply } from '@fortawesome/free-solid-svg-icons'
import { faClock, faEllipsisV, faEnvelope, faBell, faSearch } from '@fortawesome/free-solid-svg-icons'
import { faDotCircle, faCalendarAlt, faSignature, faEquals, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faSearch)
library.add(faBars)
library.add(faClock)
library.add(faBell);
library.add(faEnvelope);
library.add(faCog);
library.add(faCaretLeft);
library.add(faCaretDown);
library.add(faReply);
library.add(faEllipsisV);
library.add(faCalendarAlt);
library.add(faSignature);
library.add(faEquals);
library.add(faHome);
library.add(faUser);
library.add(faDotCircle);

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(Vuetify)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
