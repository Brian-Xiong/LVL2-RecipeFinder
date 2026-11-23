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

  // add event listener to the all recipes button
  const contactBtn = document.getElementById("contact-button");
  contactBtn.addEventListener("click", contactClick);




} // TODO add event listener on the search bar to autocomplete

function homeClick() { 
  window.location.href = `index.html`;
}

function contactClick() {
  window.location.href = `contact.html`;
}

function allRecipesClick() {
  window.location.href = `allRecipes.html`;
} // TODO set up All Recipes page

function searchClick() {
  // TODO create an HTML page and JS page for a search results page



  const recipeName = document.getElementById("search-input");
  window.location.href = `recipe.html?name=${recipeName}`;
  console.log("SEARCH"); // DELETE THIS
} // TODO create a search results page

function autocomplete() {
  const input = document.getElementById("search-input").value;
  const searchList = document.getElementById("search-list");
  searchList.innerHTML = "";

  if (input === "") {
    // if the user deleted all the characters in the search box, return
    return;
  }

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
      // "list" returns a maximum of 25 items, but I think 25 items is too much.  So I will display a maximum of 10 items.
      // Use Math.min because sometimes the list length might be less thdn 10 and we don't want the lopo to run longer than the list length
      for (let i = 0; i < Math.min(list.meals.length, 10); i++) { 
        // create a card and add the random recipe's information
        const listItem = document.createElement("li");
        listItem.className = "search-recipe";
        listItem.id = "search-recipe";
        listItem.addEventListener("click", searchRecipeClick);

        let recipeName = list.meals[i].strMeal;

        // If the recipe name is too long, shorten the recipe name if its too long because it will be displayed on two lines
        if (list.meals[i].strMeal.length > 20) {
          recipeName = list.meals[i].strMeal.substring(0, 20) + "...";
        } 

        listItem.innerHTML =  `
          <div class="search-recipe-card">
            <div class="search-recipe-info">
              <h4 class="search-recipe-name">${recipeName}</h4>
              <h4 class="search-recipe-category">(${list.meals[i].strCategory})</h4>
            </div>
            <img id="search-recipe-image" src = ${list.meals[i].strMealThumb}>
          </div>
        `;

        // add the recipe name and recipe image to the card
        searchList.appendChild(listItem);
      } 
    })
    .catch((error) => { // This triggers when a promise anywhere earlier in this chain is rejected
      console.log(error.message);
      const display = document.getElementById("suggested-recipes");
      display.textContent = `There was an error searching recipes: ${error.message}`;
    }
  );
} 

function searchRecipeClick(event) {
  const recipeName = event.currentTarget.querySelector(".search-recipe-name").textContent; 
  window.location.href = `recipe.html?name=${encodeURIComponent(recipeName)}`;
} // TODO FIX 


// TODO render the footer

// TODO add a contact form for the user to contact me

// TODO use media queries to make the recipe page responsive for mobile devices







