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
};
