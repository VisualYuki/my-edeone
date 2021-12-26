const projectName = "Эдеон";

function getFullTitle(pageTitle) {
	return `${projectName} | ${pageTitle}`;
}

export const routes = [
	{
		path: "/auth",
		component: () => import("@/vue/layout/AuthLayout.vue"),
		children: [
			{
				path: "login",
				meta: {title: getFullTitle("Вход")},
				component: () => import("@/vue/pages/auth/AuthPage.vue"),
			},
			{
				path: "registration",
				meta: {title: getFullTitle("Регистрация")},
				component: () => import("@/vue/pages/auth/RegistrationPage.vue"),
			},
			{
				path: "forgot-password",
				meta: {title: getFullTitle("Восстановление пароля")},
				component: () => import("@/vue/pages/auth/ForgotPasswordPage.vue"),
			},
			{
				path: "password-recovery",
				meta: {title: getFullTitle("Восстановление пароля")},
				component: () => import("@/vue/pages/auth/PasswordRecovery.vue"),
			},
			{
				path: "logout",
				meta: {title: getFullTitle("Выход")},
				component: () => import("@/vue/pages/auth/LogoutPage.vue"),
			},
			//{
			//	path: "/auth/login-by-token",
			//	meta: { title: projectName + " | Вход по ключу" },
			//	component: () => import("shared/views/auth/LoginByToken.vue"),
			//	props: (route) => ({
			//	  token: route.query.hash,
			//	}),
			// },
		],
	},
	{
		path: "/",
		redirect: "/items",
		meta: {title: projectName},
		component: () => import("@/vue/layout/BaseLayout.vue"),
		children: [
			{
				path: "items",
				meta: {title: getFullTitle("Items")},
				component: () => import("@/vue/pages/InnerPage.vue"),
			},
		],
	},
	{
		path: "*",
		meta: {title: getFullTitle("Ошибка")},
		redirect: "/error",
	},
	{
		path: "/error",
		meta: {title: getFullTitle("Ошибка")},
		component: () => import("@/vue/pages/ErrorPage.vue"),
	},
];
