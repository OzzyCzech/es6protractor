/*global $, browser, By */

export class SignUpForm {

	get loginInput() {
		return $('#user_login');
	}

	get passwordInput() {
		return $('#user_pass');
	}

	get submitButton() {
		return $('#loginform input[type="submit"]');
	}
}

export function signUpFormIsPresent() {
	return $('#loginform').isPresent();
}