// This is the data I get from: https://www.themealdb.com/api/json/v1/1/search.php?f=a
// it is a JSON Object
const testData = {
  "meals": [
    {
      "idMeal": "53483",
      "strMeal": "Acaraje black-eyed pea fritters with shrimp filling",
      "strMealAlternate": null,
      "strCategory": "Seafood",
      "strArea": null,
      "strCountry": "Brazil",
      "strInstructions": "step 1\r\nMake the filling by placing the onion, ginger, garlic, chilli, and some salt into food processor. Purée until smooth. Heat the oil in a frying pan and pour the purée into it. Fry for 5 mins or until cooked through. Add the prawns, tomatoes and chopped coriander. Squeeze in the lime and add salt to taste. Cook for 3 mins, or until the prawns have cooked through. Remove from the heat.\r\n\r\nstep 2\r\nDrain and rinse the black-eyed peas. Pour into a food processor with the garlic and chili. Purée until smooth. Scrape into a bowl and add the onion, flour, salt, chilli powder and baking powder. Mix and roll into 16 balls.\r\n\r\nstep 3\r\nHeat the oven to 190C/170C fan/gas 5. Heat 8cm of the palm or vegetable oil in a wok or small heavy pan. When a small piece of bread sizzles, drop 4-5 balls into the oil. Fry until golden and crisp, about 4-5 mins. Drain on kitchen paper and repeat until they are all finished. You can keep them warm in the oven while you finish. Slice the fritters open down the centre and spoon the prawn filling in. Serve with hot sauce.",
      "strMealThumb": "https://www.themealdb.com/images/media/meals/dxs5t71782678369.jpg",
      "strTags": "Vegetarian",
      "strYoutube": "",
      "strIngredient1": "Black Eyed Peas",
      "strIngredient2": "Garlic",
      "strIngredient3": "Green Chilli",
      "strIngredient4": "Red Onions",
      "strIngredient5": "Plain Flour",
      "strIngredient6": "Salt",
      "strIngredient7": "Chilli Powder",
      "strIngredient8": "Baking Powder",
      "strIngredient9": "Vegetable Oil",
      "strIngredient10": "Red Onions",
      "strIngredient11": "Ginger",
      "strIngredient12": "Garlic",
      "strIngredient13": "Red Chilli",
      "strIngredient14": "Raw tiger prawns",
      "strIngredient15": "Vegetable Oil",
      "strIngredient16": "Plum Tomatoes",
      "strIngredient17": "Coriander",
      "strIngredient18": "Lime",
      "strIngredient19": "",
      "strIngredient20": "",
      "strMeasure1": "800g",
      "strMeasure2": "1 clove",
      "strMeasure3": "1",
      "strMeasure4": "1 small finely diced",
      "strMeasure5": "2 tablespoons",
      "strMeasure6": "1 tsp",
      "strMeasure7": "1 tsp",
      "strMeasure8": "1 tsp",
      "strMeasure9": "For frying",
      "strMeasure10": "1 sliced",
      "strMeasure11": "1 tablespoon chopped",
      "strMeasure12": "2 cloves",
      "strMeasure13": "1 chopped",
      "strMeasure14": "150g",
      "strMeasure15": "1 tablespoon",
      "strMeasure16": "2",
      "strMeasure17": "1 tablespoon chopped",
      "strMeasure18": "Juice of 1",
      "strMeasure19": "",
      "strMeasure20": "",
      "strSource": "https://www.bbcgoodfood.com/recipes/caraje-black-eyed-pea-fritters-shrimp-filling",
      "strImageSource": null,
      "strCreativeCommonsConfirmed": null,
      "dateModified": "2026-06-28 21:24:02"
    },
    {
      "idMeal": "53527",
      "strMeal": "Achiote Oil (Aceite Achiotado) Recipe",
      "strMealAlternate": null,
      "strCategory": "Miscellaneous",
      "strArea": null,
      "strCountry": "Colombia",
      "strInstructions": "Heat the vegetable or olive oil and Achiote seeds in a small skillet over medium heat for about 2 to 3 minutes.\r\nDon't let the seeds turn black. Remove the skillet from the heat and let stand for 5 minutes more. Strain the oil and store for up to 15 days at room temperature in a jar with a tight lid.",
      "strMealThumb": "https://www.themealdb.com/images/media/meals/iuws3q1783801530.jpg",
      "strTags": "Vegetarian",
      "strYoutube": "",
      "strIngredient1": "Vegetable Oil",
      "strIngredient2": "Achiote Seeds",
      "strIngredient3": "",
      "strIngredient4": "",
      "strIngredient5": "",
      "strIngredient6": "",
      "strIngredient7": "",
      "strIngredient8": "",
      "strIngredient9": "",
      "strIngredient10": "",
      "strIngredient11": "",
      "strIngredient12": "",
      "strIngredient13": "",
      "strIngredient14": "",
      "strIngredient15": "",
      "strIngredient16": "",
      "strIngredient17": "",
      "strIngredient18": "",
      "strIngredient19": "",
      "strIngredient20": "",
      "strMeasure1": "2 cups",
      "strMeasure2": "4 tablespoons",
      "strMeasure3": "",
      "strMeasure4": "",
      "strMeasure5": "",
      "strMeasure6": "",
      "strMeasure7": "",
      "strMeasure8": "",
      "strMeasure9": "",
      "strMeasure10": "",
      "strMeasure11": "",
      "strMeasure12": "",
      "strMeasure13": "",
      "strMeasure14": "",
      "strMeasure15": "",
      "strMeasure16": "",
      "strMeasure17": "",
      "strMeasure18": "",
      "strMeasure19": "",
      "strMeasure20": "",
      "strSource": "https://www.mycolombianrecipes.com/achiote-oil-aceite-de-achiote/#recipe",
      "strImageSource": null,
      "strCreativeCommonsConfirmed": null,
      "dateModified": "2026-07-11 21:23:55"
    },
    {
      "idMeal": "53262",
      "strMeal": "Adana kebab",
      "strMealAlternate": null,
      "strCategory": "Lamb",
      "strArea": "Turkish",
      "strCountry": "Turkey",
      "strInstructions": "step 1\r\nFinely chop the peppers in a food processor, then tip them in a sieve and press into the sieve so that the peppers release all of their juices. Tip into a bowl along with the mince, red pepper paste, pul biber, 1½ tsp flaky sea salt, and 2 tbsp of the oil. Mix together, kneading well for at least 2-3 mins. If you need to, wet your hands with cold water to prevent the mixture from sticking. The mixture should be sticky when ready. Cover and chill for at least 2 hrs, or up to 12 hrs.\r\n\r\nstep 2\r\nWhen ready to cook, heat the grill to high or an oven to 220C/200C fan/gas 6. Divide the mixture into 12 equal portions, around 85g each. If you’d like to skewer them, divide into 8 equal portions and roll into balls. Using wet hands, thread the balls onto the end of the skewers, massaging the mixture down the skewers in between the palms of your hands, until evenly distributed. Ensure that the mixture is fully wrapped tightly around the skewers without any exposed metal. Alternatively, lay them on a large baking tray lined with parchment paper if cooking in the oven, or foil if cooking under the grill. Shape into 20cm-long köfte. Wet your fingers with a little cold water and make indents all along the köfte for the traditional shape.\r\n\r\nstep 3\r\nGently brush each köfte with the remaining 1 tbsp oil and cook under the grill, on the top shelf for 10-12 mins, turning regularly, or cook in the oven for 16-18 mins, until crispy on the outside and juicy in the middle",
      "strMealThumb": "https://www.themealdb.com/images/media/meals/04axct1763793018.jpg",
      "strTags": null,
      "strYoutube": "https://www.youtube.com/watch?v=Wj7sXu9B_ME",
      "strIngredient1": "Romano Pepper",
      "strIngredient2": "Lamb Mince",
      "strIngredient3": "Red Pepper Paste",
      "strIngredient4": "Pul Biber",
      "strIngredient5": "Sunflower Oil",
      "strIngredient6": "",
      "strIngredient7": "",
      "strIngredient8": "",
      "strIngredient9": "",
      "strIngredient10": "",
      "strIngredient11": "",
      "strIngredient12": "",
      "strIngredient13": "",
      "strIngredient14": "",
      "strIngredient15": "",
      "strIngredient16": "",
      "strIngredient17": "",
      "strIngredient18": "",
      "strIngredient19": "",
      "strIngredient20": "",
      "strMeasure1": "2 large",
      "strMeasure2": "800g",
      "strMeasure3": "3  tablespoons",
      "strMeasure4": "1 tablespoon",
      "strMeasure5": "3  tablespoons",
      "strMeasure6": " ",
      "strMeasure7": " ",
      "strMeasure8": " ",
      "strMeasure9": " ",
      "strMeasure10": " ",
      "strMeasure11": " ",
      "strMeasure12": " ",
      "strMeasure13": " ",
      "strMeasure14": " ",
      "strMeasure15": " ",
      "strMeasure16": " ",
      "strMeasure17": " ",
      "strMeasure18": " ",
      "strMeasure19": " ",
      "strMeasure20": " ",
      "strSource": "https://www.bbcgoodfood.com/recipes/adana-kebab",
      "strImageSource": null,
      "strCreativeCommonsConfirmed": null,
      "dateModified": "2025-11-22 06:28:49"
    },
    {
      "idMeal": "53373",
      "strMeal": "Air Fryer Egg Rolls",
      "strMealAlternate": null,
      "strCategory": "Side",
      "strArea": "Chinese",
      "strCountry": "China",
      "strInstructions": "Alternative Pan Fry Method: If you don’t have access to an air fryer, you can make these egg rolls using a traditional pan fry method. Add enough oil to a medium skillet with high walls so the oil is about 1/2 inch up the side of the skillet. Heat oil on medium high heat until it reaches 350°F. Add egg rolls and fry for 3 to 4 minutes, flip, and fry for another 3 to 4 minutes until golden brown. Remove and let them drain and cool on a few paper towels.\r\n\r\nCook the filling:\r\nIn a large skillet over medium heat, add the olive oil along with the ground pork or chicken. Break apart the meat with a spatula or wooden spoon as it cooks. Cook until the meat is cooked through, 6 to 8 minutes.\r\n\r\nAdd garlic, ginger, carrot, scallions, and cabbage. Continue to cook until cabbage wilts down and is soft, another 3 to 4 minutes, stirring regularly. Season the filling with soy sauce and rice wine vinegar, and take off the heat to cool. (This filling can be made in advance.)\r\n\r\nAssemble the egg rolls:\r\nPlace a single egg roll wrapper on a dry surface with one point of the square facing you (like a diamond). Place about 1/4 cup of the egg roll filling mixture in the middle of the wrapper.\r\n\r\nDip your fingers in water and run around the edges of the wrapper. Then fold the edges of the wrapper over the center and start rolling the egg roll away from you to form a tight cylinder. Place on a plate and repeat until you are out of filling. You should get at least a dozen egg rolls.\r\n\r\nAir fry the egg rolls:\r\nPlace the egg rolls in the basket of your air fryer. Spray or brush them lightly with oil. Add as many as you can without stacking the egg rolls, making sure they don’t touch. Air needs to circulate around them. Brush the egg rolls lightly with oil.\r\n\r\nPlace the basket in the air fryer and turn the air fryer to 350°F. Cook for 6 to 7 minutes, then flip the egg rolls, spray or brush with oil a second time on the bottom side, and cook for another 4 to 5 minutes.\r\n\r\nFinished egg rolls should be golden brown and crispy! Serve immediately.",
      "strMealThumb": "https://www.themealdb.com/images/media/meals/grhn401765687086.jpg",
      "strTags": null,
      "strYoutube": "https://www.youtube.com/watch?v=XnA-wcVb4l0",
      "strIngredient1": "Olive Oil",
      "strIngredient2": "Ground Pork",
      "strIngredient3": "Garlic",
      "strIngredient4": "Ginger",
      "strIngredient5": "Carrots",
      "strIngredient6": "Scallions",
      "strIngredient7": "Cabbage",
      "strIngredient8": "Soy Sauce",
      "strIngredient9": "Rice Vinegar",
      "strIngredient10": "Egg Roll Wrappers",
      "strIngredient11": "Oil",
      "strIngredient12": "Duck Sauce",
      "strIngredient13": "Plum Sauce",
      "strIngredient14": "Soy Sauce",
      "strIngredient15": "",
      "strIngredient16": "",
      "strIngredient17": "",
      "strIngredient18": "",
      "strIngredient19": "",
      "strIngredient20": "",
      "strMeasure1": "1 tablespoon",
      "strMeasure2": "1 lb",
      "strMeasure3": "1 clove peeled crushed",
      "strMeasure4": "1 tablespoon",
      "strMeasure5": "1 medium",
      "strMeasure6": "3 chopped",
      "strMeasure7": "3 Cups",
      "strMeasure8": "1 tablespoon",
      "strMeasure9": "1 tablespoon",
      "strMeasure10": "12",
      "strMeasure11": "For brushing",
      "strMeasure12": "To serve",
      "strMeasure13": "To serve",
      "strMeasure14": "To serve",
      "strMeasure15": " ",
      "strMeasure16": " ",
      "strMeasure17": " ",
      "strMeasure18": " ",
      "strMeasure19": " ",
      "strMeasure20": " ",
      "strSource": "https://www.simplyrecipes.com/recipes/air_fryer_chinese_egg_rolls/",
      "strImageSource": null,
      "strCreativeCommonsConfirmed": null,
      "dateModified": "2025-12-14 04:36:20"
    },
    {
      "idMeal": "53158",
      "strMeal": "Air fryer patatas bravas",
      "strMealAlternate": null,
      "strCategory": "Vegetarian",
      "strArea": "Spanish",
      "strCountry": "Spain",
      "strInstructions": "step 1\r\nSoak the potatoes in just-boiled water for 30 mins, then drain and leave to air-dry for 5 mins. Heat the air fryer to 200C. Tip the potatoes into a bowl and drizzle over 1 tbsp of the oil and add 1/2 tsp each of salt and freshly ground black pepper. Mix to coat the potatoes all over, then tip into the air fryer basket and cook for 20-30 mins until crisp and golden.\r\n\r\nstep 2\r\nMeanwhile, heat the remaining oil in a small pan over a medium-low heat and fry the onion for 8-10 mins until softened but not golden. Stir in the garlic and cook for a minute before adding the paprika and cooking for 30 seconds more. Stir in the tomato purée, cook for 1 min, then tip in the chopped tomatoes. Cook for 5-10 mins over a medium heat until thickened slightly.\r\n\r\nstep 3\r\nOnce the potatoes are cooked, tip out onto a platter and pour over the tomato sauce. Sprinkle with the basil leaves, then serve.",
      "strMealThumb": "https://www.themealdb.com/images/media/meals/3m8yae1763257951.jpg",
      "strTags": null,
      "strYoutube": "https://www.youtube.com/watch?v=kzLaw6PG2UY",
      "strIngredient1": "Potatoes",
      "strIngredient2": "Olive Oil",
      "strIngredient3": "Onion",
      "strIngredient4": "Garlic",
      "strIngredient5": "Paprika",
      "strIngredient6": "Tomato Puree",
      "strIngredient7": "Tinned Tomatos",
      "strIngredient8": "Basil Leaves",
      "strIngredient9": "",
      "strIngredient10": "",
      "strIngredient11": "",
      "strIngredient12": "",
      "strIngredient13": "",
      "strIngredient14": "",
      "strIngredient15": "",
      "strIngredient16": "",
      "strIngredient17": "",
      "strIngredient18": "",
      "strIngredient19": "",
      "strIngredient20": "",
      "strMeasure1": "900g",
      "strMeasure2": "3  tablespoons",
      "strMeasure3": "1 chopped",
      "strMeasure4": "1 clove peeled crushed",
      "strMeasure5": "1 tblsp ",
      "strMeasure6": "1 tblsp ",
      "strMeasure7": "225g",
      "strMeasure8": "To serve",
      "strMeasure9": " ",
      "strMeasure10": " ",
      "strMeasure11": " ",
      "strMeasure12": " ",
      "strMeasure13": " ",
      "strMeasure14": " ",
      "strMeasure15": " ",
      "strMeasure16": " ",
      "strMeasure17": " ",
      "strMeasure18": " ",
      "strMeasure19": " ",
      "strMeasure20": " ",
      "strSource": "https://www.bbcgoodfood.com/recipes/air-fryer-patatas-bravas",
      "strImageSource": null,
      "strCreativeCommonsConfirmed": null,
      "dateModified": "2025-11-16 01:49:18"
    },
    {
      "idMeal": "53525",
      "strMeal": "Ají de Aguacate Recipe (Colombian Spicy Avocado Sauce)",
      "strMealAlternate": null,
      "strCategory": "Miscellaneous",
      "strArea": null,
      "strCountry": "Colombia",
      "strInstructions": "Place all the ingredients in a food processor. Process until the mixture is well combined.\r\nIf the mixture is too thick, add more lime juice until you reach the desired consistency.",
      "strMealThumb": "https://www.themealdb.com/images/media/meals/jyvy8u1783800448.jpg",
      "strTags": null,
      "strYoutube": "",
      "strIngredient1": "Avocado",
      "strIngredient2": "Habanero Pepper",
      "strIngredient3": "Egg",
      "strIngredient4": "Lime",
      "strIngredient5": "Salt",
      "strIngredient6": "Vinegar",
      "strIngredient7": "Onion",
      "strIngredient8": "Scallions",
      "strIngredient9": "Cilantro",
      "strIngredient10": "",
      "strIngredient11": "",
      "strIngredient12": "",
      "strIngredient13": "",
      "strIngredient14": "",
      "strIngredient15": "",
      "strIngredient16": "",
      "strIngredient17": "",
      "strIngredient18": "",
      "strIngredient19": "",
      "strIngredient20": "",
      "strMeasure1": "2",
      "strMeasure2": "1",
      "strMeasure3": "1",
      "strMeasure4": "Juice of 2",
      "strMeasure5": "To taste",
      "strMeasure6": "2 tablespoons",
      "strMeasure7": "1 chopped",
      "strMeasure8": "2 chopped",
      "strMeasure9": "4 tablespoons",
      "strMeasure10": "",
      "strMeasure11": "",
      "strMeasure12": "",
      "strMeasure13": "",
      "strMeasure14": "",
      "strMeasure15": "",
      "strMeasure16": "",
      "strMeasure17": "",
      "strMeasure18": "",
      "strMeasure19": "",
      "strMeasure20": "",
      "strSource": "https://www.mycolombianrecipes.com/aji-de-aguacate-colombian-hot-avocado-sauce/#recipe",
      "strImageSource": null,
      "strCreativeCommonsConfirmed": null,
      "dateModified": "2026-07-11 21:05:30"
    },
    {
      "idMeal": "53169",
      "strMeal": "Ajo blanco",
      "strMealAlternate": null,
      "strCategory": "Starter",
      "strArea": "Spanish",
      "strCountry": "Spain",
      "strInstructions": "step 1\r\nTip the bread into a bowl and pour over 350ml water. Leave to soak for 10 mins.\r\n\r\nstep 2\r\nBlend the ingredients together with 350ml water and 1 tsp salt.\r\n\r\nstep 3\r\nLet the soup cool in the fridge for 1 hr or so, then serve with a drizzle of oil and some black pepper.",
      "strMealThumb": "https://www.themealdb.com/images/media/meals/5jdtie1763289302.jpg",
      "strTags": null,
      "strYoutube": "https://www.youtube.com/watch?v=AS2mSRtWyW0",
      "strIngredient1": "White bread",
      "strIngredient2": "Almonds",
      "strIngredient3": "Extra Virgin Olive Oil",
      "strIngredient4": "Garlic Clove",
      "strIngredient5": "Red Wine Vinegar",
      "strIngredient6": "",
      "strIngredient7": "",
      "strIngredient8": "",
      "strIngredient9": "",
      "strIngredient10": "",
      "strIngredient11": "",
      "strIngredient12": "",
      "strIngredient13": "",
      "strIngredient14": "",
      "strIngredient15": "",
      "strIngredient16": "",
      "strIngredient17": "",
      "strIngredient18": "",
      "strIngredient19": "",
      "strIngredient20": "",
      "strMeasure1": "150g",
      "strMeasure2": "200g",
      "strMeasure3": "50 ml ",
      "strMeasure4": "1",
      "strMeasure5": "1 ½ tbsp",
      "strMeasure6": " ",
      "strMeasure7": " ",
      "strMeasure8": " ",
      "strMeasure9": " ",
      "strMeasure10": " ",
      "strMeasure11": " ",
      "strMeasure12": " ",
      "strMeasure13": " ",
      "strMeasure14": " ",
      "strMeasure15": " ",
      "strMeasure16": " ",
      "strMeasure17": " ",
      "strMeasure18": " ",
      "strMeasure19": " ",
      "strMeasure20": " ",
      "strSource": "https://www.bbcgoodfood.com/recipes/ajo-blanco",
      "strImageSource": null,
      "strCreativeCommonsConfirmed": null,
      "dateModified": "2025-11-16 10:32:44"
    },
    {
      "idMeal": "53138",
      "strMeal": "Alfajores",
      "strMealAlternate": null,
      "strCategory": "Dessert",
      "strArea": "Argentina",
      "strCountry": "Argentina",
      "strInstructions": "Make the Dough: Cream butter and sugar. Add egg yolks and lemon zest. Gradually mix in flour and cornstarch to form a dough. Chill for 1 hour.\r\nBake the Cookies: Roll out the dough, cut into circles, and bake at 180°C (350°F) for 12-15 minutes. Let cool.\r\nAssemble: Spread dulce de leche on one cookie, then sandwich with another. Roll the edges in coconut flakes.\r\nPro Tips:\r\n\r\nChill the dough before rolling it out to make it easier to handle and to prevent the cookies from spreading too much while baking.\r\nDip the alfajores in melted chocolate and let them set on a wire rack for an extra decadent treat.",
      "strMealThumb": "https://www.themealdb.com/images/media/meals/a4kgf21763075288.jpg",
      "strTags": null,
      "strYoutube": "https://www.youtube.com/watch?v=9WR40GHpsyo",
      "strIngredient1": "All purpose flour",
      "strIngredient2": "Cornstarch",
      "strIngredient3": "Butter",
      "strIngredient4": "Sugar",
      "strIngredient5": "Egg Yolks",
      "strIngredient6": "Lemon Zest",
      "strIngredient7": "Dulce de leche",
      "strIngredient8": "Desiccated Coconut",
      "strIngredient9": "",
      "strIngredient10": "",
      "strIngredient11": "",
      "strIngredient12": "",
      "strIngredient13": "",
      "strIngredient14": "",
      "strIngredient15": "",
      "strIngredient16": "",
      "strIngredient17": "",
      "strIngredient18": "",
      "strIngredient19": "",
      "strIngredient20": "",
      "strMeasure1": "300g",
      "strMeasure2": "200g",
      "strMeasure3": "200g",
      "strMeasure4": "100g ",
      "strMeasure5": "2",
      "strMeasure6": "1 teaspoon",
      "strMeasure7": " ",
      "strMeasure8": "Sprinkling",
      "strMeasure9": " ",
      "strMeasure10": " ",
      "strMeasure11": " ",
      "strMeasure12": " ",
      "strMeasure13": " ",
      "strMeasure14": " ",
      "strMeasure15": " ",
      "strMeasure16": " ",
      "strMeasure17": " ",
      "strMeasure18": " ",
      "strMeasure19": " ",
      "strMeasure20": " ",
      "strSource": "https://www.munchery.com/blog/the-ten-iconic-dishes-of-argentina-and-how-to-cook-them-at-home/",
      "strImageSource": null,
      "strCreativeCommonsConfirmed": null,
      "dateModified": "2025-11-13 11:32:17"
    },
    {
      "idMeal": "53284",
      "strMeal": "Algerian Bouzgene Berber Bread with Roasted Pepper Sauce",
      "strMealAlternate": null,
      "strCategory": "Side",
      "strArea": "Algerian",
      "strCountry": "Algeria",
      "strInstructions": "Preheat your oven's broiler. Place red bell peppers and tomatoes on a baking sheet, and roast under the broiler for about 8 minutes, turning occasionally. This should blacken the skin and help it peel off more easily. Cool, then scrape the skins off of the tomatoes and peppers, and place them in a large bowl. Remove cores and seeds from the bell peppers.\r\n\r\nHeat 1 tablespoon of olive oil in a skillet over medium heat. Add the jalapenos and garlic, and cook until tender, stirring frequently. Remove from heat, and transfer the garlic and jalapeno to the bowl with the tomatoes and red peppers. Using two sharp steak knives (one in each hand), cut up the tomatoes and peppers to a coarse and soupy consistency. Stir, and set sauce aside.\r\n\r\nPlace the semolina in a large bowl, and stir in salt and 4 tablespoons of olive oil. Gradually add water while mixing and squeezing with your hand until the dough holds together without being sticky or dry, and molds easily with the hand. Divide into 6 pieces and form into balls.\r\n\r\nFor each round, heat 1 tablespoon of olive oil in a large heavy skillet over medium heat. Roll out dough one round at a time, to no thicker than 1/4 inch. Fry in the hot skillet until dark brown spots appear on the surface, and they are crispy. Remove from the skillet, and wrap in a clean towel while preparing the remaining flat breads.\r\n\r\nTo eat the bread and sauce, break off pieces of the bread, and scoop them into the sauce. It will slide off, but just keep reaching in!",
      "strMealThumb": "https://www.themealdb.com/images/media/meals/se5vhk1764114880.jpg",
      "strTags": null,
      "strYoutube": "",
      "strIngredient1": "Red Pepper",
      "strIngredient2": "Tomato",
      "strIngredient3": "Olive Oil",
      "strIngredient4": "Garlic",
      "strIngredient5": "Jalapeno",
      "strIngredient6": "Salt",
      "strIngredient7": "Semolina",
      "strIngredient8": "Salt",
      "strIngredient9": "Water",
      "strIngredient10": "Olive Oil",
      "strIngredient11": "Olive Oil",
      "strIngredient12": "",
      "strIngredient13": "",
      "strIngredient14": "",
      "strIngredient15": "",
      "strIngredient16": "",
      "strIngredient17": "",
      "strIngredient18": "",
      "strIngredient19": "",
      "strIngredient20": "",
      "strMeasure1": "2",
      "strMeasure2": "4",
      "strMeasure3": "1 tablespoon",
      "strMeasure4": "4 Cloves Chopped",
      "strMeasure5": "1 chopped",
      "strMeasure6": "To taste",
      "strMeasure7": "2 Lbs",
      "strMeasure8": "1 1/2 tsp ",
      "strMeasure9": "3 Cups",
      "strMeasure10": "4 tablespoons",
      "strMeasure11": "6 tablespoons",
      "strMeasure12": " ",
      "strMeasure13": " ",
      "strMeasure14": " ",
      "strMeasure15": " ",
      "strMeasure16": " ",
      "strMeasure17": " ",
      "strMeasure18": " ",
      "strMeasure19": " ",
      "strMeasure20": " ",
      "strSource": "https://www.allrecipes.com/recipe/72363/algerian-bouzgene-berber-bread-with-roasted-pepper-sauce/",
      "strImageSource": null,
      "strCreativeCommonsConfirmed": null,
      "dateModified": "2025-11-25 23:52:39"
    }
  ]
}

fetchRecipe("https://www.themealdb.com/api/json/v1/1/search.php?s=Asado");

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
      renderRelated(recipe.meals[0]); // put list of related recipes on the page
    })
    .catch((error) => { // This triggers when a promise anywhere earlier in this chain is rejected
      const display = document.getElementById("recipe-name");
      display.textContent = `There was an error retrieving the recipe: ${error.message}`;
    });
} // TODO

// Recipe Page functions
function renderRecipe(recipe) {
    // Set Recipe Name
    const recipeName = document.getElementById("recipe-name");
    recipeName.textContent = recipe.strMeal;

    // Set Recipe Tags
    const recipeTags = document.getElementById("recipe-tags");
    if (recipe.strTags === null) {
        // TODO if recipeTags is null.......do something, IDK what to do yet
        recipeTags.textContent = "Recipe Tags: None"; 
    } else {
        recipeTags.textContent = "Recipe Tags: " + recipe.strTags; // I could put a space in between each ,
    }

    // Get Recipe Picture
    const recipeImage = document.getElementById("recipe-image");
    recipeImage.src = recipe.strMealThumb;

    // Get Recipe Ingredients
    // loop through the key value pairs and add the values to the ingredientsList
    const ingredientsList = document.getElementById("ingredients-list");
    ingredientsList.innerHTML = "";
    for (let i = 1; i <= 20; i++) {
        let ingredient = recipe[`strIngredient${i}`];
        if (ingredient === "") {
            break; // if there are no more ingredients, stop looping
        }


        // PUT THIS IN A P TAG or PUT THIS IN AN UNORDERED LIST (maybe similar to instructions!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        // concatenate the current ingredient and current measurement together
        ingredient = `- ${recipe[`strMeasure${i}`]} ${ingredient}\n`;

        // add the ingredient WITH its measurement to the page
        ingredientsList.append(ingredient);
    }

    // Get Recipe Steps
    const instructions = document.getElementById("instructions"); 
    instructions.textContent = recipe.strInstructions; 

    // TODO Separate the various instructions styles ( EXAMPLE:  Step 1: Step 2:  &&  Prepare:  &&  /r/n/r/n)
    // maybe use indexOf to make an array of strings ["Step 1: ", "Step 2: ", ...., "step 10"]
    // maybe use mock data



    // separate instruction by colon
    let stringArray = recipe.strInstructions;
    createInstructions(stringArray);

}

function createInstructions(stringArray) {
  let colonCount = 0;
  let stringArrayResult = [];

//  console.log(colonCount);
//  console.log(stringArray);
  for (let i = 0; i < stringArray.length; i++) {
    if (stringArray[i] === ':') {
      colonCount++;
//      console.log(colonCount);

      // find the colon, Cut from colon to stringArray[0] for the STEP
      // use split()???
      

      // find the period, Cut from period to stringArray[0] for the INSTRUCTION



      // push the object to the array [(STEP: INSTRUCTION) , (STEP: INSTRUCTION), ...]


    }
  }
} // TODO 

function renderRelated(recipe) {
  // this function will display up to four recipes that share the most tags with the current recipe on the recipe page (or maybe the first four tags)
  
  // TODO find recipes with similar tags 
  
  
  // if the recipe does not have tags, then display up to four recipes that share the same category
  const recipeListsByCategory = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${recipe.strCategory}}`;

  fetch(recipeListsByCategory)
  .then((response) => { // ensure we are able to get a response from the API
    if (!response.ok) { // response.ok checks whether the HTTP status code indicates success (200–299)
      throw new Error("Couldn't find any related recipes"); // creates an error and rejects the promise chain, skipping the remaining code in this .then() callback
    }
    return response.json();
  })

  .then((list) => {
  // randomly find 4 recipes
  console.log("Here is the list of related Recipes: " + recipeListsByCategory);
  console.log(list);

  // display the 4 recipes in the related meals section


  // each recipe will have its own card


  // card will display recipe name and recipe image



    
  })
  .catch((error) => { // This triggers when a promise anywhere earlier in this chain is rejected
    const display = document.getElementById("recipe-name");
    display.textContent = `There was an error retrieving related recipes: ${error.message}`;
  });



  // if the recipe does not have tags, then display up to four recipes that share the same country
  const recipeListsByCountry = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${recipe.strCountry}}`;

  fetch(recipeListsByCountry)
  .then((response) => { // ensure we are able to get a response from the API
    if (!response.ok) { // response.ok checks whether the HTTP status code indicates success (200–299)
      throw new Error("Couldn't find any related recipes"); // creates an error and rejects the promise chain, skipping the remaining code in this .then() callback
    }
    return response.json();
  })

  // this will run as long as the previous .then() is successful
  .then((recipe) => {
// randomly find 4 recipes


// display the 4 recipes in the related meals section


// each recipe will have its own card


// card will display recipe name and recipe image



    
  })
  .catch((error) => { // This triggers when a promise anywhere earlier in this chain is rejected
    const display = document.getElementById("recipe-name");
    display.textContent = `There was an error retrieving related recipes: ${error.message}`;
  });
}



function renderRecentlyViewed() {

    // TODO save the 
}



// Recipe Page Function calls

//renderRelated()


