<template>
	<div class="auth-page component">
		<b-form class="auth-page__form mx-auto">
			<SiteWhiteBlock padding="lg">
				<img src="/img/logo/auth.png" class="mx-auto mb-3" />

				<SiteTitle align="center" class="mb-md-5 mb-3" tag="h1" size="h2"> Вход для преподавателя </SiteTitle>

				<SiteInputLogin type="email" placeholder="Email"> </SiteInputLogin>
				<SiteInputLogin type="password" placeholder="Пароль"> </SiteInputLogin>

				<div class="d-flex justify-content-between mb-3">
					<SiteLink> Забыли пароль? </SiteLink>
					<SiteLink> Регистрация? </SiteLink>
				</div>

				<SiteButton> Войти </SiteButton>
				<SiteButton> Войти через ВК </SiteButton>
				<SiteButton> Я ученик </SiteButton>
			</SiteWhiteBlock>
		</b-form>
	</div>
</template>

<script>
	import SiteTitle from "../../components/site/SiteTitle.vue";
	import SiteWhiteBlock from "../../components/site/SiteWhiteBlock.vue";
	import SiteLink from "@/vue/components/site/SiteLink.vue";
	import SiteButton from "@/vue/components/site/SiteButton.vue";
	import SiteInputLogin from "@/vue/components/site/SiteInputLogin.vue";

	export default {
		name: "AuthPage",
		components: {SiteInputLogin, SiteButton, SiteLink, SiteWhiteBlock, SiteTitle},
		methods: {},
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
