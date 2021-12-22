import {mount} from "@vue/test-utils";
import AuthPage from "@/vue/pages/auth/AuthPage.vue";

import "@/vue/components/globalComponents.js";
import "@/plugins/index.js";
//import "@/main.js";

//const $route = {path: "/items"};

describe("HelloWorld.vue", () => {
	it("renders props.msg when passed", async () => {
		const wrapper = mount(AuthPage, {
			data() {
				return {
					form: {
						login: "comedy951@yandex.ru",
						password: "qwerty",
					},
					counter: 3,
				};
			},
		});

		//let button = wrapper.find("#custom-button");

		//await button.trigger("click");

		//console.log(wrapper.vm.$route);
		//console.log(wrapper.vm.$route);

		//expect(wrapper.vm.$route.path).toBe($route.path);
		expect(wrapper.vm.counter).toBe(3);
	});
});
