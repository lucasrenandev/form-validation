// Modo estrito
"use strict"

// Elementos
const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const passwordConfirmation = document.getElementById("password-confirmation");
const inputs = document.querySelectorAll(".form input")

// Iniciar cadastro de usuário
form.addEventListener("submit", (event) => {
    event.preventDefault();
    formCheck();
});

// Verificando os campos ao perder o foco
inputs.forEach((input) => {
    input.addEventListener("blur", () => {
        switch(input.className) {
            case "username":
                checkUsername();
                break;
            case "email":
                checkEmail();
                break;
            case "password":
                checkPassword();
                break;
            case "password-confirmation":
                checkPasswordConfirmation();
                break;
            default:
                formCheck(); 
        }
    });
});

// Verificando campo nome de usuário
function checkUsername() {
    const usernameValue = username.value;
    if(usernameValue === "") {
        inputError(username, "O nome de usuário é obrigatório.");
    }
    else {
        const formContent = username.parentElement;
        formContent.className = "form-content";
    }
}

// Verificando campo e-mail
function checkEmail() {
    const emailValue = email.value;
    if(emailValue === "") {
        inputError(email, "O e-mail é obrigatório.");
    }
    else {
        const formContent = email.parentElement;
        formContent.className = "form-content";
    }
}

// Verificando campo senha
function checkPassword() {
    const passwordValue = password.value;
    if(passwordValue === "") {
        inputError(password, "A senha é obrigatória.");
    }
    else if(passwordValue.length < 8) {
        inputError(password, "A senha precisa ter no minimo 8 caracteres.");
    }
    else {
        const formContent = password.parentElement;
        formContent.className = "form-content";
    }
}

// Verificando campo confirmação de senha
function checkPasswordConfirmation() {
    const passwordConfirmationValue = passwordConfirmation.value;
    const passwordValue = password.value
    if(passwordConfirmationValue === "") {
        inputError(passwordConfirmation, "A confirmação de senha é obrigatória.");
    }
    else if(passwordConfirmationValue !== passwordValue) {
        inputError(passwordConfirmation, "As senhas precisam ser iguais.");
    }
    else {
        const formContent = passwordConfirmation.parentElement;
        formContent.className = "form-content";
    }
}

// Verificando validação dos dados
function formCheck() {
    checkUsername();
    checkEmail();
    checkPassword();
    checkPasswordConfirmation();
    const formContent = form.querySelectorAll(".form-content");
    const isValid = [...formContent].every((item) => {
        return item.className === "form-content";
    })
    if(isValid) {
        setTimeout(() => {
            window.alert("Usuário cadastrado com sucesso!");
        }, 1000);
    }
}

// Exibir mensagem de erro de dados
function inputError(input, message) {
    const formContent = input.parentElement;
    const errorMessage = formContent.querySelector(".error-message");
    formContent.className = "form-content error";
    errorMessage.innerText = message;
}