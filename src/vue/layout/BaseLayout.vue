<template>
	<div id="app">
		<!--<header>header</header>-->
		<main>
			<AuthPage></AuthPage>
		</main>

		<!--<footer>footer</footer>-->
	</div>
</template>

<script>
	import AuthPage from "@pages/auth/AuthPage.vue";

	export default {
		components: {AuthPage},
		name: "BaseLayout",
	};
</script>

<style lang="scss"></style>
