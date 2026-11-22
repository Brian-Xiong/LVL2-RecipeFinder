renderForm();

function renderForm() {
// add event listener to the send form button
  const homeBtn = document.getElementById("send-message-button");
  homeBtn.addEventListener("click", sendClick);



}

function sendClick() {
    event.preventDefault(); // stop the page from refreshing when submitting a form 

    const nameInput = document.getElementById("name-input").value.trim();
    const emailInput = document.getElementById("email-input").value.trim();
    const messageInput = document.getElementById("message-textarea").value.trim();


    // const display = document.getElementById("contact-form");
    // display.textContent = `There was an error retrieving the recipe: ${error.message}`;

// TODO add error handling if any of the textboxes are in an invalid format


    // add error handling if any of the textboxes are empty
    if (nameInput === "") {
        // if the field is empty, let the user know
        const nameLabel = document.getElementById("name-label");
        const errorDisplay = document.getElementById("name-error");

        errorDisplay.textContent = "The field cannot be empty";
        nameLabel.classList.add('error'); 
        return;
    }

    if (message === "") {
        // output to the user that one or more of the fields are empty

        console.log("The Message is empty"); // DELETE
        return;
    }

    // validate all fields
    if (email === "") {
        // output to the user that one or more of the fields are empty

        console.log("The email is empty"); // DELETE
        return;
    }

    // 2. Run checks on all required fields
    checkField('name', 'nameError', 'Please enter your name.');
    checkField('email', 'emailError', 'Please enter your email address.');
    checkField('message', 'messageError', 'Please write a message.');

    // for this project, I will store the submissions in localStorage
//    localStorage.setItem("message", JSON.stringify(__________________));
//     form.reset(); // Clears the fields in the form

    // display a confirmation message to the user
    console.log("Form was submitted");
}

function checkField(inputId, errorId, message) {
    const input = document.getElementById("name-label");
    const errorDisplay = document.getElementById(errorId);

    if (input.value.trim() === '') {
      errorDisplay.textContent = message;
      isValid = false;
    } else {
      input.classList.remove('error');
      errorDisplay.textContent = '';
    }
  }






