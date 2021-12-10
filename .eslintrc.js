module.exports = {
	root: true,
	env: {
		node: true,
	},
	"parserOptions": {
		"parser": "babel-eslint",
	},
	"extends": [
		"plugin:vue/essential",
		"eslint:recommended",
		"@vue/prettier",
		"plugin:vue/recommended",
		"plugin:vue/strongly-recommended",
	],
	rules: {
		"no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
		"no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
		//"no-console": "warn",
		//"no-debugger": "warn",
		"vue/html-indent": "off",
		"vue/max-attributes-per-line": "off",
		"vue/singleline-html-element-content-newline": "off",
		"vue/html-self-closing": "off",
		"vue/require-default-prop": "off",
		"no-async-promise-executor": "off",
	},

	overrides: [
		{
			files: ["**/__tests__/*.{j,t}s?(x)", "**/tests/unit/**/*.spec.{j,t}s?(x)"],
			env: {
				jest: true,
			},
		},
	],
};
