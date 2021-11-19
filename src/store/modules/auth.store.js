import {ACCESS_TOKEN, EXPIRES_IN, REFRESH_TOKEN, Jwt} from "@/service/jwt.js";

/* ------------- actions ------------ */
export const LOGIN = "login";
export const LOGOUT = "logout";

/* ------------ mutations ----------- */
export const SET_AUTH = "setAuth";
export const REMOVE_AUTH = "setAuth";

/* ------------- getters/state ------------ */
export const IS_AUTH = "isAuth";

const state = {
	[IS_AUTH]: undefined,
};

const getters = {
	[IS_AUTH]: (state) => {
		return state[IS_AUTH];
	},
};

const actions = {
	[LOGIN]: ({commit}, {access_token, refresh_token, expires_in}) => {
		Jwt.setAccessToken(access_token);
		Jwt.setRefreshToken(refresh_token);
		Jwt.setExpiresIn(expires_in);
		//commit(SET_AUTH);
	},
};

const mutations = {
	[SET_AUTH]: (state, {}) => {},
};

export default {namespaced: true, state, actions, mutations, getters};
