<template>
	<b-link class="site-link">
		<slot> a </slot>
	</b-link>
</template>

<script>
	export default {
		name: "SiteLink",
	};
</script>

<style lang="scss">
	.site-link {
		font-size: adaptiveSize(14, 12);
		color: $primary;
	}
</style>
