function WeCards(arrowsSelector, itemsSelector, activeClass){
    
    const arrows = document.querySelectorAll(arrowsSelector);
    const contents = document.querySelectorAll(itemsSelector);

    arrows.forEach((item, index) => {
        item.addEventListener('click', (e) => {
            contents.forEach((itm, ind) => {
                if(index === ind){
                    if(itm.classList.contains(activeClass)){
                        itm.classList.remove(activeClass);
                    }else{
                        itm.classList.add(activeClass);
                    }
                }
            });
        });
    })

}

export default WeCards;