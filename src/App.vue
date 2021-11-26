<template>
	<router-view></router-view>
</template>

<script>
	import "@scss/index.scss";
	import {VERIFY_AUTH} from "@/store/modules/auth.store.js";

	export default {
		async mounted() {
			const isAuth = this.$store.dispatch(`auth/verifyAuth`);

			return this.$router.push({path: "/auth/login"});

			//if (!isAuth) {
			//	return this.$router.push({path: "/auth/login"});
			//}
		},
	};
</script>

<style lang="scss"></style>
