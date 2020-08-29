function Search(searchButton, contentBlock, activeClass){
    const searchingButton = document.querySelector(searchButton);
    const content = document.querySelector(contentBlock);

    console.log(searchingButton);
    console.log(contentBlock);
    console.log(activeClass);


    searchingButton.addEventListener('click', () => {
        if(content.classList.contains(activeClass)){
            content.classList.remove(activeClass);
        }else{
            content.classList.add(activeClass);
        }
    });


    searchButton.add
}

export default Search;