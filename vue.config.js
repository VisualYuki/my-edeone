const path = require("path");
const globImporter = require("node-sass-glob-importer");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

function getPlugins() {
	return process.env.NODE_ENV === "production"
		? [
				new BundleAnalyzerPlugin({
					openAnalyzer: true,
				}),
		  ]
		: [];
}

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
				"@vue": path.resolve(__dirname, "src/vue"),
			},
		},
		plugins: getPlugins(),
		devtool: "source-map",
	},
	publicPath: process.env.NODE_ENV === "production" ? "/dist" : "/",
	devServer: {
		port: "3456",
	},
	productionSourceMap: false,
	css: {
		sourceMap: process.env.NODE_ENV === "development",
		loaderOptions: {
			scss: {
				sassOptions: {
					// нужен для глобального импорта стилей в scss (e.g. /assets/scss/utils/*.scss)
					importer: globImporter(),
				},
				// импорт стилей в каждый vue компонент.
				additionalData: "@import '@/scss/vueConfigImport.scss';",
			},
		},
	},
};
