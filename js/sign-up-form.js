const image = document.querySelector(".image");
const content = document.querySelector(".content");
const mobileSignUp = document.querySelector(".mobile-sign-up");
const form = document.querySelector(".form");
const submitBtn = document.querySelector(".form-submit");
const pwd = document.querySelector("#pwd");

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

window.addEventListener("load", () => {
	form.addEventListener("input", (e) => {
		if (e.target.id === "firstname") checkName(e.target.value);
		if (e.target.id === "mail") checkEmail(e.target.value);
	});
});
