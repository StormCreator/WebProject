function openModal(modalSelector, triggerSelector){
    const modal_button = document.querySelector(triggerSelector);
    const modal = document.querySelector(modalSelector);

    modal_button.addEventListener('click', () => {
        document.querySelector('.overlay').style.width="100%";
        modal.style.display = "block";
    });


}


function closeModal(closeSelector, modalSelector){
    const modal = document.querySelector(modalSelector);
    const close_button = document.querySelector(closeSelector);


    close_button.addEventListener('click', () => {
        document.querySelector('.overlay').style.width="0";
        modal.style.display = "none";
    });
}

export {openModal, closeModal};