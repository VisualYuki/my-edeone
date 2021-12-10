<template>
	<b-form-group class="site-input input mb-4" :class="{'site-input_has-icon': icon}">
		<b-form-input v-model="componentValue" lazy v-bind="$props">12</b-form-input>
		<b-form-invalid-feedback>{{ errorMessage }}</b-form-invalid-feedback>
		<slot name="icon" />
	</b-form-group>
</template>

<script>
	import {validateProp} from "@/vue/utils/helpFunctions.js";

	export default {
		name: "SiteFormInput",
		props: {
			type: {
				type: String,
				default: "text",
			},
			value: {
				type: String,
				required: true,
			},

			placeholder: {
				type: String,
				default: "Почта",
			},
			size: {
				type: String,
				default: "lg",
				validator: (value) => {
					return validateProp(value, ["sm", "md", "lg"]);
				},
			},
			state: {
				type: Boolean,
				default: null,
			},
			errorMessage: {
				type: String,
				default: "",
			},
			icon: {
				type: Boolean,
				default: false,
			},
		},
		data() {
			return {
				componentValue: this.value,
			};
		},
		watch: {
			componentValue() {
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

			@include h4;

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

		&_has-icon {
			.icon {
				position: absolute;
				left: 1px;
				top: 2px;
				z-index: 1;

				@include flex(center, center);
				width: 40px;
				height: 40px;

				svg {
					width: 12px;
					overflow: visible;

					* {
						fill: #999;
					}
				}
			}

			input {
				padding-left: 40px;
			}

			//.input-wrap {
			//	display: flex;
			//}
		}
	}
</style>
