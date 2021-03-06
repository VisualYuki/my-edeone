//import qs from "qs";
//import Vue from "vue";
//import axios from "axios";
//import VueAxios from "vue-axios";
//import {
//	ERROR_AGREEMENT_NOT_ACCEPTED,
//	ERROR_INVALID_TOKEN,
//	ERROR_PERMISSION_DENIED,
//	ERROR_PROJECT_ID_MISSING,
//	ERROR_PROJECT_UNPAID,
//	ERROR_RESOURCE_NOT_FOUND,
//} from "./codes";
//import Swal from "sweetalert2";
//import {
//	SAVE_INDICATOR_DECREMENT_COUNT,
//	SAVE_INDICATOR_INCREMENT_COUNT,
//	SAVE_INDICATOR_SET_SUCCESS,
//} from "shared/store/modules/course.store";
//import {
//	DECREMENT_AUTH_REFRESH_REQUEST_COUNT,
//	INCREMENT_AUTH_REFRESH_REQUEST_COUNT,
//	VERIFY_AUTH,
//} from "shared/store/modules/auth.store";
//import {config} from "@/main";
//import {vueInstance} from "@/main";

export const REQUEST_METHOD = {
	GET: "GET",
	POST: "POST",
	PATCH: "PATCH",
	DELETE: "DELETE",
	PUT: "PUT",
};

import {getErrorMessage} from "@/vue/utils/helpFunctions";
import axios from "axios";

export default {
	//init() {
	//	Vue.use(VueAxios, axios);
	//	Vue.axios.defaults.baseURL = config.getApiUrl();
	//},

	//async beforeRequest(url) {
	//	if (url.startsWith("/auth/")) {
	//		if (url === "/auth/refresh-token") {
	//			// если уходит несколько запросов на обновление токенов, то мы ждём пока придёт один из них и отменяем все остальные
	//			if (vueInstance.$store.getters.isRefreshingAuth) {
	//				while (vueInstance.$store.getters.isRefreshingAuth) {
	//					await new Promise((resolve) => setTimeout(resolve, 100));
	//				}

	//				debugger;
	//				return false;
	//			}

	//			vueInstance.$store.dispatch(INCREMENT_AUTH_REFRESH_REQUEST_COUNT);
	//		}

	//		debugger;

	//		return true;
	//	}

	//	debugger;

	//	const isAuthenticated = await vueInstance.$store.dispatch(VERIFY_AUTH);
	//	if (!isAuthenticated) {
	//		return false;
	//	}

	//	if (this.isCourseCrudRequest(url)) {
	//		vueInstance.$store.dispatch("course/" + SAVE_INDICATOR_INCREMENT_COUNT);
	//	}

	//	return true;
	//},

	//afterRequest(url, response) {
	//	if (url === "/auth/refresh-token") {
	//		vueInstance.$store.dispatch(DECREMENT_AUTH_REFRESH_REQUEST_COUNT);
	//	}

	//	if (!response.success && response.code) {
	//		vueInstance.$alert.error(response.error);
	//		switch (response.code) {
	//			case ERROR_PROJECT_UNPAID:
	//				Swal.fire(
	//					"Проект не оплачен",
	//					'Многие функции будут недоступны<br><a href="/tariffication">Перейти к оплате</a>',
	//					"warning"
	//				);
	//				break;
	//			case ERROR_PERMISSION_DENIED:
	//			case ERROR_RESOURCE_NOT_FOUND:
	//				vueInstance.$router.go(-1);
	//				break;
	//			case ERROR_INVALID_TOKEN:
	//			case ERROR_PROJECT_ID_MISSING:
	//				vueInstance.$router.push({path: "/auth/logout", query: {backurl: url}});
	//				break;
	//			case ERROR_AGREEMENT_NOT_ACCEPTED:
	//				vueInstance.$router.currentRoute.path !== "/agreement" && vueInstance.$router.push({path: "/agreement"});
	//				break;
	//		}
	//	}

	//	if (this.isCourseCrudRequest(url)) {
	//		vueInstance.$store.dispatch("course/" + SAVE_INDICATOR_DECREMENT_COUNT);
	//		vueInstance.$store.dispatch("course/" + SAVE_INDICATOR_SET_SUCCESS, response.success);
	//	}
	//},

	//isCourseCrudRequest(url) {
	//	return url.includes("course") && this.isCrudRequest(url);
	//},

	//isCrudRequest(url) {
	//	return ["save", "toggle", "delete"].some((part) => url.includes(part));
	//},

	async makeRequest(method, url, data) {
		//		const canMakeRequest = await this.beforeRequest(url);

		//if (!canMakeRequest) {
		//	return undefined;
		//}

		let requestConfig = {};
		requestConfig["url"] = url;
		requestConfig["method"] = method.toLowerCase();

		//requestConfig.headers ||= {};
		//requestConfig.headers.Authorization ||= `Bearer ${vueInstance.$store.getters.accessToken}`;
		//requestConfig.headers.ProjectId ||= vueInstance.$store.getters.projectId;

		switch (method) {
			case REQUEST_METHOD.GET:
			case REQUEST_METHOD.DELETE:
				requestConfig["params"] = data;
				break;
			case REQUEST_METHOD.POST:
			case REQUEST_METHOD.PUT:
			case REQUEST_METHOD.PATCH:
				requestConfig["data"] = data;
				break;
		}

		const responseHandler = (response) => {
			let responseData = response.data;

			//this.afterRequest(response.config.url, apiResponse);

			responseData.errorMessage = getErrorMessage(responseData.data.errors);
			return responseData;
		};

		return axios(requestConfig).then((response) => {
			return responseHandler(response);
		});

		//(function (response) {
		//	return response.data;
		//});

		//return Vue.axios[method.toLowerCase()](...baseCallParams)
		//	.then((axiosResponse) => responseHandler(axiosResponse))
		//	.catch((error) => responseHandler(error.response));
	},

	get(url, query = {}, config = {}) {
		return new Promise(async (resolve) => {
			resolve(await this.makeRequest(REQUEST_METHOD.GET, url, query, config));
		});
	},

	delete(url, query = {}, config = {}) {
		return new Promise(async (resolve) => {
			resolve(await this.makeRequest(REQUEST_METHOD.DELETE, url, query, config));
		});
	},

	post(url, data = {}, config = {}) {
		return new Promise(async (resolve) => {
			resolve(await this.makeRequest(REQUEST_METHOD.POST, url, data, config));
		});
	},

	patch(url, data = {}, config = {}) {
		return new Promise(async (resolve) => {
			resolve(await this.makeRequest(REQUEST_METHOD.PATCH, url, data, config));
		});
	},

	put(url, data = {}, config = {}) {
		return new Promise(async (resolve) => {
			resolve(await this.makeRequest(REQUEST_METHOD.PUT, url, data, config));
		});
	},
};
