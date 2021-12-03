<template>
	<div id="app">
		<!--<header>header</header>-->
		<main>
			baseLayout
			<SiteButton inline @click="exit"> Выйти </SiteButton>

			<router-view></router-view>
		</main>

		<!--<footer>footer</footer>-->
	</div>
</template>

<script>
	import AuthPage from "@/vue/pages/auth/AuthPage.vue";
	import {LOGOUT} from "@/store/modules/auth.store";

	export default {
		components: {AuthPage},
		name: "BaseLayout",
		methods: {
			exit() {
				this.$store.dispatch(`auth/${LOGOUT}`);
				this.$router.push("/auth/login");
			},
		},
		async mounted() {
			const isAuth = await this.$store.dispatch(`auth/verifyAuth`);

			if (!isAuth) {
				this.$router.push("/auth/login");
			}
		},
	};
</script>

<style lang="scss"></style>
