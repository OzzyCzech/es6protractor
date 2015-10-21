/*gloal $, browser*/
import {SignUpForm} from './SignUpForm.js';

/**
 * Sign Up user
 * @param username
 * @param password
 * @returns {*}
 * @constructor
 */
export function SignUp(username, password) {
	let signUpForm = new SignUpForm();

	expect(signUpForm.loginInput.isPresent()).toBe(true);
	signUpForm.loginInput.clear();
	signUpForm.loginInput.sendKeys(username);

	// and password
	signUpForm.passwordInput.clear();
	signUpForm.passwordInput.sendKeys(password);

	// submit form
	return signUpForm.submitButton.click();

}