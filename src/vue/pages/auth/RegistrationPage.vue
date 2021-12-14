<template>
	<div>
		<SiteErrorAlert :show="errorAlert.hasRegisterError" message="fgh" />

		<div class="mb-8">
			<SiteFormInput
				v-model="$v.form.name.$model"
				:state="validateState('name')"
				placeholder="Имя"
				error-message="Поле должно быть заполнено"
			/>

			<SiteFormInput
				v-model="$v.form.login.$model"
				type="email"
				:state="validateState('login')"
				placeholder="Email"
				error-message="Неверный формат почты."
			/>

			<SiteFormInput
				v-model="$v.form.password.$model"
				:type="showPassword ? 'text' : 'password'"
				:state="validateState('password')"
				placeholder="Пароль"
				error-message="Слишком короткий пароль"
				icon
			>
				<template #icon>
					<div class="icon cursor-pointer" @click="showPassword = !showPassword">
						<b-icon-eye-slash v-if="showPassword" class="hide" scale="1.5" />

						<b-icon-eye v-else class="show" scale="1.5" />
					</div>
				</template>
			</SiteFormInput>
		</div>

		<b-form-group class="cursor-pointer agree-terms mb-5">
			<b-form-checkbox v-model="form.agreeTerms" :state="validateState('agreeTerms')">
				Я принимаю условия
				<a href="https://edeone.com/docs/termsofuse.pdf" target="_blank">пользовательского соглашения</a>
			</b-form-checkbox>
			<p v-if="$v.form.agreeTerms.$error" class="text-danger" style="font-size: 80%">
				Необходимо принять соглашение
			</p>
		</b-form-group>

		<div class="link-wrap mb-5">
			<SiteButton @click="register"> Регистрация </SiteButton>

			<div v-if="vkLoginLink">
				<div class="d-flex my-3 align-items-center">
					<hr class="flex-grow-1" />
					<span class="my-auto px-3">ИЛИ</span>
					<hr class="flex-grow-1" />
				</div>

				<SiteButton disabled :href="vkLoginLink">
					Войти через ВК
					<FontAwesomeIcon :icon="['fab', 'vk']" size="lg" />
				</SiteButton>
			</div>
		</div>

		<SiteLink display to="/auth/login" class="text-center">Уже зарегистрированы? Войти</SiteLink>
	</div>
</template>

<script>
	import {vuelidate} from "@/vue/mixins/vuelidate.js";
	import {required, email, minLength} from "vuelidate/lib/validators";

	import {AuthApi} from "@/api/modules/auth.api.js";

	import {getErrorMessage} from "@/vue/utils/helpFunctions.js";

	export default {
		name: "RegistrationPage",
		mixins: [vuelidate],
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
				name: {
					required,
					minLength: minLength(2),
				},
				agreeTerms: {
					required,
					checked: (value) => value,
				},
			},
		},
		data() {
			return {
				form: {
					name: "denis",
					login: "comedy951@yandex.ru",
					password: "qwe123",
					agreeTerms: false,
				},
				showPassword: false,
				errorAlert: {
					hasRegisterError: false,
					errorMessage: "",
				},
				vkLoginLink: "true",
			};
		},
		methods: {
			register() {
				this.$v.$touch();

				if (!this.$v.form.$invalid) {
					AuthApi.register(this.form.name, this.form.login, this.form.password, this.form.agreeTerms).then(
						(response) => {
							if (!response.success) {
								this.hasRegisterError = true;
								this.authErrorMessage = getErrorMessage(response.data.errors);
							} else {
								this.$router.push("/auth/login");
							}
						}
					);
				}
			},
		},
	};
</script>

<style lang="scss" scoped>
	.agree-terms {
		font-size: 12px;
	}

	hr {
		border-top: 1px solid #dadada;
	}
</style>
