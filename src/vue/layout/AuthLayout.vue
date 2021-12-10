<template>
	<div id="app">
		<main>
			<div class="auth-layout component">
				<div class="auth-layout__form mx-auto">
					<SiteWhiteBlock padding="lg">
						<div class="narrow-content mx-auto">
							<router-link to="/">
								<img src="/img/logo/auth.png" class="mx-auto mb-3" />
							</router-link>

							<SiteText align="center" class="mb-md-5 mb-3" tag="h1" size="h2"> {{ getTitle() }}</SiteText>
							<router-view></router-view>
						</div>
					</SiteWhiteBlock>
				</div>
			</div>
		</main>
	</div>
</template>

<script>
	import {IS_AUTH} from "@/store/modules/auth.store";
	import {mapState} from "vuex";

	export default {
		name: "AuthLayout",
		computed: {
			...mapState("auth", [IS_AUTH]),
		},
		async mounted() {
			const isAuth = await this.$store.dispatch(`auth/verifyAuth`);

			if (isAuth) {
				this.$router.push("/items");
			}
		},
		methods: {
			getTitle() {
				let currentRoute = this.$router.currentRoute.path;
				switch (currentRoute) {
					case "/auth/registration":
						return "Регистрация продавца";
					case "/auth/login":
						return "Вход для преподавателя";
					case "/auth/forgot-password":
						return "Восстановление пароля";
				}
			},
		},
	};
</script>

<style lang="scss" scoped>
	.narrow-content {
		max-width: 310px;
	}

	.auth-layout {
		height: 100%;
		padding: 0 10px;
		padding-top: 100px;

		background: url("/img/background/login.jpg") no-repeat center;
		background-size: cover;

		&__form {
			max-width: 500px;
		}
	}
</style>
