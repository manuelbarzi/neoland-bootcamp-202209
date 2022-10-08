/* TODO AÑADIR REQUERIMIENTOS DE TAMAÑO Y CHARACTERERS AL INPUT */
/* TODO FORM PLACEHOLDER TE DIGA TUS DATOS ACTUALES */
/* TODO BLOQUEAR LOS PLACEHOLDER HASTA PULSAR EL BOTÓN */
/* TODO AGREGAR CHECK PARA MOSTRAR EL PASSWORD */

/* CREAMOS SETTINGS SECTION */
var homeSettingsSection = document.createElement("section");
homeSettingsSection.classList.add("home__settings__section");

/* -- */
var homeSettingsHeader = document.createElement("div");
homeSettingsHeader.classList.add("home__settings__header")

homeSettingsSection.append(homeSettingsHeader);

/* -- */
var homeSettingsTitle = document.createElement("span");
homeSettingsTitle.innerText = "User Name";
homeSettingsTitle.classList.add("home__settings--title");

var homeSettingsSecondTitle = document.createElement("span");
homeSettingsSecondTitle.innerText = "User email";
homeSettingsSecondTitle.classList.add("home__settings--second-title");

homeSettingsHeader.append(homeSettingsTitle, homeSettingsSecondTitle);

/* -- */
var settingsFormContainer = document.createElement("div");
settingsFormContainer.classList.add("home__settings__form");

homeSettingsSection.append(settingsFormContainer);

/* -- */
var updateTitleForm = document.createElement("span");
updateTitleForm.innerText = "Manage your Trello account"
updateTitleForm.classList.add("home__settings__form--title");

/* -- */
var updateNameForm = document.createElement("form");
updateNameForm.classList.add("update__settings__form")

var updateLabelName = document.createElement("label");
updateLabelName.htmlFor = "updateName";

var updateNameInput = document.createElement("input");
updateNameInput.type = "text";
updateNameInput.placeholder = "Enter new name";
updateNameInput.id = "updateName"

var updateNameButton = document.createElement("button");
updateNameButton.classList.add("update__name__button");
updateNameButton.classList.add("fa");
updateNameButton.classList.add("fa-pencil");

updateNameForm.append(updateLabelName, updateNameInput,  updateNameButton);

/* -- */
var updateEmailForm = document.createElement("form");
updateEmailForm.classList.add("update__settings__form")

var updateLabelEmail = document.createElement("label");
updateLabelEmail.htmlFor = "updateEmail";

var updateEmailInput = document.createElement("input");
updateEmailInput.type = "text";
updateEmailInput.placeholder = "Enter new email";
updateEmailInput.id = "updateEmail"

var updateEmailButton = document.createElement("button");
updateEmailButton.classList.add("update__name__button");
updateEmailButton.classList.add("fa");
updateEmailButton.classList.add("fa-pencil");

updateEmailForm.append(updateLabelEmail, updateEmailInput,  updateEmailButton);

/* -- */
var updatePasswordForm = document.createElement("form");
updatePasswordForm.classList.add("update__settings__form")

var updateLabelPassword = document.createElement("label");
updateLabelPassword.htmlFor = "updatePassword";

var updatePasswordInput = document.createElement("input");
updatePasswordInput.type = "password";
updatePasswordInput.placeholder = "Enter new password";
updatePasswordInput.id = "updatePassword"

var updatePasswordButton = document.createElement("button");
updatePasswordButton.classList.add("update__name__button");
updatePasswordButton.classList.add("fa");
updatePasswordButton.classList.add("fa-pencil");

updatePasswordForm.append(updateLabelPassword, updatePasswordInput, updatePasswordButton);

settingsFormContainer.append(updateTitleForm, updateNameForm, updateEmailForm, updatePasswordForm);

/* -- */
updateNameForm.onsubmit = function(event) {
    event.preventDefault()

    log('DEBUG', 'Submit new password')

    var newName = updateNameInput.value

    var result = newName

    if(user.name === newName){
        return new Error('Your new name cannot be the same as your current name')
    
    } else {
        user.name = newName
    }

    if (result instanceof Error) {
        alert(result.message)

        return
    }

    alert('Your changes have been applied')

    updateNameForm.reset();
    homeMenuDropdownUserName.innerText = user.name;
    homeSettingsTitle.innerText = user.name;
    homeSettingsSecondTitle.innerText = user.email;
}

/* -- */
updateEmailForm.onsubmit = function(event) {
    event.preventDefault()

    log('DEBUG', 'Submit new email')

    var newEmail = updateEmailInput.value
        
    var result = updateUserEmail(user.email, newEmail)

    if (result instanceof Error) {
        alert(result.message)

        return
    }

    alert('Your changes have been applied')
    updateEmailForm.reset();
    homeMenuDropdownUserName.innerText = user.name;
    homeSettingsTitle.innerText = user.name;
    homeSettingsSecondTitle.innerText = user.email;
}

/* -- */
updatePasswordForm.onsubmit = function(event) {
    event.preventDefault()

    log('DEBUG', 'Submit new password')

    var newPassword = updatePasswordInput.value
    var result = newPassword

    if(user.password === newPassword){
        return new Error('Your new password cannot be the same as your current password')
    } else {
        user.password = newPassword
    }

    if (result instanceof Error) {
        alert(result.message)

        return
    }

    alert('Your changes have been applied')

    updatePasswordForm.reset();
    homeMenuDropdownUserName.innerText = user.name;
    homeSettingsTitle.innerText = user.name;
    homeSettingsSecondTitle.innerText = user.email;
}

/* ----------------------- */