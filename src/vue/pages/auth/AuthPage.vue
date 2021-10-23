<template>
	<div class="auth-page component pt-4">
		<b-form class="auth-page__form mx-auto py-3 py-md-5 px-3 px-md-5">
			<img src="/img/logo/auth.png" />
			<p>Вход для преподавателя</p>
			<b-form-input type="email" placeholder="Email"> </b-form-input>
			<b-form-input type="password" placeholder="Пароль"> </b-form-input>
			<b-link>Забыли пароль?</b-link>
			<b-link>Регистрация</b-link>
			<b-button>Войти</b-button>
			<b-button>Войти через ВК</b-button>
			<b-button>Я ученик</b-button>
		</b-form>
	</div>
</template>

<script>
	export default {
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
