<template>
	<div>
		<SiteErrorAlert :show="isRequestError" message="erorr request hmm(" />

		<SiteText align="center" class="mb-md-7 mb-5 mt-mb-3 mt-10" tag="p" size="h5">
			Введите E-mail, на него будет отправлена ссылка для восстановления пароля
		</SiteText>

		<SiteFormInput
			v-model="$v.validations.email.$model"
			type="email"
			:state="validateState('email')"
			placeholder="Email"
			error-message="Неверный формат почты."
			class="mb-md-6 mb-4"
		/>

		<SiteButton @click="submit"> Отправить </SiteButton>

		<SiteText align="center" class="mb-1 mt-mb-3 mt-10" tag="p" size="h5"> Вспомнили пароль? </SiteText>

		<SiteLink display to="/auth/login"> Выполните вход </SiteLink>
	</div>
</template>

<script>
	import {vuelidate} from "@/vue/mixins/vuelidate.js";
	import {required, email} from "vuelidate/lib/validators";
	import {AuthApi} from "@/api/modules/auth.api.js";
	//import {getErrorMessage} from "@/vue/utils/helpFunctions";

	export default {
		name: "ForgotPasswordPage",
		mixins: [vuelidate],
		data() {
			return {
				isRequestError: false,
				validations: {
					email: "comedy951@yandex.ru",
				},
				errorAlert: {
					hasError: false,
					errorMessage: "",
				},
			};
		},
		validations: {
			validations: {
				email: {
					required,
					email,
				},
			},
		},
		methods: {
			successSubmit() {
				this.isFetchingLoginRequest = true;

				AuthApi.forgotPassword(this.$v.validations.email.$model).then(() => {
					debugger;
					//this.authErrorMessage = "";
					//if (response.success) {
					//	this.isAuthError = false;
					//	this.$store.dispatch(`auth/${LOGIN}`, response.data.token_group);
					//	this.$router.push("/items");
					//} else {
					//	this.authErrorMessage = getErrorMessage(response.data.errors);
					//	this.isAuthError = true;
					//}
					//this.isFetchingLoginRequest = false;
				});
			},
		},
	};
</script>

<style lang="scss"></style>
