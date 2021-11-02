<template>
	<b-button class="custom-button">
		<slot name="default"></slot>
	</b-button>
</template>

<script>
	let SiteButton = {
		name: "SiteButton",
	};

	export default SiteButton;
</script>

<style lang="scss">
	.btn {
		display: block;
	}
</style>
