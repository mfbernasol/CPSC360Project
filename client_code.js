




//drop down menu for WHAT
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
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

  //drop down menu for COUNTRY 
  function myFunction3() {
    document.getElementById("myDropdown3").classList.toggle("show");
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
       axios.get("http://localhost:8000/employees/?lastname="+lastname).then(function(resp){
                                         outputdata(resp);})
                                         .catch(function(error){
                                           console.log(error);
                                         })
       
       
       textInput.value="";//clear form input box
       }	
 )
