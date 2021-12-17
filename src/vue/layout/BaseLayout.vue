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
	import {LOGOUT} from "@/store/modules/auth.store";

	export default {
		name: "BaseLayout",

		async mounted() {
			const isAuth = await this.$store.dispatch(`auth/verifyAuth`);

			if (!isAuth) {
				this.$store.dispatch("auth/LOGOUT");
			}
		},
		methods: {
			exit() {
				this.$store.dispatch(`auth/${LOGOUT}`);
				//this.$router.push("/auth/login");
			},
		},
	};
</script>

<style lang="scss"></style>
