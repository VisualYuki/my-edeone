import {ACCESS_TOKEN, EXPIRES_IN, REFRESH_TOKEN, Jwt} from "@/service/jwt.js";
import {AuthApi} from "@/api/modules/auth.api.js";

/* ------------- ACTIONS ------------ */
export const LOGIN = "login";
export const LOGOUT = "logout";
export const VERIFY_AUTH = "verifyAuth";

/* ------------ MUTATIONS ----------- */
export const SET_AUTH = "setAuth";
export const UNSET_AUTH = "unsetAuth";

/* ------------- GETTERS/STATE ------------ */
export const IS_AUTH = "isAuth";

const state = {
	[IS_AUTH]: !!Jwt.getAccessToken(),
	[EXPIRES_IN]: Jwt.getExpiresIn(),
	[REFRESH_TOKEN]: Jwt.getRefreshToken,
	[ACCESS_TOKEN]: Jwt.getAccessToken(),
};

//const getters = {
//	[IS_AUTH]: (state) => {
//		return state[IS_AUTH];
//	},
//	//[EXPIRES_IN]: (state) => {
//	//	return state[EXPIRES_IN];
//	//},
//	//[REFRESH_TOKEN]: (state) => {
//	//	return state[REFRESH_TOKEN];
//	//},
//	//[ACCESS_TOKEN]: (state) => {
//	//	return state[ACCESS_TOKEN];
//	//},
//};

const actions = {
	[LOGIN]: ({commit}, payback) => {
		commit(SET_AUTH, payback);
	},
	[LOGOUT]: ({commit}) => {
		//router.push("/auth/logout");
		AuthApi.log;
		commit(UNSET_AUTH);
	},
	async [VERIFY_AUTH]({commit, state}) {
		if (!state[IS_AUTH]) {
			commit(UNSET_AUTH);
			return false;
		}

		// выставляем время жизни токена на 2 минуты меньше чем есть на самом деле, чтобы он не сдох пока делается запрос
		const TWO_MUNITS = 2 * 60 * 1000;
		if (Date.now() < state[EXPIRES_IN] - TWO_MUNITS) {
			return true;
		}

		const response = await AuthApi.refreshToken();

		// the refresh token requset got cancelled
		if (response === undefined) {
			return true;
		}

		response.success ? commit(SET_AUTH, response.data) : commit(UNSET_AUTH);

		return response.success;
	},
};

const mutations = {
	[SET_AUTH]: (state, {access_token, refresh_token, expires_in}) => {
		expires_in = expires_in * 1000;

		state[IS_AUTH] = true;
		state[REFRESH_TOKEN] = refresh_token;
		state[ACCESS_TOKEN] = access_token;
		state[EXPIRES_IN] = expires_in;

		Jwt.setAccessToken(access_token);
		Jwt.setRefreshToken(refresh_token);
		Jwt.setExpiresIn(expires_in);
	},
	[UNSET_AUTH](state) {
		state[IS_AUTH] = false;
		state[EXPIRES_IN] = null;
		state[ACCESS_TOKEN] = null;

		//state.user = {};

		Jwt.removeAccessToken();
		Jwt.removeRefreshToken();
		Jwt.removeExpiresIn();
	},
};

export default {namespaced: true, state, actions, mutations};
