
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
const edata = require('./data.json');//import employee data //loads our data into the employeedata object, so we can access properties like js object properties
//const earthquakeData = require('./data.json');
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


appserver.get('/earthquakes', function(request, response)//get client request //do we need multiple urls ? or can we make one long url with all queries?
{
	//store the query string parameter
	console.log(request.query);
	
	 

	let retobjar = []; //empty array for our new data to be sent back to the client
	//for loop to loop through our data array
	//let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July','August', 'September', 'October', 'November', 'December'];

//create a binding of the following variables
	 // we are referring to the query /?place = USA  when we say place after the equal sign
	 //it is for extracting the query parameter to the place variable we just created
	var howMany = request.query.howMany.toLowerCase();
	var what = request.query.what.toLowerCase();
	var maxMag = request.query.maxMag.toLowerCase();
	var minMag = request.query.minMag.toLowerCase();
	var timeframe = request.query.timeframe.toLowerCase();
	var country = request.query.country.toLowerCase();
	if(!howMany || howMany<=0)
	{
		return response.send({"status" : "error", "message": "HowMany was not given!"});
	}
	if(!timeframe)
	{
		timeframe = '';
	}

	for(let counter = 0; counter < howMany; counter++)
	//this is where the query is parsed, where it gets the parameter, like place, and it looks through the data for parameters that match
	{
		if(what=='WORST')
		{
			console.log("Worst");
			console.log(minMag + ' ' + maxMag);
			minMag=5;
			maxMag=10;
			for(let counter3 = 0; counter3<edata.features.length; counter3++)
			{
				if(minMag <= edata.features[i].properties.mag <= maxMag)
				{
					if(timeframe =='hour')
					{
						
						let time = new Date(edata.features[i].properties.time);
						let month = time.getMonth();
						let hour = time.getHours();
						let day = new Date();
						let now = day.getHours();
						if(hour == now)
						{
							var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July','August', 'September', 'October', 'November', 'December'];
							var resultingArray = //this array will be places in our retrobj array, which will be sent back to the client
							{
								place: edata.features[i].properties.place,
								year: time.getFullYear(),
								month: months[time.getMonth()],
								date: time.getDate(),
								mag: largest
							}
						}

						retobjar.push(resultingArray);
						console.log("Sending back to client");
						return response.send(JSON.stringify(retobjar));

					}
					else if(timeframe == 'day')
					{
						
						var time = new Date(edata.features[i].properties.time);
						var month = time.getMonth();
						var hour = time.getHours();
						var day = new Date();
						var today = day.getDate();
						if(day == today)
						{
							var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July','August', 'September', 'October', 'November', 'December'];
							var resultingArray = 
							{
								place: edata.features[i].properties.place,
								year: time.getFullYear(),
								month: months[time.getMonth()],
								date: time.getDate(),
								mag: largest
							}
						}
					}
					else if(timeframe == 'week')
					{
						
						var time = new Date(edata.features[i].properties.time);
						var month = time.getMonth();
						var hour = time.getHours();
						var day = new Date();
						var today = day.getDate();
						for(let counter4 = today; counter4< today-7; counter4--)
						{
							if(day == today)
							{
								var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July','August', 'September', 'October', 'November', 'December'];
								var resultingArray = 
								{
									place: edata.features[i].properties.place,
									year: time.getFullYear(),
									month: months[time.getMonth()],
									date: time.getDate(),
									mag: largest
								}
							}
						}

					}
					else if(timeframe == 'month')
					{
						
						var time = new Date(edata.features[i].properties.time);
						var month = time.getMonth();
						var hour = time.getHours();
						var day = new Date();
						var hisMonth = day.getDate();
						if(month == thisMonth)
						{
							console.log("months");
							var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July','August', 'September', 'October', 'November', 'December'];
							var resultingArray = 
							{
								place: edata.features[i].properties.place,
								year: time.getFullYear(),
								month: months[time.getMonth()],
								date: time.getDate(),
								mag: largest
							}
						}
						
					}
					else
					{
						return response.send({"status": "error", "message": "Timeframe was not given!"});
					}

				}
			}
			return response.send(JSON.stringify(retrobjar)); //send the new array back to client!
		}
		else if(what == 'MOSTRECENT')
		{ //this for loop goes through the data, then looks at the maxMag property if it is within the range, and it pushes a new array object into the result array
			for(let counter5 = 0; counter5<edata.features.length; counter5++)
			{
				if(minMag <= edata.features[i].properties.mag <= maxMag)
				{
					var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July','August', 'September', 'October', 'November', 'December'];
					var time = new Date(edata.features[i].properties.time);
					var month = time.getMonth();
					var now = day.getHours();
					var resultingArray = 
					{
						place: edata.features[i].properties.place,
						year: time.getFullYear(),
						month: months[time.getMonth()],
						date: time.getDate(),
						mag: largest
					}
					
				}
			}
			retobjar.push(resultingArray); //add new aray into result array
			console.log(JSON.stringify(retobjar));
			response.send(JSON.stringify(retobjar)); //send back to client
			return response;

		}
		else //this else statement is for if neither most recent or worst is selected under "what". It acts similar to the worst and most recent option
		{
			console.log("Hello");
			what = '';
			for(counter6 = 0; counter6<howMany; counter6++)
			{
				for(let counter7 = 0; counter7 < edata.features.length; counter7++)
				{
					if(minMag <= edata.features[i].properties.mag <= maxMag)
					{
						if(timeframe =='hour')
						{
							
							let time = new Date(edata.features[i].properties.time);
							let month = time.getMonth();
							let hour = time.getHours();
							let day = new Date();
							let now = day.getHours();
							if(hour == now)
							{
								let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July','August', 'September', 'October', 'November', 'December'];
								var resultingArray = 
								{
									place: edata.features[i].properties.place,
									year: time.getFullYear(),
									month: months[time.getMonth()],
									date: time.getDate(),
									mag: largest
								}
							}

						}
						else if(timeframe == 'day')
						{
							
							let time = new Date(edata.features[i].properties.time);
							let month = time.getMonth();
							let hour = time.getHours();
							let day = new Date();
							let today = day.getDate();
							if(day == today)
							{
								let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July','August', 'September', 'October', 'November', 'December'];
								var resultingArray = 
								{
									place: edata.features[i].properties.place,
									year: time.getFullYear(),
									month: months[time.getMonth()],
									date: time.getDate(),
									mag: largest
								}
							}
						}
						else if(timeframe == 'week')
						{
							
							let time = new Date(edata.features[i].properties.time);
							let month = time.getMonth();
							let hour = time.getHours();
							let day = new Date();
							var today = day.getDate();
							for(let counter4 = today; counter4< today-7; counter4--)
							{
								if(day == today)
								{
									let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July','August', 'September', 'October', 'November', 'December'];
									var resultingArray = 
									{
										place: edata.features[i].properties.place,
										year: time.getFullYear(),
										month: months[time.getMonth()],
										date: time.getDate(),
										mag: largest
									}
								}
							}

						}
						else if(timeframe == 'month')
						{
							
							let time = new Date(edata.features[i].properties.time);
							let month = time.getMonth();
							let hour = time.getHours();
							let day = new Date();
							let thisMonth = day.getDate();
							if(month == thisMonth)
							{
								let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July','August', 'September', 'October', 'November', 'December'];
								var resultingArray = 
								{
									place: edata.features[i].properties.place,
									year: time.getFullYear(),
									month: months[time.getMonth()],
									date: time.getDate(),
									mag: largest
								}
							}
							
						}
						else
						{
							return response.send({"status": "error", "message": "Timeframe was not given!"});
						}

					}
				}
				
			}	
		}
		return ('done');
	}
});



/*
	for(x in features)
		{
			console.log (x + "-" + features([x]));
		}

*/

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
