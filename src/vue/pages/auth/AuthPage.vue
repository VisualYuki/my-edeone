<template>
	<div class="auth-page component">
		<b-form class="auth-page__form mx-auto">
			<SiteWhiteBlock padding="lg">
				<div class="narrow-content mx-auto">
					<img src="/img/logo/auth.png" class="mx-auto mb-3" />

					<SiteTitle align="center" class="mb-md-5 mb-3" tag="h1" size="h2"> Вход для преподавателя </SiteTitle>

					<!--<SiteInputEmail
						placeholder="Email"
						errorMessage="Некорректный email"
						@updateEmailValidationState="updateEmailValidationState"
					>
					</SiteInputEmail>-->

					<!--<SiteFormInput
						type="password"
						placeholder="Пароль"
						errorMessage="Неверный пароль"
						:forceValidation="forceValidation"
					>
					</SiteFormInput>-->

					<SiteFormInput type="email" v-model="$v.form.login.$model" :state="validateState()" placeholder="Email">
					</SiteFormInput>

					<div class="d-flex justify-content-between mb-3">
						<SiteLink>Забыли пароль?</SiteLink>
						<SiteLink>Регистрация</SiteLink>
					</div>

					<SiteButton @click="btnClick"> Войти </SiteButton>

					<SiteButton>
						Войти через ВК
						<FontAwesomeIcon :icon="['fab', 'vk']" size="lg" />
					</SiteButton>
					<SiteButton variant="outline-primary"> Я ученик </SiteButton>
				</div>
			</SiteWhiteBlock>
		</b-form>
	</div>
</template>

<script>
	import SiteTitle from "@comp/site/SiteTitle.vue";
	import SiteWhiteBlock from "@comp/site/SiteWhiteBlock.vue";
	import SiteLink from "@comp/site/SiteLink.vue";
	import SiteButton from "@comp/site/SiteButton.vue";
	import SiteFormInput from "@/vue/components/site/SiteFormInput.vue";

	import {validationMixin} from "vuelidate";
	import {required, email} from "vuelidate/lib/validators";

	export default {
		name: "AuthPage",
		components: {SiteButton, SiteLink, SiteWhiteBlock, SiteTitle, SiteFormInput},
		mixins: [validationMixin],
		data() {
			return {
				form: {
					login: "",
					password: "",
				},
			};
		},
		validations: {
			form: {
				login: {
					required,
					email,
				},
			},
		},
		methods: {
			btnClick() {
				console.log("in btnClick!");
				this.$v.form.$touch();
			},
			validateState() {
				const {$dirty, $error} = this.$v.form.login;

				debugger;
				return $dirty ? !$error : null;
			},
		},
	};
</script>

<style lang="scss" scoped>
	.narrow-content {
		max-width: 310px;
	}
</style>

<style lang="scss" scoped>
	.auth-page {
		height: 100%;
		padding: 0 10px;
		padding-top: 100px;

		background: url("/img/background/login.jpg") no-repeat center;

		&__form {
			max-width: 450px;
		}
	}
</style>
