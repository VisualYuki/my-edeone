<template>
	<b-link class="site-link text-center" v-bind="$props" :class="{'d-block': display}">
		<slot></slot>
	</b-link>
</template>

<script>
	export default {
		name: "SiteLink",
		props: {
			to: {
				type: String,
			},
			//align: {
			//	type: String,
			//	default: "left",
			//	validator: (value) => {
			//		return validateProp(value, ["primary", "outline-primary"]);
			//	},
			//},
			display: {
				type: Boolean,
				default: false,
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
