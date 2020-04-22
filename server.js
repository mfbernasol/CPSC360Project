
/*
NAMING CONVENTIONS-----------------------------------------------
client_code.js – name your client JavaScript code file in this way. If you wish to break apart your code into multiple files, prefix each program file with “client_”.
index.html – name of your webpage
server_code.js – name your server JavaScript code file in this way. If you wish to break apart your code into multiple files, prefix each program file with “server_”.
For uniformity of testing, have your server listen on port 8000.
Set the API for your server to be available at <host>/earthquakes/.


//https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON


*/




const express = require('express'); //import express
const appserver = express();//initialize express
const employdata = require('./data.json');//import employee data //loads our data into the employeedata object, so we can access properties like js object properties
const earthquakeData = require('./earthquakeData.json');
const cors = require('cors'); //import cors package
								//install: npm i --save cors
								//easily publish API and receive query
//-----USING CORS
//to query: http://localhost:8000/earthquakes/?place=(parameters)/?year=(parameters)/?mag=(parameters)/?month=(parameters)/?date=(parameters)
//for project, we need to use the location of the API which is <host>/earthquakes/.
appserver.use(cors());//enable cors



/*
EXAMPLE

let requestURL = 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json'; //change to our url
let request = new XMLHttpRequest();
//Now we need to open the request using the open() method. Add the following line
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function() {
  const superHeroes = request.response; //this variable contains javascript object based on the JSON
  populateHeader(superHeroes);
  showHeroes(superHeroes);
}


*/


appserver.get('/earthquakes', function(request, response)//get client request 
{
	//store the query string parameter
	console.log(request.query);
	let place = request.query.place.toLowerCase();
	let year = request.query.year.toLowerCase();
	let mag = request.query.mag.toLowerCase();
	let month = request.query.month.toLowerCase();
	let date = request.query.date.toLowerCase();
	let resultArray = []; //empty array for our new data to be sent back to the client
	//for loop to loop through our data array
	for(let counter = 0; counter < earthquakeData.features.length; counter ++)
	{
		if(!place)
		{//no place parameter provided
			//send the response
			return response.send({"status": "error", "message" : "No place provided"});
		}
		else if (place == earthquakeData.features[i].properties.place.toLowerCase())
		{//place match
			resultArray.push(earthquakeData.features[i].properties[i]);
		}
		if(!year)
		{//no year parameter provided
			//send the response
			return response.send({"status": "error", "message" : "No year provided"});
		}
		else if (year == earthquakeData.features[i].properties.year.toLowerCase())
		{//year match
			resultArray.push(earthquakeData.features[i].properties[i]);
		}
		if(!mag)
		{//no mag parameter provided
			//send the response
			return response.send({"status": "error", "message" : "No mag provided"});
		}
		else if (mag == earthquakeData.features[i].properties.mag.toLowerCase())
		{//mag match
			resultArray.push(earthquakeData.features[i].properties[i]);
		}
		if(!month)
		{//no month parameter provided
			//send the response
			return response.send({"status": "error", "message" : "No month provided"});
		}
		else if (month == earthquakeData.features[i].properties.mag.toLowerCase())
		{//month match
			resultArray.push(earthquakeData.features[i].properties[i]);
		}if(!date)
		{//no date parameter provided
			//send the response
			return response.send({"status": "error", "message" : "No date provided"});
		}
		else if (date == earthquakeData.features[i].properties.mag.toLowerCase())
		{//date match
			resultArray.push(earthquakeData.features[i].properties[i]);
		}
	}

	if (resultArray.length==0){
		return response.send({"status": "error", "message" : "No earthquakes happened with those properties."});
	} else{
		return response.send(JSON.stringify(earthquakeData));
	}



});



//listen to port 8000
appserver.listen(8000, function(){
	console.log('Listening on port 8000...');
});






/*
SERVER SIDE:

The server side code will receive the query and examine a local JSON file and return entries that match the query criteria.
An earthquake record consists of the following properties. Note that the data is taken directly from the USGS website (https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php) so these are real data that have a lot of clutter.

 

         "properties": {

            "mag": 7.5,

            "place": "219km SSE of Severo-Kuril'sk, Russia",

            "time": 1585104561313,

            "updated": 1585168098858,

            "tz": 660,

            "url": "https://earthquake.usgs.gov/earthquakes/eventpage/us70008fi4",

            "detail": "https://earthquake.usgs.gov/earthquakes/feed/v1.0/detail/us70008fi4.geojson",

            "felt": 27,

            "cdi": 5.6,

            "mmi": 4.823,

            "alert": "green",

            "status": "reviewed",

            "tsunami": 1,

            "sig": 881,

            "net": "us",

            "code": "70008fi4",

            "ids": ",at00q7qai7,pt20085000,us70008fi4,",

            "sources": ",at,pt,us,",

            "types": ",dyfi,finite-fault,general-text,geoserve,ground-failure,impact-link,losspager,moment-tensor,origin,phase-data,shakemap,",

            "nst": null,

            "dmin": 4.087,

            "rms": 0.85,

            "gap": 39,

            "magType": "mww",

            "type": "earthquake",

            "title": "M 7.5 - 219km SSE of Severo-Kuril'sk, Russia"

         }

 
As you can see, the relevant properties are “mag”, “place” and “time”. For the “place” property, you will need to extract the Country from the string.
 The “time” property is a long integer representing the time in milliseconds since the epoch “1970-01-01T00:00:00.000Z” (Jan. 1, 1970, midnight),
  therefore, the time value that is highest is the most recent.
Note that some queries may ask for earthquakes that occurred in the past week or past month. JavaScript has a Date object that includes the getTime() method.
 This also returns elapsed time since the epoch 1/1/1970 (look up getTime() JavaScript for more information).
If the query expects multiple results, an array of objects is created and returned to the client, where each object element of the array has the properties the client expects, i.e.

 

            {

                “mag” : 7.5,

                “place” : "219km SSE of Severo-Kuril'sk, Russia",

                “year” : 2020

                “month” : March

                “date” : 25

             }

 

Additionally, if the query does not provide any parameters, e.g.:

http://localhost:8000/earthquakes

 

The first 3 recorded earthquakes (as they appear in the earthquakes record file) should be returned.

 

The job of the server code then is to receive the query from the client, read the JSON file, find the entries that match the query, and return those records in an object array.
 Your code should also be able to handle variations of capitalizations in the query parameters, for example, country=Russia or country=russia should both be valid.

 
*/
