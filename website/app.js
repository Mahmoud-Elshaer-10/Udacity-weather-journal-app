/* Global Variables */
const btn = document.getElementById("generate");

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + 1 + "." + d.getDate() + "." + d.getFullYear();

// Personal API Key for OpenWeatherMap API
const apiKey = "6fd48113cf33e8f31b3467f9acd5a9b6";

btn.onclick = async () => {
  const zipCode = document.getElementById("zip").value;
  const url = `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode}&appid=${apiKey}&units=metric`;
  const res = await fetch(url);
  const data = await res.json();
  const temp = data.main.temp;
};

// Event listener to add function to existing HTML DOM element

/* Function called by event listener */

/* Function to GET Web API Data*/

/* Function to POST data */

/* Function to GET Project Data */
