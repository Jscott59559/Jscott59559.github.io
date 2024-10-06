let counter = 0; // Initialize counter variable

// Define an array of example cities for autocomplete
const cities = ["London", "Belfast", "New York"];

// Get the input element and suggestions container
const cityInput = document.getElementById("cityInput");
const suggestionsContainer = document.getElementById("suggestions");

// Add event listener for input on the search bar
cityInput.addEventListener("input", function() {
    const input = this.value.toLowerCase(); // Get the current input
    suggestionsContainer.innerHTML = ""; // Clear previous suggestions

    if (input) {
        // Filter cities based on input
        const filteredCities = cities.filter(city => city.toLowerCase().includes(input));

        // Create suggestion items
        filteredCities.forEach(city => {
            const suggestionItem = document.createElement("div");
            suggestionItem.textContent = city;
            suggestionItem.className = "suggestion-item";
            suggestionItem.addEventListener("click", function() {
                cityInput.value = city; // Set input value to the clicked suggestion
                suggestionsContainer.innerHTML = ""; // Clear suggestions
            });
            suggestionsContainer.appendChild(suggestionItem); // Append suggestion item
        });
    }
});

document.getElementById("clickButton").addEventListener("click", function() {
    const inputCity = cityInput.value; // Get the city input value
    if (cities.includes(inputCity)) { // Check if the city exists in the cities array
        // Create a container for the buttons
        const buttonContainer = document.createElement("div");
        buttonContainer.className = "button-container";

        // Create the city button
        const cityButton = document.createElement("button");
        cityButton.className = "city-button"; // Class for city button
        cityButton.textContent = inputCity; // Set text to the city name
        cityButton.style.flexGrow = 4; // Set flex-grow for city button

        // Add functionality for city button click
        cityButton.addEventListener("click", function() {
            // Implement any desired functionality when clicking on the city button
            alert(`Button for ${inputCity} clicked.`);
        });

        // Create the delete button
        const deleteButton = document.createElement("button");
        deleteButton.className = "delete-btn"; // Class for delete button
        deleteButton.textContent = "X"; // Set text to X
        deleteButton.style.flexGrow = 1; // Set flex-grow for delete button

        // Add functionality to delete the city button
        deleteButton.addEventListener("click", function() {
            // Ask for confirmation before deleting
            if (confirm(`Are you sure you want to delete the city "${inputCity}"?`)) {
                buttonContainer.remove(); // Remove the button container from the sidebar
            }
        });

        // Append the buttons to the container
        buttonContainer.appendChild(cityButton);
        buttonContainer.appendChild(deleteButton);

        // Append the container to the sidebar content
        document.querySelector(".sidebar-content").appendChild(buttonContainer);
        
        // Clear the input field after adding the button
        cityInput.value = "";
        suggestionsContainer.innerHTML = ""; // Clear suggestions after adding
    } else {
        alert("City not found. Please enter a valid city."); // Alert if city not found
    }
});
