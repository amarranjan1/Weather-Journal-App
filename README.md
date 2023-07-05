# Weather-Journal-App
This is a simple web application that allows users to retrieve weather data from OpenWeatherMap API and journal their feelings along with the weather information. The app is built using Node.js and Express framework on the server-side, and Vanilla JavaScript on the client-side. To fetch weather data, you need to create API credentials on OpenWeatherMap.com. Once you have the API key, open the app.js file and replace **<your_api_key>** with your actual API key in the following line of code:

**javascript** const apiKt The server-side file server.js includes a JavaScript Object named projectData, which acts as the app API endpoint. The object is initiated as an empty object at the top of the file:

**Return Endpoint Data GET Route I:** Server Side A GET route is set up on the server side with the first argument as a string naming the route ('/all'), and the second argument is a callback function to return the JavaScript object (projectData) created at the top of the server code.

**GET Route II:** Client Side There is an asynchronous function in the app.js file to fetch the data from the app endpoint ('/all'). The retrieved data is then used to dynamically update the HTML elements on the client side.

**POST Route** To add an entry to the project endpoint, a POST route is set up on the server side and executed on the client side as an asynchronous function. The client-side function takes two arguments: the URL to make a POST request to and an object holding the data to POST. The server-side function creates a new entry in the app's endpoint (projectData) using the data received from the client side POST.

Dynamic UI The HTML inputs and buttons are named for interaction, and their properties are assigned dynamically using Vanilla JavaScript.!

Naming HTML Inputs and Buttons For Interaction The input element with the placeholder property set to "enter zip code here" should have an id of zip. The textarea element should have an id of feelings. The button element should have an id of generate. Assigning Element Properties Dynamically The div with the id entryHolder should have three child divs with the following ids:

date temp content Event Listeners An event listener is added to the button with the id generate

[image](https://github.com/amarranjan1/Weather-Journal-App/assets/35811614/c5870b37-efbc-44e9-acfd-9c152655741a)

