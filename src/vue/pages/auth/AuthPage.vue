<template>
	<div class="auth-page component">
		<b-form class="auth-page__form mx-auto">
			<SiteWhiteBlock padding="lg">
				<div class="narrow-content mx-auto">
					<img src="/img/logo/auth.png" class="mx-auto mb-3" />

					<SiteTitle align="center" class="mb-md-5 mb-3" tag="h1" size="h2"> Вход для преподавателя </SiteTitle>

					<SiteFormInput
						type="email"
						v-model="$v.vuelidateForm.login.$model"
						:state="validateState('login')"
						placeholder="Email"
						errorMessage="Неверный формат почты."
					>
					</SiteFormInput>

					<SiteFormInput
						type="password"
						v-model="$v.vuelidateForm.password.$model"
						:state="validateState('password')"
						placeholder="Пароль"
						errorMessage="Пароль должен содержать не менее 6 символов"
					>
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

	import {vuelidate} from "@vue/mixins/vuelidate.js";
	import {AuthApi} from "@/api/modules/auth.api.js";

	export default {
		name: "AuthPage",
		mixins: [vuelidate],
		components: {SiteButton, SiteLink, SiteWhiteBlock, SiteTitle, SiteFormInput},
		created() {},
		methods: {
			btnClick() {
				this.$v.vuelidateForm.$touch();

				AuthApi.login("comedy951@yandex.ru", "qwe123").then((response) => {
					debugger;
				});
			},
		},
	};
</script>

<style lang="scss" scoped>
	.narrow-content {
		max-width: 310px;
	}

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
