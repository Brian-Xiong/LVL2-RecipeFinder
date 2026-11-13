// wire up the search button to connect the index page to the recipe page with fetchRecipe
renderSuggestedRecipes(); // get the user started with 4 random recipes
renderRecantlyViewed();

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
}

function renderRecantlyViewed() {
    const recentlyViewedArray = JSON.parse(localStorage.getItem("recentlyViewed"));

    if (recentlyViewedArray.length === 0 ) {
        return; // don't need to update the section if there are no recently viewed recipes, or if the current recipe is already in the recently viewed list
    }
  // otherwise display the recently viewed recipes on the page
  const recentlyViewed = document.getElementById("recently-viewed-recipes-list");
  recentlyViewed.innerHTML = "";
  for (let i = 0; i < recentlyViewedArray.length; i++) {
    // get the recipe information from the API for each of the recipes
    const recipeUrl = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recentlyViewedArray[i]}`;

    fetch(recipeUrl)
      .then((response) => { 
        if (!response.ok) { 
          throw new Error("Couldn't find any recently viewed recipes"); 
        }
        return response.json();
      })
      .then((recipe) => {
        // create a card and add the recipe's information
        const listItem = document.createElement("li");
        listItem.className = "recently-viewed-recipe";
        listItem.id = "recently-viewed-recipe";
        listItem.addEventListener("click", recentlyViewedRecipeClick); // add an event listener to the card so that when it is clicked, we can pull up that recipe

        listItem.innerHTML =  `
          <div class="recently-viewed-recipe-card">
            <h4 class="recently-viewed-recipe-name">${recipe.meals[0].strMeal}</h4>
            <img id="recently-viewed-recipe-image" src = ${recipe.meals[0].strMealThumb}>
          </div>
        `;

        // add the recipe name and recipe image to the card
        recentlyViewed.appendChild(listItem);
      })
      .catch((error) => { // This triggers when a promise anywhere earlier in this chain is rejected
        const display = document.getElementById("recently-viewed-recipes");
        display.textContent = `There was an error retrieving recently viewed recipes: ${error.message}`;
      }
    ); 
  }
}

function recentlyViewedRecipeClick(event) {
    const recipeName = event.currentTarget.querySelector(".recently-viewed-recipe-name").textContent;
    window.location.href = `recipe.html?name=${encodeURIComponent(recipeName)}`;
}



