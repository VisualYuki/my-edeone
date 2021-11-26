<template>
	<div>
		<!--<SiteText align="center" class="mb-md-5 mb-3" tag="h1" size="h2"> </SiteText>-->

		<SiteErrorAlert :show="this.isAuthError" :message="authErrorMessage" />

		<SiteFormInput
			type="email"
			v-model="$v.form.login.$model"
			:state="validateState('login')"
			placeholder="Email"
			errorMessage="Неверный формат почты."
		/>

		<SiteFormInput
			type="password"
			v-model="$v.form.password.$model"
			:state="validateState('password')"
			placeholder="Пароль"
			errorMessage="Пароль должен содержать не менее 6 символов"
		/>

		<div class="d-flex justify-content-between mb-3">
			<SiteLink to="/auth/forgot-password">Забыли пароль?</SiteLink>
			<SiteLink to="/auth/registration">Регистрация</SiteLink>
		</div>

		<SiteButton @click="submitForm" :only-spinner="isFetchingLoginRequest"> Войти </SiteButton>

		<SiteButton disabled>
			Войти через ВК
			<FontAwesomeIcon :icon="['fab', 'vk']" size="lg" />
		</SiteButton>
		<SiteButton variant="outline-primary" href="https://store.edeone.com/"> Я ученик </SiteButton>
	</div>
</template>

<script>
	import {vuelidate} from "@vue/mixins/vuelidate.js";
	import {required, email, minLength} from "vuelidate/lib/validators";

	import {AuthApi} from "@/api/modules/auth.api.js";

	import {mapActions, mapGetters} from "vuex";
	import {LOGIN, IS_AUTH} from "@/store/modules/auth.store.js";

	import {getErrorMessage} from "@/vue/utils/helpFunctions.js";

	export default {
		name: "AuthPage",
		mixins: [vuelidate],

		data() {
			return {
				form: {
					login: "comedy951@yandex.ru12",
					password: "qwe123",
				},
				isAuthError: false,
				isFetchingLoginRequest: false,
				authErrorMessage: "",
			};
		},
		validations: {
			form: {
				login: {
					required,
					email,
				},
				password: {
					required,
					minLength: minLength(6),
				},
			},
		},
		methods: {
			...mapActions("auth", [LOGIN]),
			submitForm() {
				this.$v.form.$touch();
				const isValidForm = !this.$v.$invalid;

				if (isValidForm) {
					this.isFetchingLoginRequest = true;
					AuthApi.login(this.$v.form.login.$model, this.$v.form.password.$model).then((response) => {
						this.authErrorMessage = "";

						if (response.success) {
							this.isAuthError = false;

							this.$store.dispatch(`auth/${LOGIN}`, response.data.token_group);
						} else {
							this.authErrorMessage = getErrorMessage(response.data.errors);

							this.isAuthError = true;
						}

						this.isFetchingLoginRequest = false;
					});
				}
			},
		},
		computed: {
			...mapGetters("auth", [IS_AUTH]),
		},
	};
</script>

<style lang="scss" scoped></style>
