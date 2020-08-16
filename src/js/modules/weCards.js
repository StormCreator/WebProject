function WeCards(arrowsSelector, contentSelector){
    
    const arrows = document.querySelectorAll(arrowsSelector);
    const contents = document.querySelectorAll(contentSelector);

    arrows.forEach(item => {
        item.addEventListener('click', () => {
            contents.forEach(item => {
                item.style.display = "block";
            });
            item.style.transform= "rotate(180deg)";
        });
    })

}

export default WeCards;