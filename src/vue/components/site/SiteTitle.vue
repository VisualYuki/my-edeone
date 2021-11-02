<script>
	import {validateProp} from "@/vue/utils/validateProp.js";

	export default {
		name: "SiteTitle",
		render: function (createElement) {
			return createElement(
				this.tag,
				{
					class: [`text-${this.align}`, this.size],
				},
				this.$slots.default
			);
		},
		props: {
			align: {
				type: String,
				default: "left",
				required: false,
				validator: (value) => {
					return validateProp(value, ["left", "center", "right"]);
				},
			},
			tag: {
				type: String,
				required: true,
			},
			size: {
				type: String,
				required: true,
				validator: (value) => {
					return validateProp(value, ["h1", "h2", "h3", "h4", "h5", "h6"]);
				},
			},
		},
	};
</script>

<style lang="scss" scoped>
	.h1,
	.h2,
	.h3,
	.h4,
	.h5,
	.h6 {
		font-weight: bold;
	}

	.h1 {
		font-size: adaptiveSize(26, 20);
	}

	.h2 {
		font-size: adaptiveSize(22, 19);
	}

	.h3 {
		font-size: adaptiveSize(19, 17);
	}

	.h4 {
		font-size: adaptiveSize(17, 15);
	}

	.h5 {
		font-size: adaptiveSize(15, 12);
	}

	.h6 {
		font-size: adaptiveSize(12, 10);
	}
</style>
