/* Variable OpenWeatherMap API Base Url */
const baseUrl = 'https://api.openweathermap.org/data/2.5/weather';

// Personal API Key for OpenWeatherMap API
const apiKey = '856426a541a9979c084016c774c9f6c2&units=imperial';

// Create a new date instance dynamically with JS
let varData = new Date();
let newDate = varData.getMonth() + '.' + varData.getDate() + '.' + varData.getFullYear();

const userInfo = document.getElementById('userInfo');

// Event listener to add function to existing HTML DOM element
const button = document.getElementById('generate');
button.addEventListener('click', performAction);

/* Function called by event listener */
function performAction(e) {
    e.preventDefault();
    //User input id
    const zipCode = document.getElementById('zip').value;
    const content = document.getElementById('feelings').value;
    
        fetchOpenWeatherData(baseUrl, zipCode, apiKey)
            .then(function(data) {
                weatherPostData('/add', { temp:data.main.temp, date: newDate, content: content });
                retrieveData()
            }).catch(function(error) {
                console.log(error);
                alert('Enter a valid zip code');
            });
        userInfo.reset();
}

/* Function to GET Web API Data*/
const fetchOpenWeatherData = async(baseUrl, zipCode, apiKey) => {
    const res = await fetch(`${baseUrl}?q=${zipCode}&appid=${apiKey}`);
    try {
        // response into json
        const data = await res.json();
        return data;
    } catch (error) {
        console.log('Not able to fetch Weather data', error);
    }
};

/* Function to POST data */
const weatherPostData = async(url = '', data = {}) => {
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    });

    try {
        const newData = await response.json();
        return newData;
    } catch (error) {
        console.log(error);
    }
};

/* Function to GET Project Data */
const retrieveData = async () =>{
 const request = await fetch('/all');
 try {
 // Transform into JSON
 const allData = await request.json()
 console.log(allData)
 // Write updated data to DOM elements
 document.getElementById('temp').innerHTML = Math.round(allData.temp)+ '&nbsp' + 'degrees';
 document.getElementById('content').innerHTML = '&nbsp' + allData.content;
 document.getElementById('date').innerHTML =allData.date;
 }
 catch(error) {
   console.log('error', error);
   // appropriately handle the error
 }
}

