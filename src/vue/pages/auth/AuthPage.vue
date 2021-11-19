<template>
	<div>
		<SiteText align="center" class="mb-md-5 mb-3" tag="h1" size="h2"> </SiteText>

		<b-alert variant="danger" :show="this.isAuthError">
			<SiteText align="center" v-text="authErrorMessage"></SiteText>
		</b-alert>

		<SiteFormInput
			type="email"
			v-model="$v.vuelidateForm.login.$model"
			:state="validateState('login')"
			placeholder="Email"
			errorMessage="Неверный формат почты."
		>
		</SiteFormInput>

		<SiteFormInput
			type="password"
			v-model="$v.vuelidateForm.password.$model"
			:state="validateState('password')"
			placeholder="Пароль"
			errorMessage="Пароль должен содержать не менее 6 символов"
		>
		</SiteFormInput>

		<div class="d-flex justify-content-between mb-3">
			<SiteLink to="/auth/forgot-password">Забыли пароль?</SiteLink>
			<SiteLink to="/auth/registration">Регистрация</SiteLink>
		</div>

		<SiteButton @click="submitForm" :only-spinner="isFetchingLoginRequest"> Войти </SiteButton>

		<SiteButton disabled>
			Войти через ВК
			<FontAwesomeIcon :icon="['fab', 'vk']" size="lg" />
		</SiteButton>
		<SiteButton variant="outline-primary" disabled> Я ученик </SiteButton>
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

	import {mapActions, mapGetters} from "vuex";
	import {LOGIN, IS_AUTH} from "@/store/modules/auth.store.js";

	function getErrorMessage(errors) {
		let result = "";

		for (let errorText in errors) {
			result += errors[errorText] + ".";
		}

		return result;
	}

	export default {
		name: "AuthPage",
		mixins: [vuelidate],
		components: {SiteButton, SiteLink, SiteText, SiteFormInput},
		data() {
			return {
				vuelidateForm: {
					login: "comedy951@yandex.ru",
					password: "qwe123",
				},
				isAuthError: false,
				isFetchingLoginRequest: false,
				authErrorMessage: "",
			};
		},
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
			},
		},
		methods: {
			...mapActions("auth", [LOGIN]),
			submitForm() {
				this.$v.vuelidateForm.$touch();
				const isValidForm = !this.$v.$invalid;

				if (isValidForm) {
					this.isFetchingLoginRequest = true;
					AuthApi.login(this.$v.vuelidateForm.login.$model, this.$v.vuelidateForm.password.$model).then(
						(response) => {
							// TODO: нужно ли переносить данные в vuex или оставлять их в компоненте.
							this.authErrorMessage = "";

							if (response.success) {
								this.isAuthError = false;

								this.$store.dispatch(`auth/${LOGIN}`, response.data.token_group);
							} else {
								this.authErrorMessage = getErrorMessage(response.data.errors);

								this.isAuthError = true;
							}

							this.isFetchingLoginRequest = false;
						}
					);
				}
			},
		},
		computed: {
			...mapGetters("auth", [IS_AUTH]),
		},
	};
</script>

<style lang="scss" scoped></style>
