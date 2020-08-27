function WeCards(arrowsSelector, itemsSelector, activeClass){
    
    const arrows = document.querySelectorAll(arrowsSelector);
    const contents = document.querySelectorAll(itemsSelector);

   
    contents.forEach((item, index) => {
        item.addEventListener('click', e => {
            if(item.classList.contains(activeClass)){
                item.classList.remove(activeClass);
            }else{
                item.classList.add(activeClass);
            }
        });
    })

}

export default WeCards;