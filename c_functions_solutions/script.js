
/* 
  ftnSalutation is a conventional JS function
  it returns an array of strings where each
  element (or index) of the array consists
  of the salutations to pupulate inputSelect
  found in index.html
*/
function ftnSalutation(){
  //  implement your statement(s) here
  return new Array("Mr.", "Mrs.", "Ms.", "Dr.");
}

/* 
  ftnGreeting written as an ARROW function
  it uses the passed-in parameters to form
  a greeting to be returned to the function that
  calls it
*/
const ftnGreeting = (salutation, user) => {
    //  implement your statement(s) here
    const msg = "Hi" + salutation + ".";
    return msg;
}

/*
Complete the challenge statement below
Create the function validateInputs below
Hint: 
- validateInputs accepts two arguments (choice, name)
- name should include a default value name=""
- validateInputs returns false if either choice or name is incorrectly filled
- validateInputs returns true if both choice and name are correctly filled
*/

function validateInputs(choice, name = "") {
 
//  if the choice is empty OR the name is empty, return to the caller prematurely
  if (choice == "" || name == "")
  return;

  return true;

}

function ftnRadioMeal(meal){
document.getElementById("displayPreference").textContent = meal;

// using switch statement to provide the appropriate feedback to the user
switch (meal) { // key is the meal-passed in
  case "None":
    document.getElementById("displayPreference").textContent = "No preference selected.";
    break;

    case "Beef":
    document.getElementById("displayPreference").textContent = "The main course served is Beef Wellington.";
    break;

    case "Chicken":
    document.getElementById("displayPreference").textContent = "The main course served is Chicken Cordon Bleu.";
    break;

  default:
    case "None":
    document.getElementById("displayPreference").textContent = "We will contact you seperately.";
    break;
}
}