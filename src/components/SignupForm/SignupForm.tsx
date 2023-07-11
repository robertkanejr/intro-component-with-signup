import React from "react";

const SignupForm = () => {
	return (
		<div>
			<form>
				<input type="text" placeholder="First Name" />
				<input type="text" placeholder="Last Name" />
				<input type="email" placeholder="Email Address" />
				<input type="password" placeholder="Password" />
				<button>Claim your free trial</button>
				<p>
					By clicking the button, you are agreeing to our <a href="#">Terms and Services</a>
				</p>
			</form>
		</div>
	);
};

export default SignupForm;
