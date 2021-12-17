import {mount} from "@vue/test-utils";
import AuthPage from "@/vue/pages/auth/AuthPage.vue";

import "@/vue/components/globalComponents.js";
import "@/plugins/index.js";
//import "@/main.js";

//const $route = {path: "/items"};

describe("HelloWorld.vue", () => {
	it("renders props.msg when passed", () => {
		const wrapper = mount(AuthPage, {
			data() {
				return {
					form: {
						login: "comedy951@yandex.12",
						password: "qwerty",
					},
				};
			},
		});

		//console.log(wrapper.vm.$route);
		//console.log(wrapper.vm.$route);

		//expect(wrapper.vm.$route.path).toBe($route.path);
		expect(wrapper.vm.form.password).toBe("qwerty");
	});
});
