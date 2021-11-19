<template>
	<div>
		<SiteFormInput
			v-model="$v.vuelidateForm.name.$model"
			:state="validateState('name')"
			placeholder="Имя"
			errorMessage="Поле должно быть заполнено"
		>
		</SiteFormInput>

		<SiteFormInput
			type="email"
			v-model="$v.vuelidateForm.login.$model"
			:state="validateState('login')"
			placeholder="Email"
			errorMessage="Неверный формат почты."
		>
		</SiteFormInput>
	</div>
</template>

<script>
	import SiteText from "@/vue/components/site/SiteText.vue";
	import SiteLink from "@comp/site/SiteLink.vue";
	import SiteButton from "@comp/site/SiteButton.vue";
	import SiteFormInput from "@/vue/components/site/SiteFormInput.vue";

	import {vuelidate} from "@vue/mixins/vuelidate.js";
	import {required, email, minLength} from "vuelidate/lib/validators";

	import {AuthApi} from "@/api/modules/auth.api.js";

	export default {
		name: "RegistrationPage",
		mixins: [vuelidate],
		components: {SiteButton, SiteLink, SiteText, SiteFormInput},
		validations: {
			vuelidateForm: {
				login: {
					required,
					email,
				},
				password: {
					required,
					minLength: minLength(6),
				},
				name: {
					required,
				},
			},
		},
		data() {
			return {
				vuelidateForm: {
					name: "denis",
					login: "comedy951@yandex.ru",
					password: "password",
				},
			};
		},
		methods: {},
	};
</script>

<style lang="scss"></style>
