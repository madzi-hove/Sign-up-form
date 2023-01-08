const image = document.querySelector(".image");
const content = document.querySelector(".content");
const mobileSignUp = document.querySelector(".mobile-sign-up");
const form = document.querySelector(".form");
const submitBtn = document.querySelector(".form-submit");
const pwd = document.querySelector("#pwd");

// validation functions
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

window.addEventListener("load", () => {
	form.addEventListener("input", (e) => {
		if (e.target.id === "firstname") checkName(e.target.value);
	});
});
