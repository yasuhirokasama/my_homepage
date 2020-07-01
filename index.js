
// =====headernavi固定表示=====

jQuery(function () {
    var _window = $(window),
        _header = $('.site-header'),
        scrollBottom;
    
    _window.on('scroll',function(){     
        scrollBottom = $('.top-image').height();
        if(_window.scrollTop() > scrollBottom){
            _header.addClass('fixed');   
        }
        else{
            _header.removeClass('fixed');   
        }
    });
    
    _window.trigger('scroll');
});



// =====to PAGE TOPボタン=====

jQuery(function () {
    var appear = false;
    var pagetop = $('#page_top');
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) { //100pxスクロールしたら
            if (appear == false) {
                appear = true;
                pagetop.stop().animate({
                    'right': '0px' //右から0pxの位置に
                }, 300); //0.3秒かけて現れる
            }
        } else {
            if (appear) {
                appear = false;
                pagetop.stop().animate({
                    'right': '-50px' //右から-50pxの位置に
                }, 300); //0.3秒かけて隠れる
            }
        }
    });
    pagetop.click(function () {
        $('body, html').animate({ scrollTop: 0 }, 500); //0.5秒かけてトップへ戻る
        return false;
    });
});