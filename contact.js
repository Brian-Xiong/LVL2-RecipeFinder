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
    const display = document.getElementById("recipe-name");
    display.textContent = `There was an error retrieving the recipe: ${error.message}`;

// TODO add error handling if any of the textboxes are in an invalid format


    // validate all fields
    if (name === "" || email === "" || message === "") {
        // output to the user that one or more of the fields are empty

        console.log("Name or email is not valid");
        return;
    }

    // for this project, I will store the submissions in localStorage
//    localStorage.setItem("message", JSON.stringify(__________________));

    // display a confirmation message to the user
    console.log("Form was submitted");
}






