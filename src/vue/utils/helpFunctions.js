export function validateProp(currentValue, values) {
	if (values.indexOf(currentValue) === -1) {
		return false;
	} else {
		return true;
	}
}

export function getErrorMessage(errors) {
	let result = "";

	for (let errorText in errors) {
		result += errors[errorText];
	}

	return result;
}
