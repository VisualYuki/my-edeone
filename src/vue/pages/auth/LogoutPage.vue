<template>
	<div class="d-flex align-items center w-100 h-100">
		<div class="d-flex justify-content-center align-items-center w-100">
			<b-spinner variant="primary" />
			<h3 class="m-0 ml-3">Выход из системы...</h3>
		</div>
	</div>
</template>

<script>
	import {LOGOUT} from "@/store/modules/auth.store";

	export default {
		name: "Logout",
		props: {
			backurl: {
				type: String,
				required: false,
			},
		},
		mounted() {
			this.$store.dispatch(LOGOUT).then(() => {
				this.$router.push({path: "/auth/login", query: {backurl: this.backurl}});
			});
		},
	};
</script>
