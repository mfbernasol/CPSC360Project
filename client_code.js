//--THIS PART OF CODE KEEPS JAVASCRIPT VARIABLE UPDATED TO FORM INPUT--//
//select text input in form and store to a variable
const howManyInput = document.getElementById('howmany'); 
let howmany = howManyInput.value;

const whatInput = document.getElementById('what')
let what = whatInput.value

const minInput = document.getElementById('minmag');
let minMag= minInput.value;

const maxInput = document.getElementById('maxmag')
let maxMag = maxInput.value

const dateInput = document.getElementById('date');
let date = dateInput.value


const placeInput = document.getElementById('country')
let country = placeInput.value




//RETREIVING VALUES 

//retrieves input from How Many field
howManyInput.addEventListener('input',function(e){
  console.log(howManyInput.value)
  howmany = e.target.value
})


//retreives input from WHAT
whatInput.addEventListener('input',function(e){
    console.log(whatInput.value)
    what = e.target.value
  })


//retreives from min mag
minInput.addEventListener('input',function(e){
  console.log(minInput.value)
  minMag = e.target.value
})

//retrieves from max mag
maxInput.addEventListener('input',function(e){
  console.log(maxInput.value)
  maxMag = e.target.value
})

//retrives from max
dateInput.addEventListener('input',function(e){
  console.log(dateInput)
  date = e.target.value
})

placeInput.addEventListener('input',function(e){
  console.log(placeInput)
  country = placeInput.value

})



//Retrieves input when form is submitted 
const form = document.querySelector('form')
console.log(form)
form.addEventListener('submit',function(e){
  e.preventDefault();

  axios.get("http://localhost:8000/earthquakes/?howmany="+howmany+"&maxMag="+maxMag+"&what="+what+"&minMag="+minMag+"&timeframe="+date+"&place="+place.toLowerCase()).then(function(resp){
    outputdata(resp);})
    .catch(function(error){
      console.log(error);
    })          
  
  
  howManyInput.value= ""
  whatInput.value=""
  minInput.value=""
  maxInput.value=""  
  dateInput.value=""
  placeInput.value=""
})


function outputData(resp){
  console.log(resp.data)
  console.log(resp.data.length)


  let earthquakeCountry = document.querySelector('.earthquakeCountry')
  let earthquakeMag = document.querySelector('.earthquakeMag')
  let earthquakeDay = document.querySelector('.earthquakeDay')
  let earthquakeMonth = document.querySelector('.earthquakeMonth')
  let earthquakeYear = document.querySelector('earthquakeYear')
  let errormsg = document.querySelector('.error-message')

  let earthquakelist=[]
  let earthquakestr=''
  
  if (resp.data.length) { 
		for (i = 0; i < resp.data.length; i++) {
			earthquakeStr= "A magnitude " + resp.data[i].maxMag + " earthquake occurred " + resp.data[i].place + " on " + resp.data[i].date + ".";
			earthquakeList.push(earthquakestr);	
			}

	 

	} else { 
		errormsg.innerHTML = " No earthquakes found within those data inputs."
		console.log(errormsg.innerHTML);
	}	
  

}






