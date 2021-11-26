// Проблема: при дебаге async функций babel async generator блочит трассировку в гугл хром.
// Решение: подвключение babel только в production режиме.

function getConfig() {
	if (process.env === "production") {
		return {
			presets: [
				[
					"@vue/cli-plugin-babel/preset",
					{
						useBuiltIns: false,
					},
				],
			],
		};
	} else {
		return {};
	}
}

module.exports = getConfig();
