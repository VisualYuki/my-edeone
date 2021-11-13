const path = require("path");
const globImporter = require("node-sass-glob-importer");

module.exports = {
	//runtimeCompiler: true,
	//transpileDependencies: ["vuetify"],
	publicPath: process.env.NODE_ENV === "production" ? "/dist" : "/",
	configureWebpack: {
		devServer: {
			port: "3456",
		},
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
		sourceMap: process.env.NODE_ENV === "development",
		loaderOptions: {
			scss: {
				sassOptions: {
					// нужен для глобального импорта стилей в scss (e.g. /assets/scss/utils/*.scss)
					importer: globImporter(),
				},
				// импорт стилей в каждый vue компонент.
				additionalData: "@import '@/scss/utils/mixins.scss'; @import '@/scss/common/colors.scss';",
			},
		},
	},
};
