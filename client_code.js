//--THIS PART OF CODE KEEPS JAVASCRIPT VARIABLE UPDATED TO FORM INPUT--//
//select text input in form and store to a variable
const howManyInput = document.getElementById('mag');
let howMany = howManyInput.value;
const magInput = document.getElementById('place');
let place = magInput.value;
const dateInput = document.getElementById('date');
let date = dateInput.value;
const monthInput = document.getElementById('month');
let month = monthInput.value;
const yearInput = document.getElementById('year');
let year = yearInput.value;



//drop down menu for WHAT
// function myFunction() {
//   document.getElementById("myDropdown").classList.toggle("show");
// }
// // Close the dropdown if the user clicks outside of it
// window.onclick = function(event) {
//   if (!event.target.matches('.dropbtn')) {
//     var dropdowns = document.getElementsByClassName("dropdown-content");
//     var i;
//     for (i = 0; i < dropdowns.length; i++) {
//       var openDropdown = dropdowns[i];
//       if (openDropdown.classList.contains('show')) {
//         openDropdown.classList.remove('show');
//       }
//     }
//   }
// }

//RETREIVING VALUES

//var e = document.getElementById("country");
var result = e.options[e.selectedIndex].text;

//drop down menu for TIMEFRAME
function myFunction2() {
    document.getElementById("myDropdown2").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

  //Retrieve from drop down menu for COUNTRY 
var e = document.getElementById("country");
var result = e.options[e.selectedIndex].text;

//   function myFunction3() {
//     document.getElementById("myDropdown3").classList.toggle("show");
//   }
  
//   // Close the dropdown if the user clicks outside of it
//   window.onclick = function(event) {
//     if (!event.target.matches('.dropbtn')) {
//       var dropdowns = document.getElementsByClassName("dropdown-content");
//       var i;
//       for (i = 0; i < dropdowns.length; i++) {
//         var openDropdown = dropdowns[i];
//         if (openDropdown.classList.contains('show')) {
//           openDropdown.classList.remove('show');
//         }
//       }
//     }
//   }
  
  
  
 //Retreiving input
 const form = document.querySelector('form');

 //this listens to event when "Submit" is clicked
 form.addEventListener('submit', function(e) {
       // listener: prevent form default behavior
       //e: event
       e.preventDefault();//prevent default action if not handled explicitly
       
       //make request to API using axios
       //axios lets us easily get API request
       //make sure to include axios CDN in html
       axios.get("http://localhost:8000/earthquakes/?howmany="+howmany.then(function(resp){
                                         outputdata(resp);})
                                         .catch(function(error){
                                           console.log(error);
                                         })
       
       
       howManyInput.value="";//clear form input box
       }	
 )




