// wire up the search button to connect the index page to the recipe page with fetchRecipe
document.getElementById("search-button").addEventListener("click", handleSearchClick);
renderSuggestedRecipes(); // get the user started with 4 random recipes

function handleSearchClick() {
  const searchInput = document.getElementById("search-input");
  const searchTerm = searchInput.value.trim();

  console.log("Click");
  if (searchTerm !== "") {
    // open up the search results page with the corresponding recipe

    // link to search results page


  } else {
    // if the search bar is empty, let the user know
    alert("Please enter a recipe to search for.");
  }
}

async function renderSuggestedRecipes() {
  // make 4 api calls asynchronously 
  await Promise.all([
    fetchRandomRecipe(`https://www.themealdb.com/api/json/v2/1/randomselection.php`),
    fetchRandomRecipe(`https://www.themealdb.com/api/json/v2/1/randomselection.php`),
    fetchRandomRecipe(`https://www.themealdb.com/api/json/v2/1/randomselection.php`),
    fetchRandomRecipe(`https://www.themealdb.com/api/json/v2/1/randomselection.php`)
  ]);
}

function fetchRandomRecipe () {
  const recipeList = `https://www.themealdb.com/api/json/v2/1/randomselection.php`;
  fetch(recipeList)
    .then((response) => { 
      if (!response.ok) { 
        throw new Error("Couldn't find any suggested recipes"); 
      }
      return response.json();
    })
    .then((list) => {
      const suggestedRecipesList = document.getElementById("suggested-recipes-list");

      // create a card and add the random recipe's information
      const listItem = document.createElement("li");
      listItem.className = "suggested-recipe";
      listItem.id = "suggested-recipe";
      listItem.addEventListener("click", suggestedRecipeClick);

      listItem.innerHTML =  `
        <div class="suggested-recipe-card">
          <h4 class="suggested-recipe-name">${list.meals[0].strMeal}</h4>
          <img id="suggested-recipe-image" src = ${list.meals[0].strMealThumb}>
        </div>
      `;

      // add the recipe name and recipe image to the card
      suggestedRecipesList.appendChild(listItem);
      
    })
    .catch((error) => { // This triggers when a promise anywhere earlier in this chain is rejected
      console.log(error.message);
      const display = document.getElementById("suggested-recipes");
      display.textContent = `There was an error retrieving suggested recipes: ${error.message}`;
    }
  ); 
} // TODO handle any duplicate recipes


function suggestedRecipeClick(event) {
    const recipeName = event.currentTarget.querySelector(".suggested-recipe-name").textContent;
    window.location.href = `recipe.html?name=${encodeURIComponent(recipeName)}`;

//  fetchRecipe(`https://www.themealdb.com/api/json/v1/1/search.php?s=${recipeName}`);
}








