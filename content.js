$("document").ready(function(){
    var nav = $('#menu-bar');

    $(window).scroll(function () {
        if ($(this).scrollTop() > 10) {
            nav.addClass("f-nav");
        } else {
            nav.removeClass("f-nav");
        }
    });

    var fadeStart=100 // 100px scroll or less will equiv to 1 opacity
   ,fadeUntil=200 // 200px scroll or more will equiv to 0 opacity
   ,fading = $('#fading')
   ;

   $(window).bind('scroll', function(){
      var offset = $(document).scrollTop()
       ,opacity=0
       ;
       if( offset<=fadeStart ){
         opacity=1;
       }else if( offset<=fadeUntil ){
         opacity=1-offset/fadeUntil;
       }
       fading.css('opacity',opacity).html(opacity);
    });
});
