<script>
	import {validateProp} from "@/vue/utils/validateProp.js";

	export default {
		name: "SiteText",
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
				default: "p",
			},
			size: {
				type: String,
				default: "h4",
				validator: (value) => {
					return validateProp(value, ["h1", "h2", "h3", "h4", "h5", "h6"]);
				},
			},
		},
	};
</script>

<style lang="scss" scoped>
	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		font-weight: bold;
	}
</style>
