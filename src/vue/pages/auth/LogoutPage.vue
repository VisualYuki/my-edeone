<template>
	<div class="d-flex align-items-center justify-content-center mt-7">
		<div class="d-flex justify-content-center align-items-center">
			<b-spinner variant="primary" />
			<h3 class="m-0 ml-3">Выход из системы...</h3>
		</div>
	</div>
</template>

<script>
	export default {
		name: "Logout",
		props: {
			backurl: {
				type: String,
				required: false,
				default: "backurl",
			},
		},
		mounted() {
			this.$router.push({path: "/auth/login", query: {backurl: this.backurl}});
		},
	};
</script>
