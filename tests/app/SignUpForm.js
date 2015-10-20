/*global $, browser, By */

export class SignUpForm {

	get signUpButton() {
		return $('#loginDropdownMenu > a#loginButton');
	}

	get loginInput() {
		return $('#loginForm input[name="email"]');
	}

	get passwordInput() {
		return $('#loginForm input[name="password"]');
	}

	get submitButton() {
		return $('#loginForm button[type="submit"]');
	}

	get profileLink() {
		return $('#showUserMenu');
	}
}

export function signUpFormIsPresent() {
	return $('#loginForm').isPresent();
}