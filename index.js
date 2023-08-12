'use strict';

const mockData = require('./mockData.js').data;

// Your code here
let user = {
  first_name: "",
  last_name: "",
  age: "",
  gender: "",
  gender_interest: "",
  location: "",
  min_age_interest: "",
  max_age_interest: ""
};

let firstName = "";
while (firstName.trim().length === 0) {
  firstName = prompt("What is your first name?");
}
user.first_name = firstName;

let lastName = "";
while (lastName.trim().length === 0) {
  lastName = prompt("What is your last name?");
}
user.last_name = lastName;

let age = NaN;
while (isNaN(age) || age < 18) {
  age = Number(prompt("How old are you?"));
  if (isNaN(age)) {
    console.log("Please specify your age.");
  } else if (age < 18) {
    console.log("You are too young. Return when you'll turn 18.");
    process.exit(0); // Exit the program
  }
}
user.age = age;

let gender = "";
while (!(gender === "M" || gender === "F" || gender === "X")) {
  gender = prompt("Specify your gender: M/F/X");
  if (!(gender === "M" || gender === "F" || gender === "X")) {
    console.log("Please specify your gender by entering M (for male), F (for female), or X (for unknown).");
  }
}
user.gender = gender;

let genderInterest = "";
while (!(genderInterest === "M" || genderInterest === "F" || genderInterest === "X")) {
  genderInterest = prompt("What gender are you looking for: M/F/X?");
  if (!(genderInterest === "M" || genderInterest === "F" || genderInterest === "X")) {
    console.log("Please specify your partner's gender by entering M (for male), F (for female), or X (for unknown).");
  }
}
user.gender_interest = genderInterest;

let location = "";
while (!(location === "rural" || location === "city")) {
  location = prompt("What is your location: rural or city?");
  if (!(location === "rural" || location === "city")) {
    console.log("Please choose your location from these 2 options: rural or city.");
  }
}
user.location = location;

let minAgeInterest = NaN;
while (isNaN(minAgeInterest) || minAgeInterest < 18) {
  minAgeInterest = Number(prompt("What should be the min age of your potential partner?"));
  if (isNaN(minAgeInterest) || minAgeInterest < 18) {
    console.log("Please note, you cannot look for someone younger than 18.");
  }
}
user.min_age_interest = minAgeInterest;

let maxAgeInterest = NaN;
while (isNaN(maxAgeInterest) || maxAgeInterest < 18 || maxAgeInterest < minAgeInterest) {
  maxAgeInterest = Number(prompt("What should be the max age of your potential partner?"));
  if (isNaN(maxAgeInterest) || maxAgeInterest < 18){
    console.log("Please note, you cannot look for someone younger than 18.");
  }else if(maxAgeInterest < minAgeInterest){
    console.log("Max age should be higher than min age.");
  }
}
user.max_age_interest = maxAgeInterest;

// console.log("User Information:", user);

let i = 0;
for (const dataUser of mockData){
  if(dataUser.age >= user.min_age_interest && 
     dataUser.age <= user.max_age_interest &&
     user.age >= dataUser.min_age_interest &&
     user.age <= dataUser.max_age_interest &&
     user.gender === dataUser.gender_interest &&
     user.gender_interest === dataUser.gender &&
     user.location === dataUser.location){

      i++;
      console.log(`The match you have number ${i}: \n ${dataUser.first_name} ${dataUser.last_name} of ${dataUser.age} years old located in ${dataUser.location}.`)
      
     }
  
}

console.log(`Total number of matches: ${i}.`)





