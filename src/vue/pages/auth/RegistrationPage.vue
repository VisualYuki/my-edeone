<template>
	<div>
		<SiteFormInput
			v-model="$v.form.name.$model"
			:state="validateState('name')"
			placeholder="Имя"
			errorMessage="Поле должно быть заполнено"
		/>

		<SiteFormInput
			type="email"
			v-model="$v.form.login.$model"
			:state="validateState('login')"
			placeholder="Email"
			errorMessage="Неверный формат почты."
		/>

		<SiteFormInput
			:type="showPassword ? 'text' : 'password'"
			v-model="$v.form.password.$model"
			:state="validateState('password')"
			placeholder="Пароль"
			errorMessage="Слишком короткий пароль"
			icon
		>
			<template #icon>
				<div class="icon" @click="showPassword = !showPassword">
					<b-icon-eye-slash class="hide" v-if="showPassword" scale="1.5" />

					<b-icon-eye class="show" v-else scale="1.5" />
				</div>
			</template>
		</SiteFormInput>

		<SiteButton> Регистрация </SiteButton>

		<SiteButton disabled>
			Войти через ВК
			<FontAwesomeIcon :icon="['fab', 'vk']" size="lg" />
		</SiteButton>

		<SiteLink display to="/auth/login" class="text-center">Уже зарегистрированы? Войти</SiteLink>
	</div>
</template>

<script>
	import {vuelidate} from "@vue/mixins/vuelidate.js";
	import {required, email, minLength} from "vuelidate/lib/validators";

	//import {AuthApi} from "@/api/modules/auth.api.js";

	export default {
		name: "RegistrationPage",
		mixins: [vuelidate],
		validations: {
			form: {
				login: {
					required,
					email,
				},
				password: {
					required,
					minLength: minLength(6),
				},
				name: {
					required,
				},
			},
		},
		data() {
			return {
				form: {
					name: "denis",
					login: "comedy951@yandex.ru",
					password: "password",
				},
				showPassword: false,
			};
		},
		methods: {},
	};
</script>

<style lang="scss"></style>
