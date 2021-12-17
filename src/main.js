import Vue from "vue";
import App from "@/App.vue";
import router from "@/router";
import store from "@/store";

import "@/plugins/index.js";
import "@/vue/components/globalComponents.js";

Vue.config.productionTip = false;

debugger;
new Vue({
	router,
	store,
	render: (h) => h(App),
}).$mount("#app");

// Убрать ошибки в консоли браузера, после webpack hot reload
if (module.hot) {
	module.hot.accept();

	module.hot.addStatusHandler((status) => {
		if (status === "prepare") console.clear();
	});
}
