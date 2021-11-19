<template>
	<b-link class="site-link" :to="to">
		<slot> a </slot>
	</b-link>
</template>

<script>
	export default {
		name: "SiteLink",
		props: {
			to: {
				type: String,
			},
		},
	};
</script>

<style lang="scss">
	.site-link {
		color: $primary;
		@include h4;
	}
</style>
