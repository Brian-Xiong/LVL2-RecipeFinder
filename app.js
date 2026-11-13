renderHeader();


// TODO render the header and its buttons
function renderHeader() {
  // add event listener to the home button
  const homeBtn = document.getElementById("home-button");
  homeBtn.addEventListener("click", homeClick);

  // add event listener to the searchbutton
  const searchBtn = document.getElementById("search-button");
  searchBtn.addEventListener("click", searchClick);


  // add event listener to the all recipes button
  const allRecipesBtn = document.getElementById("all-recipes-button");
  allRecipesBtn.addEventListener("click", allRecipesClick);

}




function homeClick() { 
  window.location.href = `index.html`;
  console.log("HOME"); // DELETE THIS
}


function allRecipesClick() {
  window.location.href = `allRecipes.html?name=${recipeName}`;
  console.log("ALL RECIPE"); // DELETE THIS
}

function searchClick() {
  const recipeName = document.getElementById("search-input");
  window.location.href = `recipe.html?name=${recipeName}`;
  console.log("SEARCH"); // DELETE THIS
}




// TODO render the footer

// TODO add a contact form for the user to contact me

// TODO use media queries to make the recipe page responsive for mobile devices







