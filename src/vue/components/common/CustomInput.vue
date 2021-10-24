<template>
	<div class="custom-input mb-3">
		<b-form-input :placeholder="placeholder" :type="type"></b-form-input>
	</div>
</template>

<script>
	export default {
		name: "CustomInput",
		props: {
			type: {
				default: "text",
				type: String,
			},
			placeholder: {
				default: "",
				type: String,
			},
		},
	};
</script>

<style lang="scss">
	@import "@/scss/common/colors.scss";

	.custom-input {
		input {
			width: 100%;
			padding: 0.75rem 1.3rem;

			font-size: 1rem;
			color: #495057;
			line-height: 1.5;

			border: 1px solid #c8d2de;
			border-radius: 0.3rem;

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
