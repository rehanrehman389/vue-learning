import { createApp } from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify)
new Vue({
    router,
    store,
    Vuetify,
    render: h => h(App)
}).$mount("#app");
