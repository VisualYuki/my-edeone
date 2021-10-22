import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
//import vuetify from "./plugins/vuetify";
import "./plugins/bootstrapVue";

Vue.config.productionTip = false;

//Vue.component("button-counter", {
//	data: function () {
//		return {
//			count: 0,
//		};
//	},
//	template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>',
//});

new Vue({
	router,
	store,
	//vuetify,
	render: (h) => h(App),
}).$mount("#app");
