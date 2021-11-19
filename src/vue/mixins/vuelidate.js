import {validationMixin} from "vuelidate";

export const vuelidate = {
	mixins: [validationMixin],

	methods: {
		validateState(type) {
			const {$dirty, $error} = this.$v.vuelidateForm[type];

			return $dirty ? !$error : null;
		},
	},
};
