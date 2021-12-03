<template>
	<router-view></router-view>
</template>

<script>
	import "@scss/index.scss";
	import {VERIFY_AUTH} from "@/store/modules/auth.store.js";

	export default {
		name: "App",
	};
</script>

<style lang="scss"></style>
