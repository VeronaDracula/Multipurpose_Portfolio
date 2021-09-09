jQuery(document).ready(function($){
    $(function(){
        $(".footer__button").bind('click', function(e){
            e.preventDefault();
            $('body,html').animate({scrollTop: 0}, 400);
        });
    });
});