$(document).ready(function () {

    $("a").click(function (event) {
        let nav = event.target.id;
        console.log(nav)
        switch (nav) {
            case (nav = 'home'):
                $('html, body').animate({
                    scrollTop: $(".home").offset().top
                }, 2000);
                break;
            case (nav = 'about'):
                $('html, body').animate({
                    scrollTop: $(".about").offset().top
                }, 2000);
                break;
            case (nav = 'projects'):
                $('html, body').animate({
                    scrollTop: $(".projects").offset().top
                }, 2000);
                break;
            case (nav = 'hire'):
                $('html, body').animate({
                    scrollTop: $(".hire").offset().top
                }, 2000);
                break;
            case (nav = 'contact'):
                $('html, body').animate({
                    scrollTop: $(".contact").offset().top
                }, 2000);
                break;
            case (nav = 'others'):
                $('html, body').animate({
                    scrollTop: $(".others").offset().top
                }, 2000);
                break;
        }
    });

})
