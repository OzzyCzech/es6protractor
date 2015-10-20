/*global $ */

export function isFlashErrorPresent() {
	return $('.flash .alert-error').isPresent();
}

export function isFlashSuccessPresent() {
	return $('.flash .alert-success').isPresent();
}