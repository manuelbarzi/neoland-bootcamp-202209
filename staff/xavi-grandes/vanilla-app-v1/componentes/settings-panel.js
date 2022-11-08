const settingsPanel = document.createElement("section");
settingsPanel.className = "setting-panel";

const settingsPanelContainer = document.createElement("section");
settingsPanelContainer.className = "panel-form-settings";

const settingsTitle = document.createElement("h2");
settingsTitle.innerText = "Settings";

const settingsline = document.createElement("hr");

const settingsText = document.createElement("p");
settingsText.className = "settings-intro";
settingsText.innerText = "Change your data profile";

const settingsEmailForm = document.createElement("form");

settingsEmailForm.onsubmit = function (event) {
  event.preventDefault();

  const newEmail = settingsEmailInput.value;

  try {
    updateUserEmail(user.email, newEmail);
    alert("E-mail updated");
  } catch (error) {
    alert(error.message);
  }
}

const settingsEmailLabel = document.createElement("label");
settingsEmailLabel.htmlFor = "E-mail";
settingsEmailLabel.innerText = "E-mail";

const settingsEmailInput = document.createElement("input");
settingsEmailInput.id = "E-mail";
settingsEmailInput.type = "email";
settingsEmailInput.placeholder = "Input your e-mail";
settingsEmailInput.value = " ";

const settingsPasswordLabel = document.createElement("label");
settingsPasswordLabel.htmlFor = "password";
settingsPasswordLabel.innerText = "password";

const settingsPasswordInput = document.createElement("input");
settingsPasswordInput.id = "password";
settingsPasswordInput.type = "password";
settingsPasswordInput.placeholder = "Input your new password";
settingsPasswordInput.value = " ";

const settingFormButton = document.createElement("button");
settingFormButton.innerText = "Save";

settingsEmailForm.append(
  settingsTitle,
  settingsline,
  settingsText,
  settingsEmailLabel,
  settingsEmailInput,
  settingsPasswordLabel,
  settingsPasswordInput,
  settingFormButton
);

settingsPanelContainer.append(settingsEmailForm);

settingsPanel.append(settingsPanelContainer);
