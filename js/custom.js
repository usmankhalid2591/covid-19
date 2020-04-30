var myNav = document.getElementById('nav');
var w = window.innerWidth;

window.onscroll = function () {
    if (document.body.scrollTop >= 1 || document.documentElement.scrollTop >= 1) {
        myNav.classList.add("bg-white");
        myNav.classList.add("navbar-light");
        myNav.classList.add("--covid-dark-shadow");
        myNav.classList.remove("navbar-dark");
        myNav.classList.remove("bg-transparent");

        var contactButton = document.getElementById('contactButton');
        contactButton.classList.add("text-white");

    } else {
        myNav.classList.add("bg-transparent");
        myNav.classList.add("navbar-dark");
        myNav.classList.remove("bg-white");
        myNav.classList.remove("navbar-light");
        myNav.classList.remove("--covid-dark-shadow");


    }
};


$('.owl-carousel').owlCarousel({
    loop: true,
    autoplay: true,
    margin: 10,
    nav: true,
    dots: true,
    responsive: {
        300: {
            items: 1
        }
    }
})


// Functions