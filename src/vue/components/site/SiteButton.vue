<template>
	<b-button
		:href="href"
		class="site-button"
		:class="{'p-2 h4': size === 'md', 'p-1': size === 'sm', 'p-3': size === 'lg'}"
		v-bind="$props"
		target="_blank"
		@click="$emit('click')"
	>
		<b-spinner v-if="onlySpinner" variant="white" small></b-spinner>
		<slot v-else name="default"></slot>
	</b-button>
</template>

<script>
	import {validateProp} from "@/vue/utils/helpFunctions.js";

	export default {
		name: "SiteButton",
		props: {
			size: {
				type: String,
				default: "md",
				validator: (value) => {
					return validateProp(value, ["sm", "md", "lg"]);
				},
			},
			variant: {
				type: String,
				default: "primary",
				validator: (value) => {
					return validateProp(value, ["primary", "outline-primary"]);
				},
			},
			block: {
				type: Boolean,
				default: true,
			},
			onlySpinner: {
				type: Boolean,
				default: false,
			},
			href: {
				type: String,
			},
		},
		methods: {},
	};
</script>

<style lang="scss" scoped>
	.site-button {
		font-weight: 600;
	}

	.btn {
		&:focus {
			box-shadow: none !important;
		}

		&-sm {
			font-size: adaptiveSize(13, 10);
		}

		&-md {
			font-size: adaptiveSize(16, 13) !important;
		}

		&-lg {
		}
	}
</style>

<style lang="scss">
	.site-button + .site-button {
		margin-top: $spacer-3;
	}
</style>
