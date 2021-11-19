export const ACCESS_TOKEN = "accessToken";
export const REFRESH_TOKEN = "refreshToken";
export const EXPIRES_IN = "expires_in";

function getAccessToken() {
	return window.localStorage.getItem(ACCESS_TOKEN);
}

function setAccessToken(accessToken) {
	return window.localStorage.setItem(ACCESS_TOKEN, accessToken);
}

function removeAccessToken() {
	return window.localStorage.removeItem(ACCESS_TOKEN);
}

function getRefreshToken() {
	return window.localStorage.getItem(REFRESH_TOKEN);
}

function setRefreshToken(refreshToken) {
	return window.localStorage.setItem(REFRESH_TOKEN, refreshToken);
}

function removeRefreshToken() {
	return window.localStorage.removeItem(REFRESH_TOKEN);
}

function setExpiresIn(expiresIn) {
	window.localStorage.setItem(EXPIRES_IN, expiresIn);
}

function getExpiresIn() {
	return window.localStorage.getItem(EXPIRES_IN);
}

function removeExpiresIn() {
	window.localStorage.removeItem(EXPIRES_IN);
}

export const Jwt = {
	getAccessToken,
	setAccessToken,
	removeAccessToken,
	getRefreshToken,
	setRefreshToken,
	removeRefreshToken,
	setExpiresIn,
	getExpiresIn,
	removeExpiresIn,
};
