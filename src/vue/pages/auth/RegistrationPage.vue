<template>
	<div>
		<SiteErrorAlert :show="errorAlert.hasRegisterError" :message="errorAlert.errorMessage" />

		<div class="mb-8">
			<SiteFormInput
				v-model="$v.validations.name.$model"
				:state="validateState('name')"
				placeholder="Имя"
				error-message="Поле должно быть заполнено"
			/>

			<SiteFormInput
				v-model="$v.validations.email.$model"
				type="email"
				:state="validateState('email')"
				placeholder="Email"
				error-message="Неверный формат почты."
			/>

			<SiteFormInput
				v-model="$v.validations.password.$model"
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
			<b-form-checkbox v-model="validations.agreeTerms" :state="validateState('agreeTerms')">
				Я принимаю условия
				<a href="https://edeone.com/docs/termsofuse.pdf" target="_blank">пользовательского соглашения</a>
			</b-form-checkbox>
			<p v-if="$v.validations.agreeTerms.$error" class="text-danger" style="font-size: 80%">
				Необходимо принять соглашение
			</p>
		</b-form-group>

		<div class="link-wrap mb-5">
			<SiteButton @click="submit"> Регистрация </SiteButton>
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

	export default {
		name: "RegistrationPage",
		mixins: [vuelidate],
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
				validations: {
					name: "denis",
					email: "comedy951@yandex.ru",
					password: "qwe123",
					agreeTerms: false,
				},
				errorAlert: {
					hasRegisterError: false,
					errorMessage: "",
				},
				showPassword: false,
				vkLoginLink: "true",
			};
		},
		methods: {
			successSubmit() {
				AuthApi.register(
					this.validations.name,
					this.validations.email,
					this.validations.password,
					this.validations.agreeTerms
				).then((response) => {
					if (!response.success) {
						this.errorAlert.hasRegisterError = true;
						this.errorAlert.errorMessage = response.errorMessage;
					} else {
						this.$router.push("/auth/login");
					}
				});
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
