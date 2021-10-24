<template>
	<b-button class="custom-button">
		<slot name="default"></slot>
	</b-button>
</template>

<script>
	export default {
		name: "CustomButton",
	};
</script>

<style lang="scss">
	.btn {
		display: block;
	}
</style>
