<template>
	<b-link class="custom-link">
		<slot></slot>
	</b-link>
</template>

<script>
	export default {
		name: "CustomLink",
	};
</script>

<style lang="scss">
	.custom-link {
		font-size: adaptiveSize(13, 12);
		color: $primary;
	}
</style>
