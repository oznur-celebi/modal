// select modal-btn,modal-overlay,close-btn
// listen for click events on modal-btn and close-btn
// when user clicks modal-btn add .open-modal to modal-overlay
// when user clicks close-btn remove .open-modal from modal-overlay

const modalButton=document.querySelector(".modal-btn");
console.log(modalButton);
const closeButton =document.querySelector(".close-btn");
const modalOverlay =document.querySelector(".modal-overlay");
console.log(modalOverlay);

modalButton.addEventListener("click", function(){
    modalOverlay.classList.toggle("open-modal");
    console.log(modalOverlay.classList);
})

closeButton.addEventListener("click", function(){
    modalOverlay.classList.remove("open-modal");
})
