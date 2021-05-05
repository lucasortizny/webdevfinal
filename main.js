/* Function to generate the URL for a redirect */

function mailtogen(name, message){
    return "mailto:nanascakes@gmail.com?subject="+name+"&body="+message;
}

/* Function will return true if current date matches store hours */
function dateChecker(dateobj){
    /* Check day of the week */
    let validator = true;
    switch(dateobj.getDay()){
        case 0: validator = false; return validator;
        case 1: break;
        case 2: break;
        case 3: break;
        case 4: break;
        case 5: break;
        default: validator = false; return validator;
    }
    switch(validator){
        case (dateobj.getHours() >= 9 && dateobj.getHours() < 21): 
        return validator;
        default: return false;
    }

}
/**
 * This function is going to run the check that will be triggered
 * everytime the banner is clicked OR the page is loaded.
 * @param {boolean} dcval is dateChecker validation 
 * @param {HTML Element} hie is hoursindicator element 
 */
function updateDateChecker(dcval, hie){
    if (dcval){
        hie.textContent = "We are Open!";
        hie.style.backgroundColor = "#40ff40";
    } else{
        hie.textContent = "Store Closed";
        hie.style.backgroundColor = "#ff4d40";
    }
}
let dateobject = new Date();

let hoursindicator = document.getElementById('hoursindicator');
let submitbutton = document.getElementById('submit');
let namefield = document.getElementById('name');
let messagefield = document.getElementById('message')
let contactheader = document.getElementById("contactheader");


//LAZY ERROR HANDLING
/* Set up the mailto: link */

submitbutton.addEventListener('click', function(){
    contactheader.textContent = "Opening Mail App...";
    contactheader.style.backgroundColor = "#57ff47";
    window.location.href = mailtogen(namefield.value, messagefield.value);


});
/*hoursindicator.addEventListener('click', updateDateChecker(dateChecker(new Date()), hoursindicator)
);*/
hoursindicator.addEventListener('click', function(){
    dateobject = new Date();
    updateDateChecker(dateChecker(dateobject), hoursindicator);
    //console.log("Reached Async Event"); DEBUG PURPOSES
});

/* Going to set up an Hour Checker to line up with store */

