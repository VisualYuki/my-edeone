<template>
	<div class="site-white-block" :class="[`site-white-block_${padding}`]">
		<slot></slot>
	</div>
</template>

<script>
	import {helpValidateProp} from "@/vue/utils/helpValidateProp.js";

	export default {
		name: "SiteWhiteBlock",
		props: {
			padding: {
				type: String,
				default: "md",
				required: false,
				validator: (value) => {
					return helpValidateProp(value, ["sm", "md", "lg"]);
				},
			},
		},
	};
</script>

<style lang="scss">
	.site-white-block {
		box-shadow: 0px 0px 30px 0px rgb(82 63 105 / 5%);
		background: white;
		border-radius: 5px;

		&_sm {
			//@include indent-2(padding, 60, 20, 60, 20);
		}

		&_md {
			//@include indent-2(padding, 60, 20, 60, 20);
		}

		&_lg {
			@include indent-2(padding, 60, 20, 60, 20);
		}
	}
</style>
