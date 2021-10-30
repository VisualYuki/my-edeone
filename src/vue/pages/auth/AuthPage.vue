<template>
	<div class="auth-page component">
		<b-form class="auth-page__form mx-auto">
			<SiteCard padding="lg">
				<img src="/img/logo/auth.png" class="mx-auto mb-3" />

				<SiteTitle align="center" class="mb-md-5 mb-3" tag="h1" size="h2">Вход для преподавателя</SiteTitle>

				<SiteInputText type="email" placeholder="Email"> </SiteInputText>
				<SiteInputText type="password" placeholder="Пароль"> </SiteInputText>

				<div class="d-flex justify-content-between mb-3">
					<CustomLink>Забыли пароль?</CustomLink>
					<CustomLink>Регистрация?</CustomLink>
				</div>

				<CustomButton> Войти </CustomButton>
				<CustomButton> Войти через ВК </CustomButton>
				<CustomButton> Я ученик </CustomButton>
			</SiteCard>
		</b-form>
	</div>
</template>

<script>
	import SiteTitle from "../../components/common/SiteTitle.vue";
	import SiteCard from "../../components/common/SiteWhiteBlock.vue";
	import CustomLink from "@comp/common/CustomLink.vue";
	import CustomButton from "@comp/common/CustomButton.vue";
	import SiteInputText from "@comp/common/SiteInputText.vue";

	export default {
		components: {SiteInputText, CustomButton, CustomLink, SiteCard, SiteTitle},
		name: "AuthPage",
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
