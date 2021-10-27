const path = require("path");
const globImporter = require("node-sass-glob-importer");

module.exports = {
	//runtimeCompiler: true,
	//transpileDependencies: ["vuetify"],
	configureWebpack: {
		resolve: {
			alias: {
				"@": path.resolve(__dirname, "src"),
				"@comp": path.resolve(__dirname, "src/vue/components"),
				"@utils": path.resolve(__dirname, "src/vue/utils"),
				"@pages": path.resolve(__dirname, "src/vue/pages"),
				"@layout": path.resolve(__dirname, "src/vue/layout"),
				"@scss": path.resolve(__dirname, "src/scss"),
			},
		},
	},
	css: {
		loaderOptions: {
			scss: {
				sassOptions: {
					importer: globImporter(),
				},
				additionalData: "@import '@/scss/utils/mixins.scss'; @import '@/scss/common/colors.scss';",
			},
		},
	},
};
