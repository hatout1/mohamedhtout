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



    // firebase

    var firebaseConfig = {
        apiKey: "AIzaSyCTIveb-o4xcpNsQX-Zf1NfDCKHlM_zjnA",
        authDomain: "profile-38836.firebaseapp.com",
        databaseURL: "https://profile-38836.firebaseio.com",
        projectId: "profile-38836",
        storageBucket: "profile-38836.appspot.com",
        messagingSenderId: "812008865031",
        appId: "1:812008865031:web:262e46e9c9c765cfb699a2"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    const db = firebase.initializeApp(firebaseConfig)




})
