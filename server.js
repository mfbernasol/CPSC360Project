
const express = require('express'); //import express
const appserver = express();//initialize express
const edata = require('./earthquakes.json');//import employee data
const cors = require('cors'); //import cors package
								//install: npm i --save cors
								//easily publish API and receive query

//-----USING CORS
//to query: http://localhost:8000/employees/?lastname=doe
//too query with two parameters: http://localhost:8000/employees/?lastname=doe&&firstname=john
appserver.use(cors());//enable cors

//this is triggered when a request comes in
appserver.get('/earthquakes/',function(request,response){//get client request
	//store query string parameter	console.log(request.query);
	//console.log(request);

	console.log(request.query);

	
	let status = request.query.status.toLowerCase();
	let retobjar = [];
	/*for (x in employdata)
	{
		console.log (x + "-" + exmployees([x]));

	}
	*/

	// var price = employdata.filter(function(item) { return item["status"] == automatic && item["mag"] == 5; });
	// price.push(employdata.employees[i]);


	//loop through data array
	for(let i=0; i<edata.features.length; i++){
		for(let j=0; j<edata.features[i].properties.length; j++)
		{
		if(!status){//no lastname parameter provided
			//send the responses
			return response.send({"status": "error", "message" : "No lastname provided"});
		} else if (status == edata.features[i].properties.toLowerCase()){//lastname match
			retobjar.push(edata.earthquakes[i]);
				 //price.push(employdata.employees[i]);

		}
		}
		console.log(edata.employees.length);
	}
	if (retobjar.length==0){
		return response.send({"status": "error", "message" : "Nobody with that lastname works here."});
	} else{
		return response.send(JSON.stringify(retobjar));
	}
});


//listen to port 8000
appserver.listen(8000, function(){
	console.log('Listening on port 8000...');
});
