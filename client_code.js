//--THIS PART OF CODE KEEPS JAVASCRIPT VARIABLE UPDATED TO FORM INPUT--//
//select text input in form and store to a variable
const howManyInput = document.getElementById('howmany');
let howMany = howManyInput.value;

const magInput = document.getElementById('mag');
let magnitude = magInput.value;

const dateInput = document.getElementById('date');
let date = dateInput.value;

const monthInput = document.getElementById('month');
let month = monthInput.value;

const yearInput = document.getElementById('year');
let year = yearInput.value;


//RETREIVING VALUES 

//retrieves input from How Many field
howManyInput.addEventListener('input',function(e){
  howMany.e.target.value
  }
)

//retreives input from WHAT 
  var w = document.getElementById("what")
  var result = w.options[selectedIndex].text;



//retrieves input from TIME FRAME
var t = document.getElementById("timeframe")
var timeResult = t.options[selectedIndex].text


//retreives input from COUNTRY
var c = document.getElementById('country')
var countryResult = c.options[selectedIndex].text


const form = document.querySelector('form')

form.addEventListener('submit',function(e){
  e.preventDefault();

  axios.get("http://localhost:8000/earthquakes/?howmany="+howmany + ).then(function(resp){outputdata(resp);}).catch(function(error){console.log(error);})
          
  
  
  howManyInput.value= ""
  }


  )


function outputData(resp){
  console.log(resp.data)
  console.log(resp.data.length)


  let outputheading = document.querySelector('.outputheading')
  let earthquakedata = document.querySelector('.earthquakedata')
  let errormsg = document.querySelector('.error-message')

  let earthquakelist=[]
  let earthquakestr=''
  
  if(resp.data.length){
    for(i=0;i<res.data.length;i++){
      earthquakestr="A magnitude" + resp.data[i].mag + "earthquake occurred" + resp.data[i].place + " of"+ resp.data[i].month
    }
  }else{
    errormsg.innerHTML = "No earthquake data found"
  }
  

}


