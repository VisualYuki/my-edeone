<template>
	<div class="auth-page component">
		<b-form class="auth-page__form mx-auto">
			<img src="/img/logo/auth.png" class="mx-auto mb-3" />
			<p class="text-center mb-5 font-weight-bold auth-page__title">Вход для преподавателя</p>
			<CustomInput type="email" placeholder="Email"> </CustomInput>
			<CustomInput type="password" placeholder="Пароль"> </CustomInput>
			<div class="d-flex justify-content-between mb-3">
				<CustomLink>Забыли пароль?</CustomLink>
				<CustomLink>Регистрация?</CustomLink>
			</div>

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
	@function adaptiveSize($NumMax, $NumMin, $WidthMax: $MaxWidthWindow, $WidthMin: $MinWidthWindow) {
		$k: ($NumMax - $NumMin)/ ($WidthMax - $WidthMin);
		$b: ($NumMin - ($k * $WidthMin)) * 1px;

		@return calc(#{$k} * 100vw + #{$b});
	}

	.auth-page {
		height: 100%;
		padding: 0 10px;
		padding-top: 100px;

		background: url("/img/background/login.jpg") no-repeat center;

		&__form {
			max-width: 450px;
			@include indent-2(padding, 60, 20, 60, 20);

			background: white;
		}

		&__title {
			font-size: 1.5rem;
		}
	}
</style>
