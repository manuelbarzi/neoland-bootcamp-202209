/* TODO SIMPLIFICAR 2 BOTONES A 1 */

/* CREAMOS SETTINGS SECTION */
const homeSettingsSection = document.createElement("section");
homeSettingsSection.classList.add("home__settings__section");

const homeSettingsHeader = document.createElement("div");
homeSettingsHeader.classList.add("home__settings__header")

homeSettingsSection.append(homeSettingsHeader);

const homeSettingsTitle = document.createElement("span");
homeSettingsTitle.innerText = "My Account";
homeSettingsTitle.classList.add("home__settings--title");

const homeSettingsSecondTitle = document.createElement("span");
homeSettingsSecondTitle.innerText = "User email";
homeSettingsSecondTitle.classList.add("home__settings--second-title");

homeSettingsHeader.append(homeSettingsTitle, homeSettingsSecondTitle);

const settingsFormContainer = document.createElement("div");
settingsFormContainer.classList.add("home__settings__form");

homeSettingsSection.append(settingsFormContainer);

const updateTitleForm = document.createElement("span");
updateTitleForm.innerText = "Manage your Trello account"
updateTitleForm.classList.add("home__settings__form--title");

const updateNameForm = document.createElement("form");
updateNameForm.classList.add("update__settings__form")

const updateLabelName = document.createElement("label");
updateLabelName.htmlFor = "updateName";

const updateNameInput = document.createElement("input");
updateNameInput.type = "text";
updateNameInput.placeholder = "Enter new name";
updateNameInput.id = "updateName"
updateNameInput.title = "Please enter at least 1 character"
updateNameInput.disabled = true;

const editNameButton = document.createElement("button");
editNameButton.classList.add("edit__name__button");
editNameButton.classList.add("fa");
editNameButton.classList.add("fa-pencil");

editNameButton.onclick = function (event) {
    event.preventDefault();
    updateNameInput.disabled = false;
}

const updateNameButton = document.createElement("button");
updateNameButton.classList.add("update__name__button");
updateNameButton.classList.add("fa");
updateNameButton.classList.add("fa-save");

updateNameForm.append(updateLabelName, updateNameInput, editNameButton, updateNameButton);

const updateEmailForm = document.createElement("form");
updateEmailForm.classList.add("update__settings__form")

const updateLabelEmail = document.createElement("label");
updateLabelEmail.htmlFor = "updateEmail";

const updateEmailInput = document.createElement("input");
updateEmailInput.type = "text";
updateEmailInput.placeholder = "Enter new email";
updateEmailInput.id = "updateEmail"
updateEmailInput.title = "Please use @ and . on your email"
updateEmailInput.disabled = true;

const editEmailButton = document.createElement("button");
editEmailButton.classList.add("edit__name__button");
editEmailButton.classList.add("fa");
editEmailButton.classList.add("fa-pencil");

editEmailButton.onclick = function (event) {
    event.preventDefault();
    updateEmailInput.disabled = false;
}

const updateEmailButton = document.createElement("button");
updateEmailButton.classList.add("update__name__button");
updateEmailButton.classList.add("fa");
updateEmailButton.classList.add("fa-save");

updateEmailForm.append(updateLabelEmail, updateEmailInput, editEmailButton, updateEmailButton);

const updatePasswordForm = document.createElement("form");
updatePasswordForm.classList.add("update__settings__form")

const updateLabelPassword = document.createElement("label");
updateLabelPassword.htmlFor = "updatePassword";

const updatePasswordInput = document.createElement("input");
updatePasswordInput.type = "password";
updatePasswordInput.placeholder = "Enter new password";
updatePasswordInput.id = "updatePassword";
updatePasswordInput.title = "Please enter at least 8 characters without spaces";
updatePasswordInput.disabled = true;

const editPasswordButton = document.createElement("button");
editPasswordButton.classList.add("edit__name__button");
editPasswordButton.classList.add("fa");
editPasswordButton.classList.add("fa-pencil");

editPasswordButton.onclick = function (event) {
    event.preventDefault();
    updatePasswordInput.disabled = false;
}

const updatePasswordButton = document.createElement("button");
updatePasswordButton.classList.add("update__name__button");
updatePasswordButton.classList.add("fa");
updatePasswordButton.classList.add("fa-save");

const updateCheckboxContainer = document.createElement("span");
updateCheckboxContainer.classList.add("form__update__checkbox__container")

const updateLabelPasswordCheckbox = document.createElement("label");
updateLabelPasswordCheckbox.type = "text";
updateLabelPasswordCheckbox.innerText = "Show password"
updateLabelPasswordCheckbox.classList.add("form__checkbox--text")

const updatePasswordCheckbox = document.createElement("input");
updatePasswordCheckbox.type = "checkbox";

updatePasswordCheckbox.onchange = function showPassword() {
    const showElement = updatePasswordInput;
    if (showElement.type === "password") {
        showElement.type = "text";
    } else {
        showElement.type = "password";
    }
}

updateCheckboxContainer.append(updatePasswordCheckbox, updateLabelPasswordCheckbox)

updatePasswordForm.append(updateLabelPassword, updatePasswordInput, editPasswordButton, updatePasswordButton);

settingsFormContainer.append(updateTitleForm, updateNameForm, updateEmailForm, updatePasswordForm, updateCheckboxContainer);

updateNameForm.onsubmit = function (event) {
    event.preventDefault()

    log('DEBUG', 'Submit new name')

    const newName = updateNameInput.value

    try {
        updateUserName(user.name, newName)

        alert('Your changes have been applied')

        updateNameInput.disabled = true;
        updateNameForm.reset();
        updateNameInput.setAttribute("value", user.name);
        homeMenuDropdownUserName.innerText = user.name;
        tasksPanelSecondTitle.innerText = user.name;

    } catch (error) {
        alert(error.message)
    }
}

updateEmailForm.onsubmit = function (event) {
    event.preventDefault()

    log('DEBUG', 'Submit new email')

    const newEmail = updateEmailInput.value

    try {
        updateUserEmail(user.email, newEmail)

        alert('Your changes have been applied')
        updateEmailInput.disabled = true;
        updateEmailForm.reset();
        updateEmailInput.setAttribute("value", user.email);
        homeSettingsSecondTitle.innerText = user.email;

    } catch (error) {
        alert(error.message)
    }
}

updatePasswordForm.onsubmit = function (event) {
    event.preventDefault()

    log('DEBUG', 'Submit new password')

    const newPassword = updatePasswordInput.value

    try {
        updateUserPassword(user.password, newPassword)

        alert('Your changes have been applied')
        updatePasswordInput.disabled = true;
        updatePasswordForm.reset();

    } catch (error) {
        alert(error.message)

        updatePasswordForm.reset();
    }
}