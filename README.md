## Brian's Recipe Finder
# A web application that allows users to search for recipes and discover meal ideas using TheMealDB REST API. 
# Built with HTML, CSS, and #JavaScript.
# This project demonstrates front-end web development, API integration, and interactive user interface functionality.
# 
# Try it here:
# https://brian-xiong.github.io/LVL2-RecipeFinder/index.html


## Technologies
# HTML | CSS | JavaScript | TheMealDB REST API

## Features & Implementation
# Recipe Search:      Fetch recipe data from TheMealDB API using Fetch and async/await.
# Dynamic UI:         Generate recipe cards using JavaScript DOM manipulation.
# Recently Viewed:    Save and retrieve recently viewed recipes using Local Storage.
# Category Filtering: Filter recipes using JavaScript array methods.
# Contact Form:       Validate form inputs and save submitted messages.
# Responsive Design:  Adapt the interface to different screen sizes.


## Design and Wireframes
# I used Excalidraw to plan the page layouts and user interface before implementing the application:
# https://excalidraw.com/#json=OgS9hlN1m6oJhgg7RI0Ja,MWK8zKNYcDFTwqSgRWwyEw 



**Tech:** HTML, CSS, JavaScript
**Features:**
✅ Search for recipes using the **[TheMealDB API](https://www.themealdb.com/api.php)** (free, no API key) — fetch with Axios and async/await, build the search URL with query parameters
✅ Render recipe cards to the DOM using component functions — each card built with `createElement` and `appendChild`
✅ Save favorite recipes to localStorage — store as an array of recipe objects using `JSON.stringify`; load and render on page start with a null check
✅ Filter displayed recipes by category — client-side filter using `.filter()` on the loaded array
✅ Contact form — validate all fields; store submitted messages in localStorage; display a confirmation message 
✅ Responsive design







