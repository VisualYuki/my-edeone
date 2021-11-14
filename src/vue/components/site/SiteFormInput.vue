<template>
	<div class="site-input Input mb-3">
		<b-form-input
			:placeholder="placeholder"
			v-model="componentValue"
			:state="state"
			:type="type"
			:size="size"
			lazy
		></b-form-input>
		<b-form-invalid-feedback>{{ "Ошибка. " + this.errorMessage }}</b-form-invalid-feedback>
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
				default: "lg",
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
			errorMessage: {
				type: String,
				default: "",
			},
		},
		data() {
			return {
				componentValue: this.value,
			};
		},
		watch: {
			componentValue(value) {
				this.$emit("input", this.componentValue);
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
			height: 45px;
			@include indent-2(padding, 15, 10, 20, 15);

			font-size: adaptiveSize(15, 11);
			color: #495057;
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
