import {validationMixin} from "vuelidate";

export const vuelidate = {
	mixins: [validationMixin],

	methods: {
		validateState(type) {
			const {$dirty, $error} = this.$v.validations[type];

			return $dirty ? !$error : null;
		},
		submit() {
			this.$v.validations.$touch();
			const isValidForm = !this.$v.$invalid;

			if (isValidForm) {
				this.successSubmit();
			}
		},
	},
};
