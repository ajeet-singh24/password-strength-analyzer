const passwordInput = document.getElementById("password");
const togglePassword = document.getElementById("togglePassword");
const strengthFill = document.getElementById("strengthFill");
const strengthText = document.getElementById("strengthText");

passwordInput.addEventListener("input", function () {
    const password = passwordInput.value;

    let score = 0;

    const hasLength = password.length >= 8;
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSpecial = /[^A-Za-z0-9]/.test(password);

    if (hasLength) score++;
    if (hasUppercase) score++;
    if (hasLowercase) score++;
    if (hasNumber) score++;
    if (hasSpecial) score++;

    updateRequirement("length", hasLength, "At least 8 characters");
    updateRequirement("uppercase", hasUppercase, "Contains uppercase letter");
    updateRequirement("lowercase", hasLowercase, "Contains lowercase letter");
    updateRequirement("number", hasNumber, "Contains a number");
    updateRequirement("special", hasSpecial, "Contains special character");

    if (password.length === 0) {
        strengthFill.style.width = "0%";
        strengthText.textContent = "Enter a password";
        strengthText.style.color = "#333";
    } 
    else if (score <= 2) {
        strengthFill.style.width = "33%";
        strengthFill.style.background = "#e74c3c";
        strengthText.textContent = "Weak Password";
        strengthText.style.color = "#e74c3c";
    } 
    else if (score <= 4) {
        strengthFill.style.width = "66%";
        strengthFill.style.background = "#f39c12";
        strengthText.textContent = "Medium Password";
        strengthText.style.color = "#f39c12";
    } 
    else {
        strengthFill.style.width = "100%";
        strengthFill.style.background = "#27ae60";
        strengthText.textContent = "Strong Password";
        strengthText.style.color = "#27ae60";
    }
});

function updateRequirement(id, condition, text) {
    const element = document.getElementById(id);

    if (condition) {
        element.innerHTML = "✅ " + text;
    } else {
        element.innerHTML = "❌ " + text;
    }
}

togglePassword.addEventListener("click", function () {
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        togglePassword.textContent = "🙈";
    } else {
        passwordInput.type = "password";
        togglePassword.textContent = "👁";
    }
});
