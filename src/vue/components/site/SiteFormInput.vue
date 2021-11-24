<template>
	<div class="site-input input mb-3" :class="{'site-input_has-icon': icon}">
		<div class="input-wrap">
			<slot name="icon"> </slot>
			<b-form-input v-model="componentValue" lazy v-bind="$props"></b-form-input>
		</div>

		<b-form-invalid-feedback>{{ "Ошибка. " + this.errorMessage }}</b-form-invalid-feedback>
	</div>
</template>

<script>
	import {validateProp} from "@/vue/utils/validateProp.js";

	export default {
		name: "SiteFormInput",
		props: {
			value: {
				type: String,
				required: true,
			},
			type: {
				type: String,
				default: "text",
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
				left: 0;
				top: 0;

				width: 30px;

				height: 100%;
			}

			input {
				padding-left: 40px;
			}

			.input-wrap {
				display: flex;
			}
		}
	}
</style>
