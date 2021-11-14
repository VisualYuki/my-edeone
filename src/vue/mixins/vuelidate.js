import {validationMixin} from "vuelidate";
import {required, email, minLength} from "vuelidate/lib/validators";

export const vuelidate = {
	mixins: [validationMixin],
	data() {
		return {
			vuelidateForm: {
				login: "",
				password: "",
			},
		};
	},
	validations: {
		vuelidateForm: {
			login: {
				required,
				email,
			},
			password: {
				required,
				minLength: minLength(6),
			},
		},
	},
	methods: {
		validateState(type) {
			const {$dirty, $error} = this.$v.vuelidateForm[type];

			return $dirty ? !$error : null;
		},
	},
};
