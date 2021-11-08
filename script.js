'use strict';
/*Creating variable for good practice */
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeModal = document.querySelector('.close-modal');
const btnsShowModel = document.querySelectorAll('.show-modal');
const closeModalFunc = function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

/*Looping over buttons*/
for(let i=0;i<btnsShowModel.length;i++){
    btnsShowModel[i].addEventListener('click',function(){
        /*Modifying class to show modal window when button clicked*/
        modal.classList.remove('hidden');
        overlay.classList.remove('hidden');
    });
}
/*Modifying Class to close modal when close model clicked*/
closeModal.addEventListener('click',closeModalFunc);
/*To close modal when clicked outside modal*/
overlay.addEventListener('click',closeModalFunc);
/*Key events are Global*/
/*Function should have parameter passed in it*/
document.addEventListener('keydown',function(e){
    /* Check which property chnges with kety*/
    //console.log(e);
    if(e.key === 'Escape' && !modal.classList.contains('hidden')){
        //.contains check if list has class in it         
            closeModalFunc();
    }
});