import requestor from "../requestor";
import {Jwt} from "@/service/jwt.js";

export const AuthApi = {
	login: (email, password) => {
		return requestor.post("/auth/login", {email, password});
	},
	register: (name, email, password, agreeTerms) => {
		return requestor.post("/auth/registration", {
			username: name,
			email,
			password,
			accepted_terms_of_service: agreeTerms,
		});
	},
	refreshToken: () => requestor.post("/auth/refresh-token", {token: Jwt.getRefreshToken()}),
	forgotPassword: (email) =>
		requestor.post("/auth/forgot-password", {
			//TODO: requestor допиливать для этого метода, чтобы работало.
			ForgotPassword: {
				email: email,
			},
		}),

	//newPassword: (password, hash) =>
	//requestor.put("/auth/new-password", {
	//  RestorePassword: {
	//	 password: password,
	//	 hash: hash,
	//  },
	//})
};
