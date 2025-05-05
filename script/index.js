const visibilityIcon = document.querySelector(".visibility-icon");

const passwordInput = document.querySelector(".password-input-field input");

const submitButton = document.querySelector("button[type=submit]");

visibilityIcon.addEventListener("click", () => {
    visibilityIcon.innerHTML === "visibility_off"
        ? (visibilityIcon.innerHTML = "visibility", passwordInput.setAttribute("type", "password"))
        : (visibilityIcon.innerHTML = "visibility_off", passwordInput.setAttribute("type", "text"));
});

submitButton.addEventListener("click", (e) => {
    if (passwordInput.value.length < 8) {
        passwordInput.classList.add("incorrect-password");
        passwordInput.value = "";
        e.preventDefault();
    } else {
        passwordInput.classList.remove("incorrect-password");
    }
})

passwordInput.addEventListener("input", () => {
    passwordInput.classList.remove("incorrect-password");
})
