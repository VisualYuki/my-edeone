<template>
	<router-view></router-view>
</template>

<script>
	import "@scss/index.scss";
	import {VERIFY_AUTH} from "@/store/modules/auth.store.js";

	export default {
		async mounted() {
			//if (!isAuth) {
			//	return this.$router.push({path: "/auth/login"});
			//}
		},
	};
</script>

<style lang="scss"></style>
