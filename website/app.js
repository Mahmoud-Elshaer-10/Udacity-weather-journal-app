/* Global Variables */
const dateDiv = document.getElementById("date");
const contentDiv = document.getElementById("content");
const tempDiv = document.getElementById("temp");
const btn = document.getElementById("generate");

// Create a new date instance dynamically with JS
let d = new Date();
// adding 1 to getMonth because it starts from 0
let newDate = d.getMonth() + 1 + "." + d.getDate() + "." + d.getFullYear();

// Personal API Key for OpenWeatherMap API
const apiKey = "6fd48113cf33e8f31b3467f9acd5a9b6";

// on clicking generate button function
btn.addEventListener("click", async () => {
  try {
    // getting the value of feelings textarea
    const feelings = document.getElementById("feelings").value;
    // value of zip code entered
    const zipCode = document.getElementById("zip").value;
    // URL to use to get data from openweathermap.org
    const url = `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode}&appid=${apiKey}&units=metric`;
    // data to be received from external api
    const res = await (await fetch(url)).json();
    // setting temperature received to temp variable
    const temp = res.main.temp;

    // sending data received from external api to local server using POST method
    const postData = await fetch("/postRoute", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        temp,
      }),
    });

    // getting data from local server using GET method which is the default
    const getData = await (await fetch("/getRoute")).json();

    // updating UI
    dateDiv.innerHTML = `Date is ${newDate}`;
    tempDiv.innerHTML = `Temperature is: ${getData.temp} celsius`;
    contentDiv.innerHTML = `Feelings: ${feelings}`;
  } catch (error) {
    console.log(error);
  }
});
