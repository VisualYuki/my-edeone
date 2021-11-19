<template>
	<div id="app">
		<!--<header>header</header>-->
		<main>
			baseLayout
			<router-view></router-view>
		</main>

		<!--<footer>footer</footer>-->
	</div>
</template>

<script>
	import AuthPage from "@/vue/pages/auth/AuthPage.vue";

	export default {
		components: {AuthPage},
		name: "BaseLayout",
	};
</script>

<style lang="scss"></style>
