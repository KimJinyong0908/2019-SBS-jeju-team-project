// 배경틀 자바
function selectPickImgBox (e) {
    var timeout = 0;
    var alreadyActived = $('.left-side-bar').hasClass('active');
    
    if ( alreadyActived ) {
        timeout = 500;
    }
    
    var thisHasClassActive = $(this).hasClass('select');
    
    // 사라지게 하는 로직
    unSelectPickImgBox(e);
    
    if ( thisHasClassActive == false ) {
        // 나오게 하는 로직
        var $this = $(this);
    
        var act = function() {
            $this.addClass('select');
            $this.siblings('.select').removeClass('select');
            $this.siblings().addClass('unselect');
            $('.left-side-bar').addClass('active');
            $('.row-select-menu-bar').addClass('active');
        };
        
        setTimeout(act, timeout);
    }
    
    e.stopPropagation();
    return false;
}

function unSelectPickImgBox (e) {
    $('.item-4 > ul > li').removeClass('select').removeClass('unselect');
    $('.left-side-bar').removeClass('active');
    $('.row-select-menu-bar').removeClass('active');

    e.stopPropagation();
    return false;
}

$('.item-4 > ul > li').click( selectPickImgBox );

$('.background-img-box').click(unSelectPickImgBox);

// 사이드바 자바

$('.left-side-bar > .left-menu-box-1 > .left-menu-list > .menu-6 > .img-list > .img-box').click(function () {

    // console.log('함수 작동 중');

    var originImgSliderHasClassActive = $('.origin-img-slider').hasClass('active');

    if ( originImgSliderHasClassActive ) {
        $('.origin-img-slider').removeClass('active');
    }

    else {
        $('.origin-img-slider').addClass('active');
    }

});

$('.origin-img-slider > button').click(function () {

    $('.origin-img-slider').removeClass('active');

});

$('.origin-img-slider > .origin-img-slider-side-bar > div').click(function () {

    var index = $(this).index();

    $current = $(this).parent().parent().find('div > .active');

    if ( index == 0 ) {
        if ( $current.prev().length > 0 ) {
            $current.removeClass('active');
            $current.prev().addClass('active');
        }
    }
    else {
        if ( $current.next().length > 0 ) {
            $current.removeClass('active');
            $current.next().addClass('active');
        }
    }

});

$('body > .active-icon').click(function () {

    //console.log('아이콘 클릭');

    var $activeIcoHasClassPlay = $('.active-icon').hasClass('play');

    if ($activeIcoHasClassPlay) {
        $('.active-icon').removeClass('play');
    }

    else {
        $('.active-icon').addClass('play');
    }

});