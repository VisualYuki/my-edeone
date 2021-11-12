<template>
	<b-button
		class="site-button"
		:class="{'p-2': size === 'md', 'p-1': size === 'sm', 'p-3': size === 'lg'}"
		:variant="variant"
		:size="size"
		:block="block"
		@click="$emit('click')"
	>
		<slot name="default"></slot>
	</b-button>
</template>

<script>
	import {validateProp} from "@utils/validateProp";

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
		},
		methods: {},
	};
</script>

<style lang="scss">
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
