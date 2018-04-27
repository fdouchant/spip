jQuery(function ($) {

    // set the carousel options
    $('#quote-carousel').carousel({
        pause: true,
        interval: 6000,
    });

    // activate textillate
    $('.tlt').textillate();

    // show newsletter modal once and after 5 sec
    setTimeout(function () {
        var newsletterCookieName = "newsletterModalShown";
        if (!Cookies.get(newsletterCookieName)) {
            if ($("#newsletterModal").length) {
                $("#newsletterModal").modal('show');
                Cookies.set(newsletterCookieName, 1, {expires: 365});
            }
        }
    }, 5000);

});