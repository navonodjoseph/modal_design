//get modal element 
const modal = document.getElementById('simpleModal'); 
//get open modal button 
const modalBtn = document.getElementById('modalBtn'); 
// get close button 
const closeBtn = document.getElementsByClassName('closeBtn')[0]; 

// listen for open click 

modalBtn.addEventListener('click', openModal); 

// function to open modal 
function openModal(){
    modal.style.display = 'block'; 
}

// listen for close click
closeBtn.addEventListener('click', closeModal); 

// function to close modal 

//
function closeModal(){
    modal.style.display = 'none'; 
}