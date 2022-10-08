
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
updateNameInput.title = "Please enter at least 1 character"
updateNameInput.disabled = true;

var editNameButton = document.createElement("button");
editNameButton.classList.add("edit__name__button");
editNameButton.classList.add("fa");
editNameButton.classList.add("fa-pencil");

editNameButton.onclick = function(event){
    event.preventDefault();
    updateNameInput.disabled = false;
}

var updateNameButton = document.createElement("button");
updateNameButton.classList.add("update__name__button");
updateNameButton.classList.add("fa");
updateNameButton.classList.add("fa-save");

updateNameForm.append(updateLabelName, updateNameInput, editNameButton, updateNameButton);

/* -- */
var updateEmailForm = document.createElement("form");
updateEmailForm.classList.add("update__settings__form")

var updateLabelEmail = document.createElement("label");
updateLabelEmail.htmlFor = "updateEmail";

var updateEmailInput = document.createElement("input");
updateEmailInput.type = "text";
updateEmailInput.placeholder = "Enter new email";
updateEmailInput.id = "updateEmail"
updateEmailInput.title = "Please use @ and . on your email"
updateEmailInput.disabled = true;

var editEmailButton = document.createElement("button");
editEmailButton.classList.add("edit__name__button");
editEmailButton.classList.add("fa");
editEmailButton.classList.add("fa-pencil");

editEmailButton.onclick = function(event){
    event.preventDefault();
    updateEmailInput.disabled = false;
}

var updateEmailButton = document.createElement("button");
updateEmailButton.classList.add("update__name__button");
updateEmailButton.classList.add("fa");
updateEmailButton.classList.add("fa-save");

updateEmailForm.append(updateLabelEmail, updateEmailInput, editEmailButton, updateEmailButton);

/* -- */
var updatePasswordForm = document.createElement("form");
updatePasswordForm.classList.add("update__settings__form")

var updateLabelPassword = document.createElement("label");
updateLabelPassword.htmlFor = "updatePassword";

var updatePasswordInput = document.createElement("input");
updatePasswordInput.type = "password";
updatePasswordInput.placeholder = "Enter new password";
updatePasswordInput.id = "updatePassword";
updatePasswordInput.title = "Please enter at least 8 characters without spaces";
updatePasswordInput.disabled = true;

var editPasswordButton = document.createElement("button");
editPasswordButton.classList.add("edit__name__button");
editPasswordButton.classList.add("fa");
editPasswordButton.classList.add("fa-pencil");

editPasswordButton.onclick = function(event){
    event.preventDefault();
    updatePasswordInput.disabled = false;
}

var updatePasswordButton = document.createElement("button");
updatePasswordButton.classList.add("update__name__button");
updatePasswordButton.classList.add("fa");
updatePasswordButton.classList.add("fa-save");

var updateCheckboxContainer = document.createElement("span");
updateCheckboxContainer.classList.add("form__update__checkbox__container")

var updateLabelPasswordCheckbox = document.createElement("label");
updateLabelPasswordCheckbox.type = "text";
updateLabelPasswordCheckbox.innerText = "Show password"
updateLabelPasswordCheckbox.classList.add("form__checkbox--text")

var updatePasswordCheckbox = document.createElement("input");
updatePasswordCheckbox.type = "checkbox";

updatePasswordCheckbox.onchange = function showPassword() {
    var showElement = updatePasswordInput;
    if (showElement.type === "password") {
      showElement.type = "text";
    } else {
      showElement.type = "password";
    }
  } 

  updateCheckboxContainer.append(updatePasswordCheckbox, updateLabelPasswordCheckbox)

updatePasswordForm.append(updateLabelPassword, updatePasswordInput, editPasswordButton, updatePasswordButton);

settingsFormContainer.append(updateTitleForm, updateNameForm, updateEmailForm, updatePasswordForm, updateCheckboxContainer);

/* -- */
updateNameForm.onsubmit = function(event) {
    event.preventDefault()

    log('DEBUG', 'Submit new name')

    var newName = updateNameInput.value

    var result = updateUserName(user.name, newName)

    if (result instanceof Error) {
        alert(result.message)

        return
    }

    alert('Your changes have been applied')

    updateNameInput.disabled = true;
    updateNameForm.reset();
    updateNameInput.placeholder = user.name;
    homeMenuDropdownUserName.innerText = user.name;
    homeSettingsTitle.innerText = user.name;
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
    updateEmailInput.disabled = true;
    updateEmailForm.reset();
    updateEmailInput.placeholder = user.email;
    homeSettingsSecondTitle.innerText = user.email;
}

/* -- */
updatePasswordForm.onsubmit = function(event) {
    event.preventDefault()

    log('DEBUG', 'Submit new password')

    var newPassword = updatePasswordInput.value

    var result = updateUserPassword(user.password, newPassword)

    if (result instanceof Error) {
        alert(result.message)

        updatePasswordForm.reset();
        return
    }

    alert('Your changes have been applied')
    updatePasswordInput.disabled = true;
    updatePasswordForm.reset();
}

/* ----------------------- */