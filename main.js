function onSubmit() {
    // Text inputs
    let usernameField = document.getElementById("username");
    let namesField = document.getElementById("names");
    let emailField = document.getElementById("email");
    let passwordField = document.getElementById("password");
    let cityField = document.getElementById("city");
    let streetField = document.getElementById("street");
    let postcodeField = document.getElementById("postcode");

    // Error labels
    let usernameErrorLabel = document.getElementById("username_error");
    let namesErrorLabel = document.getElementById("names_error");
    let emailErrorLabel = document.getElementById("email_error");
    let passwordErrorLabel = document.getElementById("password_error");
    let addressErrorLabel = document.getElementById("address_error");

    let username = usernameField.value;
    if (!username || username.length < 3 || username.length > 10) {
        usernameErrorLabel.textContent = "Моля въведете потребителско име съдържащо между 3 и 10 символа!";
        usernameField.focus();
        return;
    } else {
        usernameErrorLabel.textContent = "";
    }

    let names = namesField.value;
    if (!names || names.length > 50) {
        namesErrorLabel.textContent = "Моля въведете имената си (не повече от 50 символа).";
        namesField.focus();
        return
    } else {
        namesErrorLabel.textContent = "";
    }

    let email = emailField.value;
    if (!email || !email.match(emailField.pattern)) {
        emailErrorLabel.textContent = "Моля въведете валиден имейл!";
        emailField.focus();
        return;
    } else {
        emailErrorLabel.textContent = "";
    }

    let password = passwordField.value;
    if (!password || !password.match(/[a-z]/) || !password.match(/[A-Z]/) || !password.match(/[0-9]/)) {
        passwordErrorLabel.textContent = "Моля въведете парола, съдържаща малки и главни букви, както и цифри!";
        passwordField.focus();
        return;
    } else {
        passwordErrorLabel.textContent = "";
    }

    let city = cityField.value;
    let street = streetField.value;
    let postcode = postcodeField.value;
    if (postcode && !postcode.match(postcodeField.pattern)) {
        addressErrorLabel.textContent = "Моля въведете пощенски код във формат 00000-0000";
        postcodeField.focus();
        return
    } else {
        addressErrorLabel.textContent = "";
    }

    console.log("yes");
}

(function () {
    let submitButton = document.getElementById("submit");
    submitButton.addEventListener("click", onSubmit);
})()
