$(function(){


    /* GNB 서브메뉴 애니메이션 */
    $("#gnb li").mouseover(function(){
        $("#gnb ul.subMenu").stop().fadeIn(1000);
        $("#subMenuBG").stop().fadeIn(1000);
    });

    $("#gnb li").mouseout(function(){
        $("#gnb ul.subMenu").stop().fadeOut(600);
        $("#subMenuBG").stop().fadeOut(600);
    });
    /* GNB 서브메뉴 애니메이션 */


});
