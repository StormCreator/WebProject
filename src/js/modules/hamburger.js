function Hamburger(hamburgerSelector, linksSelector, basketSelector, navigationSelector){

    const menuLinks = document.querySelectorAll(linksSelector),
            navigation = document.querySelector(navigationSelector),
            hamburger = document.querySelector(hamburgerSelector);

    menuLinks.forEach(item => {
        item.addEventListener('click', () => {
            if(hamburger.classList.contains('active')){
                $('.navigation, .basket, .hamburger, .menu').toggleClass('active');
            }
        });
    });

    $(hamburgerSelector).on('click', ()=> {
        $('.navigation, .basket, .hamburger, .menu').toggleClass('active');
    });

    $(basketSelector).on('click', ()=> {
        if(navigation.classList.contains('active')){
            $('.navigation, .basket, .hamburger, .menu').toggleClass('active');
        }
    });
}

export default Hamburger;