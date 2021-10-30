<template>
	<div class="Site-input mb-3">
		<b-form-input :placeholder="placeholder" :type="type"></b-form-input>
	</div>
</template>

<script>
	export default {
		name: "SiteInput",
		props: {
			type: {
				type: String,
				default: "text",
			},
			placeholder: {
				type: String,
				default: "",
			},
		},
	};
</script>

<style lang="scss">
	@import "@/scss/common/colors.scss";

	.Site-input {
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
