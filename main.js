/* Function to generate the URL for a redirect */

function mailtogen(name, message){
    return ```mailto:nanascakes@gmail.com?subject=${name}&body=${message}```;
}


let submitbutton = document.getElementById('submit');
let namefield = document.getElementsByName('name');

//LAZY ERROR HANDLING
/* Set up the mailto: link */
try{
    submitbutton.addEventListener('click', function(){
        
    })
} catch{
    //Do Nothing
}
