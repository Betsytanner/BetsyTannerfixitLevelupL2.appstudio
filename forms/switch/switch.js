
//now the switch statements 
//have user enter in their name 
var firstName = prompt("Please enter your first name");
//have the user enter their state 
var userState = prompt("Please enter the name of your state using to letters ex. California is CA "); 
//have the user enter their temperature
var temp = prompt("Please enter the current temperature");
//create an array for if the user is in NE and temperature is below 32 and write a message 
let lowNE = (userState == 'NE' && temp < '32') 
lowNE = [userState, temp]
lowNE = alert("wear a warm coat, hat, scarf and gloves.")



