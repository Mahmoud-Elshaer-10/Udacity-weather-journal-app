/* Global Variables */
const dateDiv = document.getElementById("date");
const contentDiv = document.getElementById("content");
const tempDiv = document.getElementById("temp");
const btn = document.getElementById("generate");

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + 1 + "." + d.getDate() + "." + d.getFullYear();

// Personal API Key for OpenWeatherMap API
const apiKey = "6fd48113cf33e8f31b3467f9acd5a9b6";

btn.onclick = async () => {
  try {
    const feelings = document.getElementById("feelings").value;
    const zipCode = document.getElementById("zip").value;
    const url = `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode}&appid=${apiKey}&units=metric`;
    const res = await (await fetch(url)).json();
    const temp = res.main.temp;

    const postData = await fetch("/postRoute", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        temp,
      }),
    });

    const getData = await (await fetch("/getRoute")).json();
    dateDiv.innerHTML = `Date is ${newDate}`;
    tempDiv.innerHTML = `Temperature is: ${getData.temp} celsius`;
    contentDiv.innerHTML = `Feelings: ${feelings}`;
  } catch (error) {
    console.log(error);
  }
};

// Event listener to add function to existing HTML DOM element

/* Function called by event listener */

/* Function to GET Web API Data*/

/* Function to POST data */

/* Function to GET Project Data */
