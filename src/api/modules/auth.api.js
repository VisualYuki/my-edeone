import requestor from "../requestor";

export const AuthApi = {
	login: (email, password) => {
		return requestor.put("/auth/login", {email: email, password: password});
	},
};
