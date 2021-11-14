import requestor from "../requestor";

export const AuthApi = {
	loginByToken: (token) => requestor.put("/auth/new-auth", {token: token}),
	login: (email, password) => {
		return requestor.put("/auth/login", {email: email, password: password});
	},
	refreshToken: (token) => requestor.post("/auth/refresh-token", {token: token}),
	logout: () => requestor.delete("/auth/logout"),
	registration: (username, email, password, termsOfServiceAgreement) =>
		requestor.put("/auth/registration", {
			username: username,
			email: email,
			password: password,
			accepted_terms_of_service: termsOfServiceAgreement,
		}),
	forgotPassword: (email) =>
		requestor.post("/auth/forgot-password", {
			ForgotPassword: {
				email: email,
			},
		}),
	newPassword: (password, hash) =>
		requestor.put("/auth/new-password", {
			RestorePassword: {
				password: password,
				hash: hash,
			},
		}),
	getVkLoginLink: () => requestor.get("/auth/get-vk-login-link"),

	shadowLogin: (userId) => requestor.post("/auth/shadow_login", {user_id: userId}),
	shadowLogout: () => requestor.post("/auth/shadow_logout"),
};
