import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
//import vuetify from "./plugins/vuetify";
import "./plugins/bootstrapVue.js";

Vue.config.productionTip = false;

new Vue({
	router,
	store,
	//vuetify,
	render: (h) => h(App),
}).$mount("#app");

// Убрать ошибки в консоли, после webpack hot reload
if (module.hot) {
	module.hot.accept();

	module.hot.addStatusHandler((status) => {
		if (status === "prepare") console.clear();
	});
}
