renderForm();

function renderForm() {
// add event listener to the send form button
  const homeBtn = document.getElementById("send-message-button");
  homeBtn.addEventListener("click", sendClick);



}

function sendClick() {
    event.preventDefault(); // stop the page from refreshing when submitting a form 

    const name = document.getElementById("name-input").value.trim();
    const email = document.getElementById("email-input").value.trim();
    const message = document.getElementById("message-textarea").value.trim();

    
    
// TODO add error handling if any of the textboxes are empty 
    const display = document.getElementById("contact-form");
    display.textContent = `There was an error retrieving the recipe: ${error.message}`;

// TODO add error handling if any of the textboxes are in an invalid format


    // validate all fields
    if (name === "" || email === "" || message === "") {
        // output to the user that one or more of the fields are empty

        console.log("Name or email is not valid");
        return;
    }

    // 2. Run checks on all required fields
    checkField('name', 'nameError', 'Please enter your name.');
    checkField('email', 'emailError', 'Please enter your email address.');
    checkField('message', 'messageError', 'Please write a message.');

    // for this project, I will store the submissions in localStorage
//    localStorage.setItem("message", JSON.stringify(__________________));

    // display a confirmation message to the user
    console.log("Form was submitted");
}

function checkField(inputId, errorId, message) {
    const input = document.getElementById(inputId);
    const errorDisplay = document.getElementById(errorId);

    // .trim() removes accidental spaces before/after text
    if (input.value.trim() === '') {
      input.classList.add('error');
      errorDisplay.textContent = message;
      isValid = false;
    } else {
      input.classList.remove('error');
      errorDisplay.textContent = '';
    }
  }






