<template>
	<div class="auth-page component">
		<b-form class="auth-page__form mx-auto">
			<SiteWhiteBlock padding="lg">
				<img src="/img/logo/auth.png" class="mx-auto mb-3" />

				<SiteTitle align="center" class="mb-md-5 mb-3" tag="h1" size="h2"> Вход для преподавателя </SiteTitle>

				<SiteInputEmail
					placeholder="Email"
					errorMessage="Некорректный email"
					@updateEmailValidationState="updateEmailValidationState"
					:forceValidation="forceValidation"
				>
				</SiteInputEmail>
				<!--
				<SiteInputText
					type="password"
					placeholder="Пароль"
					errorMessage="Неверный пароль"
					:forceValidation="forceValidation"
				>
				</SiteInputText>-->

				<div class="d-flex justify-content-between mb-3">
					<CustomLink>Забыли пароль?</CustomLink>
					<CustomLink>Регистрация</CustomLink>
				</div>

				<b-button @click="click">Войти</b-button>

				<!--<CustomButton>Войти</CustomButton>
				<CustomButton>Войти через ВК</CustomButton>
				<CustomButton>Я ученик</CustomButton>-->
			</SiteCard>
		</b-form>
	</div>
</template>

<script>
	import SiteTitle from "../../components/common/SiteTitle.vue";
	import SiteCard from "../../components/common/SiteWhiteBlock.vue";
	import CustomLink from "@comp/common/CustomLink.vue";
	import CustomButton from "@comp/common/CustomButton.vue";
	import SiteInputEmail from "@comp/common/SiteInputEmail.vue";

	export default {
		name: "AuthPage",
		components: {SiteInputEmail, CustomButton, CustomLink, SiteCard, SiteTitle},
		data() {
			return {
				isValidEmail: null,
				emailValue: undefined,
				forceValidation: false,
			};
		},
		methods: {
			click() {
				this.forceValidation = true;
				debugger;
				//this.$forceUpdate();

				//this.forceValidation = false;
			},
			updateEmailValidationState(isInvalid) {
				this.isValidEmail = !isInvalid;
			},
		},
	};
</script>

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
