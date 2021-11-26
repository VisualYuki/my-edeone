<template>
	<BAlert variant="danger" :show="show">
		<SiteText align="center"> {{ message }}</SiteText>
	</BAlert>
</template>

<script>
	export default {
		name: "SiteErrorAlert",
		props: {
			show: {
				type: Boolean,
				default: false,
			},
			message: {
				type: String,
			},
		},
	};
</script>

<style lang="scss" scoped></style>
