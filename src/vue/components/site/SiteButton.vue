<template>
	<b-button class="custom-button" :variant="variant" :size="size" @click="click" @abort="abort">
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
		},
		methods: {
			click() {
				this.$emit("click");
			},
			abort() {
				this.$emit("abort");
			},
		},
	};
</script>

<style lang="scss">
	.btn {
		display: block;
	}
</style>
