<template>
	<div class="site-input mb-3">
		<b-form-group>
			<b-form-input
				:placeholder="placeholder"
				type="email"
				v-model="$v.email.$model"
				:state="isValid"
				lazy
				@input="resetValidationState"
				@blur="blurMethod"
			/>
			<b-form-invalid-feedback> {{ errorMessage }} </b-form-invalid-feedback>
		</b-form-group>
	</div>
</template>

<script>
	import {validationMixin} from "vuelidate";
	import {required, email} from "vuelidate/lib/validators";

	// Когда срабатывает updated() хук

	export default {
		name: "SiteInputEmail",
		mixins: [validationMixin],

		props: {
			value: Boolean,
			placeholder: {
				type: String,
				default: "",
			},
			forceValidation: {
				type: Boolean,
				required: true,
			},
			errorMessage: {
				type: String,
				required: true,
			},
		},
		validations: {
			email: {
				required,
				email,
			},
		},
		data() {
			return {
				email: "",
				isResetValidation: false,
			};
		},
		//beforeUpdate() {},
		//updated() {
		//	//this.$emit("updateEmailValidationState", $invalid);
		//},
		watch: {
			forceValidation() {
				this.$emit("resetForceValidation");
			},
		},
		computed: {
			isValid() {
				const {$invalid} = this.$v["email"];

				if (this.value && !this.isResetValidation) {
					this.value = false;
					return !$invalid;
				}

				return null;
			},
			forceValidation() {
				if (this.value) {
					return true;
				}
			},
		},
		methods: {
			resetValidationState() {
				this.isResetValidation = true;
			},
			//blurMethod() {
			//	this.isResetValidation = true;
			//}

			//myFocus() {
			//this.$v.email.$touch();
			//const {$invalid} = this.$v["email"];
			//this.isValid = $invalid ? false : null;
			//},
			//validateState(name) {
			//	const {$invalid} = this.$v[name];

			//	return $invalid;
			//},

			//checkValidation(name) {
			//	debugger;
			//	const {$invalid} = this.$v[name];

			//	if ($invalid) {
			//		this.isInvalid = true;
			//	}
			//},
		},
	};
</script>

<style lang="scss"></style>
