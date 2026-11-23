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
    let isValid = true;

    // add error handling if any of the textboxes are empty
    if (nameInput === "") {
        const label = document.getElementById("name-label");
        const errorDisplay = document.getElementById("name-error");

        // tell the user this field is empty
        errorDisplay.textContent = "The field cannot be empty";

        // add error as a class so CSS can style it
        label.classList.add('error'); 
        isValid = false;
    }

    if (messageInput === "") {
        const label = document.getElementById("message-label");
        const errorDisplay = document.getElementById("message-error");

        // tell the user this field is empty
        errorDisplay.textContent = "The field cannot be empty";

        // add error as a class so CSS can style it
        label.classList.add('error'); 
        isValid = false;
    }

    // validate all fields
    if (emailInput === "") {
        // output to the user that one or more of the fields are empty
        const label = document.getElementById("email-label");
        const errorDisplay = document.getElementById("email-error");
    console.log("email");

        // tell the user this field is empty
        errorDisplay.textContent = "The field cannot be empty";

        // add error as a class so CSS can style it
        label.classList.add('error'); 
        isValid = false;
    }

    // if any of the fields are empty, return and tell the user
    if (!isValid) {
        
        
        return;
    }


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






