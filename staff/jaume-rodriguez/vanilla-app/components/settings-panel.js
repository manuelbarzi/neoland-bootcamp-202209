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

homeSettingsSection.append(settingsFormContainer);

/* -- */
var settingsForm = document.createElement("form");
settingsForm.classList.add("home__settings__form");

settingsFormContainer.append(settingsForm);

/* -- */
var updateTitleForm = document.createElement("span");
updateTitleForm.innerText = "Manage your Trello account"
updateTitleForm.classList.add("home__settings__form--title");

/* -- */
var updateLabelName = document.createElement("label");
updateLabelName.htmlFor = "updateName";

var updateNameInput = document.createElement("input");
updateNameInput.type = "text";
updateNameInput.placeholder = "Enter new name";
updateNameInput.id = "updateName"

/* -- */
var updateLabelEmail = document.createElement("label");
updateLabelEmail.htmlFor = "updateEmail";

var updateEmailInput = document.createElement("input");
updateEmailInput.type = "text";
updateEmailInput.placeholder = "Enter new email";
updateEmailInput.id = "updateEmail"

/* -- */
var updateLabelPassword = document.createElement("label");
updateLabelPassword.htmlFor = "updatePassword";

var updatePasswordInput = document.createElement("input");
updatePasswordInput.type = "text";
updatePasswordInput.placeholder = "Enter new password";
updatePasswordInput.id = "updatePassword"

/* -- */
var updateButton = document.createElement("button");
updateButton.innerText = "Save";
updateButton.classList.add("button");

settingsForm.append(updateTitleForm, updateLabelName, updateNameInput, updateLabelEmail, updateEmailInput, updateLabelPassword, updatePasswordInput, updateButton);

/* -- */
settingsForm.onsubmit = function(event) {
    event.preventDefault()

    var newName = updateNameInput.value
    var newPassword = updatePasswordInput.value
    var newEmail = updateEmailInput.value
        
    var result = updateUserEmail(user.email, newEmail)

    if (result instanceof Error) {
        alert(result.message)

        return
    }

    if ( newName === ""){
        newName = user.Name;
    } else{
            user.name = newName;
    };

    if ( newPassword === ""){
        newPassword = user.Password;
    } else{
            user.password = newPassword;
    };

    alert('Your changes have been applied')
    settingsForm.reset();
    homeMenuPanelUserName.innerText = user.name;
    homeSettingsTitle.innerText = user.name;
    homeSettingsSecondTitle.innerText = user.email;
}

/* ----------------------- */