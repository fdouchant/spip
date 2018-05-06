/* JS imports */
require("jquery");
require("js-cookie");
require("lettering.js");
require("textillate");
require("jquery-colorbox");
require("bootstrap");

/* CSS imports */
require("./styles/main.scss");

jQuery(function ($) {

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