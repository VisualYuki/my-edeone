module.exports = {
	preset: "@vue/cli-plugin-unit-jest",
	//"testEnvironment": "jest-environment-node",

	"transform": {
		"^[^.]+.vue$": "vue-jest",
		"^.+\\.js$": "babel-jest",
	},
	moduleNameMapper: {
		"^@/(.*)$": "<rootDir>/src/$1",
	},
};
