renderHeader();


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

  const input = document.getElementById("search-input");
  input.addEventListener("input", autocomplete); // whenever the user inputs or deletes from the searchbar, display relevant recipes





} // TODO add event listener on the search bar to autocomplete

function homeClick() { 
  window.location.href = `index.html`;
}


function allRecipesClick() {
  window.location.href = `allRecipes.html`;
} // TODO set up All Recipes page

function searchClick() {
  // TODO create an HTML page and JS page for a search results page



  const recipeName = document.getElementById("search-input");
  window.location.href = `recipe.html?name=${recipeName}`;
  console.log("SEARCH"); // DELETE THIS
}

function autocomplete() {
  const input = document.getElementById("search-input").value;
  console.log(input); // DELETE THIS

  // Use this URL to search for the results in the searchbar using FETCH
  const recipeList = `https://www.themealdb.com/api/json/v1/1/search.php?s=${input}`;
  fetch(recipeList)
    .then((response) => { 
      if (!response.ok) { 
        throw new Error("Couldn't find any recipes"); 
      }
      return response.json();
    })
    .then((list) => {
      const searchList = document.getElementById("search-list");
console.log(list); // DELETE THIS

//UNCOMMENT       for (let i = 0; i < 4; i++) {
      // create a card and add the random recipe's information
      const listItem = document.createElement("li");
      listItem.className = "search-recipe";
      listItem.id = "search-recipe";
      listItem.addEventListener("click", searchRecipeClick);

// TODO shorten the recipe name if its too long, otherwise it will be displayed on two lines
// EX: searching "." will return "Dulce de Leche Cheesecake with a Maria Cookie Crust. (Dessert)"




      listItem.innerHTML =  `
        <div class="search-recipe-card">
          <h4 class="search-recipe-name">${list.meals[0].strMeal} (${list.meals[0].strCategory})</h4>
          <img id="search-recipe-image" src = ${list.meals[0].strMealThumb}>
        </div>
      `;

      // add the recipe name and recipe image to the card
      searchList.appendChild(listItem);
//UNCOMMENT    } //
    })
    .catch((error) => { // This triggers when a promise anywhere earlier in this chain is rejected
      console.log(error.message);
      const display = document.getElementById("suggested-recipes");
      display.textContent = `There was an error searching recipes: ${error.message}`;
    }
  );


  // display the results in the drop down



  //  if NO results, don't show dropdown




  // When recipe inside dropdown is clicked, go to recipe page with clicked recipe information



} // TODO fix the recipe name if it is too many characters, because then the recipe name will be 2 lines


function searchRecipeClick(event) {
  const recipeName = event.currentTarget.querySelector(".search-recipe-name").textContent;
  window.location.href = `recipe.html?name=${encodeURIComponent(recipeName)}`;
}


// TODO render the footer

// TODO add a contact form for the user to contact me

// TODO use media queries to make the recipe page responsive for mobile devices







