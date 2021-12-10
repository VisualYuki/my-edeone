module.exports = {
	preset: "@vue/cli-plugin-unit-jest",
	//"testEnvironment": "jest-environment-node",

	"transform": {
		"^[^.]+.vue$": "vue-jest",
		"^.+\\.js$": "babel-jest",
	},
	moduleNameMapper: {
		// Убрать все алиасы и заменить на @
		"^@/vue/(.*)$": "<rootDir>/src/vue/$1",
	},
};
