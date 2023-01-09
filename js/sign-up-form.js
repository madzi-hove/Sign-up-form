const image = document.querySelector(".image");
const content = document.querySelector(".content");
const textContainer = document.querySelector(".mobile-text-container");
const mobileText = document.querySelector(".presentation__text");
const mobileSignUp = document.querySelector(".mobile-sign-up");
const form = document.querySelector(".form");
const submitBtn = document.querySelector(".form-submit");
const pwd = document.querySelector("#pwd");
const close = document.querySelector(".close-btn");

// validation functions

// first name validation
function checkName(value) {
	console.log(value);
	const username = document.querySelector("#firstname");
	const pattern = /^\w{5,15}/;

	if (value.match(pattern)) {
		if (username.classList.contains("invalid")) {
			username.classList.remove("invalid");
		}
		username.classList.add("valid");
	} else {
		if (username.classList.contains("valid")) {
			username.classList.remove("valid");
		}
		username.classList.add("invalid");
	}

	if (value === "") {
		username.classList.remove("invalid");
		username.classList.remove("valid");
	}

	if (username.classList.contains("invalid")) {
		invalid = true;
	} else invalid = false;
}

// Email validation
function checkEmail(value) {
	const email = document.querySelector("#mail");
	const pattern =
		/(?:[a-z0-9+!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/i;

	if (value.match(pattern)) {
		if (email.classList.contains("invalid")) {
			email.classList.remove("invalid");
		}
		email.classList.add("valid");
	} else {
		if (email.classList.contains("valid")) {
			email.classList.remove("valid");
		}
		email.classList.add("invalid");
	}

	if (value === "") {
		email.classList.remove("invalid");
		email.classList.remove("valid");
	}

	if (email.classList.contains("invalid")) {
		invalid = true;
	} else invalid = false;
}

// Password validation
function checkPwdValidity(value) {
	const pattern = /^([a-z]){8,}$/;

	if (value.match(pattern)) {
		if (pwd.classList.contains("invalid")) {
			pwd.classList.remove("invalid");
		}
		pwd.classList.add("valid");
	} else {
		if (pwd.classList.contains("valid")) {
			pwd.classList.remove("valid");
		}
		pwd.classList.add("invalid");
	}

	if (value === "") {
		pwd.classList.remove("invalid");
		pwd.classList.remove("valid");
	}

	if (pwd.classList.contains("invalid")) {
		invalid = true;
	} else invalid = false;
}

// Check password validation
function checkConfirmPwd(value) {
	const pwdConfirm = document.querySelector("#pwd-confirm");

	if (value !== pwd.value) {
		pwdConfirm.classList.add("invalid");
	} else {
		pwdConfirm.classList.remove("invalid");
		pwdConfirm.classList.add("valid");
	}

	if (value === "") {
		pwdConfirm.classList.remove("invalid");
		pwdConfirm.classList.remove("valid");
		invalid = true;
	}

	if (pwdConfirm.classList.contains("invalid")) {
		invalid = true;
	} else invalid = false;
}

window.addEventListener("load", () => {
	form.addEventListener("input", (e) => {
		if (e.target.id === "firstname") checkName(e.target.value);
		if (e.target.id === "mail") checkEmail(e.target.value);
		if (e.target.id === "pwd") checkPwdValidity(e.target.value);
		if (e.target.id === "pwd-confirm") checkConfirmPwd(e.target.value);
	});

	mobileSignUp.addEventListener("click", (e) => {
		image.classList.add("hidden");
		textContainer.classList.add("hidden");
		mobileSignUp.classList.add("hidden");
		mobileText.classList.add("hidden");
		content.classList.remove("hidden");
		close.classList.remove("hidden");
	});

	close.addEventListener("click", () => {
		image.classList.remove("hidden");
		textContainer.classList.remove("hidden");
		mobileSignUp.classList.remove("hidden");
		mobileText.classList.remove("hidden");
		content.classList.add("hidden");
		close.classList.add("hidden");
	});

	submitBtn.addEventListener("click", (e) => {
		if (invalid === true) {
			e.preventDefault();
		}
	});
});
