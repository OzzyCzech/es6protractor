import {SignUp} from './app/SignUp.js';
import {isFlashErrorPresent} from './app/Flash.js';
import {isFlashSuccessPresent} from './app/Flash.js';

describe('Authentication', function () {

	beforeEach(function () {
		browser.get('/');
	});

	it('should login', function () {
				SignUp('user@email.com', 'mypassword').then(
						function () {
							expect(isFlashErrorPresent()).toBe(false, 'Sign Up failed ends with error...');
							//expect(isFlashSuccessPresent()).toBe(true); // or oposit...
						}
				);
			}
	);
});
