<template>
	<div class="site-input Input mb-3">
		<b-form-input :placeholder="placeholder" :type="type" :size="size"></b-form-input>
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
				required: true,
			},
			placeholder: {
				type: String,
				default: "",
			},
			size: {
				type: String,
				default: "md",
				required: false,
				validator: (value) => {
					return validateProp(value, ["sm", "md", "lg"]);
				},
			},
		},
	};
</script>

<style lang="scss">
	@import "@/scss/common/colors.scss";

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
