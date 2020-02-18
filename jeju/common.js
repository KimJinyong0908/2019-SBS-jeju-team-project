/* 해녀 실행*/
$('.bottom-bar > .img-girl').click(function() {
    $(this).parent().toggleClass('active');
});

/* 장바구니 클릭 나오게 */
$('.menu-bar > .menu-bar-2 > ul > li > a').click(function(){
    $(this).toggleClass('active');
});

/*로그인 나오게*/
$('.txtb input').on("focus",function(){
    $(this).addClass("focus");
});

$('.txtb input').on("bulr",function(){
    if($(this).val() == "")
    $(this).removeClass("focus");
});



 function showLeftSideBar() {
    // 사이드바를 보여준다.(즉 active 클래스를 추가한다.)
    $('.login-form > .index').addClass('active');
    // bg를 보여준다.
    $('.login-form > .index-bg').css('display', 'block');
}

// 이 함수는 left side bar 를 숨겨주는 역할을 한다.
var hideLeftSideBar = function() {
    // 사이드바를 숨긴다.(즉 active 클래스를 제거한다.)
    $('.login-form > .index').removeClass('active');
    // bg를 숨긴다.
    $('.login-form > .index-bg').css('display', 'none');
}


$('.loginbtn').click(showLeftSideBar);
$('.login-form > .index-bg').click(hideLeftSideBar);