<template>
	<div class="site-input Input mb-3">
		<b-form-input
			:placeholder="placeholder"
			v-model="value"
			:state="state"
			:type="type"
			:size="size"
			lazy
		></b-form-input>
	</div>
</template>

<script>
	import {validateProp} from "@/vue/utils/validateProp.js";

	export default {
		name: "SiteFormInput",
		props: {
			type: {
				type: String,
				default: "text",
				required: false,
			},
			placeholder: {
				type: String,
				default: "Почта",
			},
			size: {
				type: String,
				default: "md",
				required: false,
				validator: (value) => {
					return validateProp(value, ["sm", "md", "lg"]);
				},
			},
			value: {
				type: String,
				required: true,
			},
			state: {
				type: Boolean,
				default: null,
			},
		},
		watch: {
			value() {
				this.$emit("input", value);
			},
		},
	};
</script>

<style lang="scss">
	.form-control {
		&:focus {
			box-shadow: none !important;
		}
	}

	.site-input {
		input {
			width: 100%;
			@include indent-2(padding, 15, 10, 20, 15);
			font-size: adaptiveSize(15, 11);
			color: #495057;
			color: red;
			line-height: 1.5;

			border: 1px solid #c8d2de;
			border-radius: 5px;

			&::placeholder {
				color: gray;
			}

			&:focus {
				border-color: $primary;
				outline: none;
			}
		}
	}
</style>
