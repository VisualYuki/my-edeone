import requestor from "../requestor";

export const AuthApi = {
	login: (email, password) => {
		return requestor.get("/auth/login", {email, password});
	},
	register: (name, email, password, agreeTerms) => {
		return requestor.post("/auth/registration", {
			username: name,
			email,
			password,
			accepted_terms_of_service: agreeTerms,
		});
	},
	refreshToken: (token) => requestor.post("/auth/refresh-token", {token: token}),
};
