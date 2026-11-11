// This is the data I get from: https://www.themealdb.com/api/json/v1/1/search.php?f=a
// it is a JSON Object

// wire up the search button to connect the index page to the recipe page with fetchRecipe
document.getElementById("search-button").addEventListener("click", handleSearchClick);

function handleSearchClick() {
  const searchInput = document.getElementById("search-input");
  const searchTerm = searchInput.value.trim();

  if (searchTerm !== "") {
    // open up the search results page with the corresponding recipe



  } else {
    alert("Please enter a recipe to search for.");
  }
}








//fetchRecipe("https://www.themealdb.com/api/json/v1/1/search.php?s=asado"); // DELETE THIS.  TODO REPLACE THIS WITH THE RECIPE NAME FROM THE URL PARAMETER

let recentlyViewedArray = [];

// fetch the recipe so we can display it on the page
function fetchRecipe(url) {
  fetch(url)
    .then((response) => { // ensure we are able to get a response from the API
      if (!response.ok) { // response.ok checks whether the HTTP status code indicates success (200–299)
        throw new Error("Couldn't load recipe"); // creates an error and rejects the promise chain, skipping the remaining code in this .then() callback
      }
      return response.json();
    })

    // this will run as long as the previous .then() is successful
    .then((recipe) => {
      renderRecipe(recipe.meals[0]); // put the recipe information on the page
      renderRecommended(recipe.meals[0]); // put list of recommended recipes on the page
      renderRecentlyViewed(); // put list of recently viewed recipes on the page
      saveRecipe(recipe.meals[0].idMeal);; // Save this recipe to local storage so we can later display it on the recently viewed list
    })
    .catch((error) => { // This triggers when a promise anywhere earlier in this chain is rejected
      const display = document.getElementById("recipe-name");
      display.textContent = `There was an error retrieving the recipe: ${error.message}`;
    }
  );
} 

function renderRecipe(recipe) {
  // Set Recipe Name
  const recipeName = document.getElementById("recipe-name");
  recipeName.textContent = recipe.strMeal;

  // Set Recipe Tags
  const recipeTags = document.getElementById("recipe-tags");
  if (recipe.strTags === null || recipe.strTags === "") {
      // TODO if recipeTags is null.......do something, IDK what to do yet
      recipeTags.textContent = "Recipe Tags: None"; 
  } else {
      recipeTags.textContent = "Recipe Tags: " + recipe.strTags; // I could put a space in between each ,
  }

  // Get Recipe Picture
  const recipeImage = document.getElementById("recipe-image");
  recipeImage.src = recipe.strMealThumb;

  // loop through the key value pairs and add the values to the ingredientsList
  createIngredients(recipe);

  let stringArray = recipe.strInstructions; 
  createInstructions(stringArray);
} // Any TODO's?

function createIngredients(recipe) {
  const ingredientsList = document.getElementById("ingredients-list");
  ingredientsList.innerHTML = "";
  for (let i = 1; i <= 20; i++) {
    let ingredient = recipe[`strIngredient${i}`];
    if (ingredient === "") {
        break; // if there are no more ingredients, stop looping
    }

    // concatenate the current ingredient and current measurement together
    ingredient = `${recipe[`strMeasure${i}`]} ${ingredient}`;
    
    const listItem = document.createElement("li");
    listItem.className = "recipe-ingredient";
    listItem.textContent = ingredient;

    // add the ingredient WITH its measurement to the page
    ingredientsList.appendChild(listItem);
  }
} // TODO check for the case when there are a lot of ingredients and the list is too long for the page.  Up to 20 ingredients total...so maybe have 4 columns of ingredients with 5 ingredients in each column.

function createInstructions(stringArray) {
  const colonIndexes = []; // this will hold the indexes of all the colons to slice the string
  const periodIndexes = []; // this will hold the indexes of all the periods right before a semi-colon appears
  const recipeArray = []; // this will hold our array of objects [(Step, Instruction), (Step, Instruction), ... ]
  const instructionsList = document.getElementById("instructions-list");
  instructionsList.innerHTML = ""; 


  if (stringArray.includes(":")) {
    // if the step and instruction are separated by a semicolon then get the indexes of all the colons
    for (let i = 0; i < stringArray.length; i++) {
      // keep track of the indexes of each of the semi-colons so that we can split the steps in the recipe 
      if (stringArray[i] === ':') {
        colonIndexes.push(i);
      }
   }

    // search through the string and filter the step from the instruction
    for (let i = 0; i < colonIndexes.length; i++) {
      let instructionStep = "";
      let instructionString = "";
      
      // this if statement takes care of the case when this is the first iteration, then get the first step
      if (i === 0) {
        instructionStep = stringArray.substring(0, colonIndexes[0]); // first step will be from index 0 to the index of the first colon (aka colonIndexes[0])

        // get the index of the last period for our current step, so that the next step knows where to start
        const lastPeriod = stringArray.substring(0, colonIndexes[i + 1]);
        periodIndexes.push(lastPeriod.lastIndexOf(".") - 1); 

        instructionString = stringArray.substring(2, colonIndexes[1]); // create a new substring using from index 2 (index 0 and 1 are ": ") to the next semi-colon
        instructionString = instructionString.substring(colonIndexes[0], instructionString.lastIndexOf(".")); // using this subtring, cut out everything after the last period
      } else {
        instructionStep = stringArray.substring(periodIndexes[i-1] + 3, colonIndexes[i]); // next step will be from the previous period to the next semi-colon (use +3 because we want the index after ".  ")

        // get the index of the last period for our current step, so that the next step knows where to start      
        const lastPeriod = stringArray.substring(0, colonIndexes[i + 1]);
        periodIndexes.push(lastPeriod.lastIndexOf(".") - 1); // get the index of the last period for this step, so that we have an anchor point for the next step

        instructionString = stringArray.substring(colonIndexes[i], colonIndexes[i+1]); // create a new substring  to the next semi-colon
        instructionString = instructionString.substring(1, instructionString.lastIndexOf(".")); // start from index 1 (index 0 is ":") and cut out everything after the last period
      }

      const step = {
        step: instructionStep.trim(),
        instruction: instructionString.trim()
      };

      recipeArray.push(step);
    }
  } else if (stringArray.includes("\r\n")) {
    // if the step and instuction is separated by \r\n then each string between \r\n is its own instuction
    const array = stringArray.split(/(?:\r?\n)+/);

    for (let i = 0; i < array.length; i++) {
      const step = {
        step: `Step ${i + 1}`,
        instruction: array[i]
      };

      recipeArray.push(step);
    }

    console.log(recipeArray);
  } else {
    console.log("Instructions DOES NOT CONTAIN ANYTHING");
  }  



  for (let i = 0; i < recipeArray.length; i++) {
   // create a card and add the recipe's step and instruction
    const listItem = document.createElement("li");
    listItem.className = "recipe-instructions";

    listItem.innerHTML =  `
        <p class="recipe-step" >${recipeArray[i].step}</p>
        <p class="recipe-instruction">${recipeArray[i].instruction}</p>
        <br>
    `; // TODO style the recipe step and instruction to look like a card

    // add the recipe step and instruction to the page
    instructionsList.appendChild(listItem);
  }
} // TODO check for the case when the instruction steps are in organized by numbers, \r\n

function renderRecommended(recipe) {
  // this function will display up to four recipes that share the same category
  const recipeListsByCategory = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${recipe.strCategory}`;
  const array = [recipe.idMeal]; // this array will hold our references to our current recipe and related recipes.  We will check against this array to ensure we don't find any duplicate recipes

  fetch(recipeListsByCategory)
    .then((response) => { 
      if (!response.ok) { 
        throw new Error("Couldn't find any recommended recipes"); 
      }
      return response.json();
    })
    .then((list) => {
      // randomly find 4 recipes from our total list of recommended recipes by category
      const recommendedRecipesList = document.getElementById("recommended-recipes-list");
      recommendedRecipesList.innerHTML = "";

      for (let i = 0; i < 4; i++) {
        const targetedIndex = Math.floor(Math.random() * list.meals.length); 

        // check to make sure that we don't have any duplicate recipe's based on the propety: idMeal
        if (array.includes(list.meals[targetedIndex].idMeal)) { 
          i--; // if there is a duplicate, randomize again and check if this new recipe is in the array again
          continue;
        }
        array.push(list.meals[targetedIndex].idMeal);

        // create a card and add the random recipe's information
        const listItem = document.createElement("li");
        listItem.className = "recommended-recipe";
        listItem.id = "recommended-recipe";
        listItem.addEventListener("click", recommendedRecipeClick);

        listItem.innerHTML =  `
          <div class="recommended-recipe-card">
            <h4 class="recommended-recipe-name">${list.meals[targetedIndex].strMeal}</h4>
            <img id="recommended-recipe-image" src = ${list.meals[targetedIndex].strMealThumb}>
          </div>
        `;

        // add the recipe name and recipe image to the card
        recommendedRecipesList.appendChild(listItem);
      }
    })
    .catch((error) => { // This triggers when a promise anywhere earlier in this chain is rejected
      const display = document.getElementById("recommended-recipes");
      display.textContent = `There was an error retrieving recommended recipes: ${error.message}`;
    }
  );
} 

function recommendedRecipeClick(event) {
  const recipeName = event.currentTarget.querySelector(".recommended-recipe-name").textContent;
  fetchRecipe(`https://www.themealdb.com/api/json/v1/1/search.php?s=${recipeName}`);
}

function renderRecentlyViewed() {
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
}  // TODO WHen rendering the recently viewed section, the recipe cards sometimes rearrange???

function recentlyViewedRecipeClick(event) {
  const recipeName = event.currentTarget.querySelector(".recently-viewed-recipe-name").textContent;
  fetchRecipe(`https://www.themealdb.com/api/json/v1/1/search.php?s=${recipeName}`);
}

function saveRecipe(idMeal) {
  // to avoid duplicates in recently viewed section.  Check if the current recipe is already in the recently viewed list, don't need to store it into local storage again
  if (recentlyViewedArray.includes(idMeal)) {
    return;
  }

  // Save this recipe to local storage so we can later display it on the recently viewed list
  recentlyViewedArray.push(idMeal);

  if (recentlyViewedArray.length > 4) {
    recentlyViewedArray.shift(); // remove the first element if the array length is greater than 4
  } 

  // Save the updated array to local storage
  localStorage.setItem("recentlyViewed", JSON.stringify(recentlyViewedArray));
}



// TODO add a contact form for the user to contact me

// TODO use media queries to make the recipe page responsive for mobile devices




// TODO what do I do for these recipe because the instructions are not organized by colons or numbers.  
// I will have to figure out a way to separate the steps and instructions for this recipe.  
// Maybe I can use the indexOf() method to find the indexes of the periods and then use those indexes to slice the string into an array of strings.  
// Then I can loop through the array and create a card for each step and instruction.  
// Beef Bourguignon
// Pate Chinois
// Big Mac
// Red Peas Soup
// Satee

// These instructions are separated by periods:
// Beef and Mustard Pie 
// Oxtail with broad beans
// ^ Maybe I can just cut by periods

// These instructions are separated by: \r\n
// Mulukhiyah

// This recipe has a : then a lot of \r\n\r\n\r\n
// Beef_Banh_mi 

// These instructions are separated by: \r\n 
// Belgian Meatballs

// This recipe's first step is too long and the string is being hidden behind the recipe image
// Algerian%20Kefta

// This recipe has: Step 1 \r\n Instruction \r\n Step 2...
// Portuguese%20prego

// the ingredients for "Beef stroganoff" are null for some reason


