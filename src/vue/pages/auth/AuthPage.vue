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

					<!--<SiteInputText
					type="password"
					placeholder="Пароль"
					errorMessage="Неверный пароль"
					:forceValidation="forceValidation"
				>
				</SiteInputText>-->

					<div class="d-flex justify-content-between mb-3">
						<SiteLink>Забыли пароль?</SiteLink>
						<SiteLink>Регистрация</SiteLink>
					</div>

					<SiteButton @click="btnClick"> Войти </SiteButton>
					<SiteButton>
						Войти через ВК
						<img src="@/assets/svg/vk.svg" />
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
	//	import SiteInputEmail from "@comp/site/SiteInputEmail.vue";

	export default {
		name: "AuthPage",
		components: {SiteButton, SiteLink, SiteWhiteBlock, SiteTitle},
		methods: {
			btnClick() {
				console.log("in btnClick!");
			},
		},
	};
</script>

<style lang="scss" scoped>
	.narrow-content {
		max-width: 310px;
	}
</style>
