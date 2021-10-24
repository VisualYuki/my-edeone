<template>
	<div class="auth-page component pt-5">
		<b-form class="auth-page__form mx-auto py-3 py-md-5 px-3 px-md-5">
			<img src="/img/logo/auth.png" class="mx-auto mb-3" />
			<p class="text-center mb-5 font-weight-bold">Вход для преподавателя</p>
			<CustomInput type="email" placeholder="Email"> </CustomInput>
			<CustomInput type="password" placeholder="Пароль"> </CustomInput>
			<CustomLink>Забыли пароль?</CustomLink>
			<CustomLink>Регистрация?</CustomLink>
			<CustomButton> Войти </CustomButton>
			<CustomButton> Войти через ВК </CustomButton>
			<CustomButton> Я ученик </CustomButton>
		</b-form>
	</div>
</template>

<script>
	import CustomLink from "@comp/common/CustomLink.vue";
	import CustomButton from "@comp/common/CustomButton.vue";
	import CustomInput from "@comp/common/CustomInput.vue";

	export default {
		components: {CustomInput, CustomButton, CustomLink},
		name: "AuthPage",
	};
</script>

<style lang="scss" scoped>
	.auth-page {
		height: 100%;

		background: url("/img/background/login.jpg") no-repeat center;

		&__form {
			max-width: 500px;

			background: white;
		}
	}
</style>
