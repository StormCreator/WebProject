function Hamburger(hamburgerSelector, linksSelector, basketSelector){

    const menuLinks = document.querySelectorAll(linksSelector);

    console.log('toggle active');

    menuLinks.forEach(item => {
        item.addEventListener('click', () => {
            $('.navigation, .basket, .hamburger, .menu').toggleClass('active');
        });
    });

    $(hamburgerSelector).on('click', ()=> {
        $('.navigation, .basket, .hamburger, .menu').toggleClass('active');
    });

    $(basketSelector).on('click', ()=> {
        $('.navigation, .basket, .hamburger, .menu').toggleClass('active');
    });
}

export default Hamburger;