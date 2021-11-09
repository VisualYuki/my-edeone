export function validateProp(currentValue, values) {
	if (values.indexOf(currentValue) === -1) {
		return false;
	} else {
		return true;
	}
}
