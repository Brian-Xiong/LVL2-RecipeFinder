renderForm();

function renderForm() {
// add event listener to the send form button
  const homeBtn = document.getElementById("send-message-button");
  homeBtn.addEventListener("click", sendClick);
}

function sendClick() {
    event.preventDefault(); // stop the page from refreshing when submitting a form 
    document.getElementById("confirm")?.remove(); // remove any previous "message sent" messages 

    const nameInput = document.getElementById("name-input").value.trim();
    const emailInput = document.getElementById("email-input").value.trim();
    const messageInput = document.getElementById("message-textarea").value.trim();

    const nameLabel = document.getElementById("name-label");
    const nameErrorDisplay = document.getElementById("name-error");
    const emailLabel = document.getElementById("email-label");
    const emailErrorDisplay = document.getElementById("email-error");
    const messageLabel = document.getElementById("message-label");
    const messageErrorDisplay = document.getElementById("message-error");

    let isValid = true;

    // check if any of the textboxes are empty
    if (nameInput === "") {
        // tell the user this field is empty
        nameErrorDisplay.textContent = "The field cannot be empty";

        // add error as a class so CSS can style it
        nameLabel.classList.add('error'); 
        isValid = false;
    } else {
        nameLabel.classList.remove('error');
        nameErrorDisplay.textContent = "";
    }

    if (messageInput === "") {
        // tell the user this field is empty
        messageErrorDisplay.textContent = "The field cannot be empty";

        // add error as a class so CSS can style it
        messageLabel.classList.add('error'); 
        isValid = false;
    } else {
        messageLabel.classList.remove('error');
        messageErrorDisplay.textContent      = "";
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/ //use regex to ensure that the email is in the correct format
    if (emailInput === "") {
        // tell the user this field is empty
        emailErrorDisplay.textContent = "The field cannot be empty";

        // add error as a class so CSS can style it
        emailLabel.classList.add('error'); 
        isValid = false;
    } else if (!emailPattern.test(emailInput)) {
        // check if the email is in a correct format 
        emailErrorDisplay.textContent = "The email is in an invalid format";
        emailLabel.classList.add('error');
        isValid = false;
    } else {
        emailLabel.classList.remove('error');
        emailErrorDisplay.textContent = "";
    }

    // if any of the fields are empty, return and tell the user
    if (!isValid) {
        return;
    }


}








