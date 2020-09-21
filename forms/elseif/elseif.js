// if else statement 
//code works except for the inbetween numbers - ask for help!!
//have the user enter their name

var firstName = prompt("Please enter your first name");
//have the user enter their state 
var userState = prompt("Please enter the name of your state using to letters ex. California is CA "); 
//have the user enter their temperature
var temp = prompt("Please enter the current temperature");

//for NE and under 32 degrees 
if (userState == 'NE' && temp < '32') {
    let lowNE = [userState, temp];
    lowNE = alert(firstName + " " + "wear a warm coat, hat, scarf and gloves")
  //for NE and between 32 and 50 degrees 
} else if (userState == 'NE' && '50' < temp > '32') {
  let highNE = [userState, temp]
  highNE = alert(firstName + " " + "wear a warm coat but you won't need a hat, scarf or gloves.")
    //for FL and between 32 and 50 degrees 
} else if (userState == 'FL' && '50' < temp > '32') {
  let lowFL = [userState, temp]
  lowFL = alert(firstName + " " + "wear your warmest coat, a warm hat, a scarf, and warm gloves.")
   //for FL and between  50  and 70 degrees 
} else if (userState == 'FL' && '70' < temp > '50') {
  let highFL = [userState, temp]
  highFL = alert(firstName + " " + "wear a warm coat, hat and gloves. Maybe a scarf too.")
  //for all other cases 
} else {
  alert("Sorry the state or tempeture you listed was not found, try again!")
}
