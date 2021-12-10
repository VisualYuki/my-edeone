import {mount} from "@vue/test-utils";
import AuthPage from "@/vue/pages/auth/AuthPage.vue";
import SiteButton from "@/vue/components/site/SiteButton.vue";

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
			stubs: {
				"SiteButton": SiteButton,
			},
		});

		expect(wrapper.vm.form.password).toBe("qwerty");
	});
});
