//get modal element 
const modal = document.getElementById('simpleModal'); 
//get open modal button 
const modalBtn = document.getElementById('modalBtn'); 
// get close button 
const closeBtn = document.getElementById('closeBtn'); 

// listen for click 

modalBtn.addEventListener('click', openModal); 

// function to open modal 
function openModal(){
    modal.style.display = 'block'; 
}