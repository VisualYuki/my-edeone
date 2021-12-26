<template>
	<div>
		<SiteErrorAlert :show="errorAlert.hasError" :message="errorAlert.errorMessage" />
		<SiteFormInput
			v-model="$v.validations.email.$model"
			type="email"
			:state="validateState('email')"
			placeholder="Email"
			error-message="Неверный формат почты."
		/>
		<SiteFormInput
			v-model="$v.validations.password.$model"
			type="password"
			:state="validateState('password')"
			placeholder="Пароль"
			error-message="Пароль должен содержать не менее 6 символов"
		/>
		<div class="d-flex justify-content-between mb-3">
			<SiteLink to="/auth/forgot-password"> Забыли пароль? </SiteLink>
			<SiteLink to="/auth/registration"> Регистрация </SiteLink>
		</div>
		<SiteButton :only-spinner="isLoading" @click="submit"> Войти </SiteButton>
		<SiteButton disabled>
			Войти через ВК
			<FontAwesomeIcon :icon="['fab', 'vk']" size="lg" />
		</SiteButton>
		<SiteButton variant="outline-primary" href="https://store.edeone.com/"> Я ученик </SiteButton>
	</div>
</template>

<script>
	import {vuelidate} from "@/vue/mixins/vuelidate.js";
	import {required, email, minLength} from "vuelidate/lib/validators";
	import {AuthApi} from "@/api/modules/auth.api.js";
	import {mapActions, mapGetters} from "vuex";
	import {LOGIN, IS_AUTH} from "@/store/modules/auth.store.js";

	export default {
		name: "AuthPage",
		mixins: [vuelidate],
		data() {
			return {
				validations: {
					email: "comedy951@yandex.ru",
					password: "qwe123",
				},
				errorAlert: {
					hasError: false,
					errorMessage: "",
				},

				isLoading: false,
			};
		},
		validations: {
			validations: {
				email: {
					required,
					email,
				},
				password: {
					required,
					minLength: minLength(6),
				},
			},
		},
		computed: {
			...mapGetters("auth", [IS_AUTH]),
		},
		methods: {
			...mapActions("auth", [LOGIN]),
			successSubmit() {
				this.isLoading = true;

				AuthApi.login(this.$v.validations.email.$model, this.$v.validations.password.$model).then((response) => {
					this.errorAlert.errorMessage = "";

					if (response.success) {
						this.errorAlert.hasError = false;
						this.$store.dispatch(`auth/${LOGIN}`, response.data.token_group);
						this.$router.push("/items");
					} else {
						this.errorAlert.errorMessage = response.errorMessage;
						this.errorAlert.hasError = true;
					}

					this.isLoading = false;
				});
			},
		},
	};
</script>

<style lang="scss" scoped></style>
