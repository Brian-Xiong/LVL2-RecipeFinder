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
    
    const emailLabel = document.getElementById("email-label"); // get the email label in case the email is in an incorrect format
    const errorDisplay = document.getElementById("email-error");

    let isValid = true;

    // check if any of the textboxes are empty
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

    if (emailInput === "") {
        // tell the user this field is empty
        errorDisplay.textContent = "The field cannot be empty";

        // add error as a class so CSS can style it
        emailLabel.classList.add('error'); 
        isValid = false;
    } else {
        // check if the email is in a correct format
        if (!emailInput.includes("@")) {
            emailLabel.classList.add('error'); 
            errorDisplay.textContent = "invalid email format";
        }

        // TODO check for cases where the email is misspelled (EX: gmial.com | gmail.cm | gmail,com )








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






