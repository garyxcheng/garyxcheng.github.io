$("document").ready(function(){
    var nav = $('#menu-bar');

    $(window).scroll(function () {
        if ($(this).scrollTop() > 10) {
            nav.addClass("f-nav");
        } else {
            nav.removeClass("f-nav");
        }
    });
});
