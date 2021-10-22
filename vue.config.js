const path = require("path");

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
};
