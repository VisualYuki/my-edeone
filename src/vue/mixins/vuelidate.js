import {validationMixin} from "vuelidate";

export const vuelidate = {
	mixins: [validationMixin],

	methods: {
		validateState(type) {
			const {$dirty, $error} = this.$v.form[type];

			return $dirty ? !$error : null;
		},
	},
};
