/**
 * Created by Administrator on 2017/10/9.
 */
/**
 * Created by Administrator on 2017/10/9.
 */
$(".yanzheng").mouseover(function () {
    $(".tishi").show();
})
$(".yanzheng").mouseout(function () {
    $(".tishi").hide();
})
//����Ƶ� ��עDR ��ʾ�����˵�
$("#guanzhudr").mouseover(function () {
    $("#guanzhudr-b").show();
});
$("#guanzhudr").mouseout(function () {
    $("#guanzhudr-b").hide();
});
//����Ƶ� �ֻ����� ��ʾ�����˵�
$('#shoujigw').mouseover(function () {
    $('#sjgw-b').show();
});
$('#shoujigw').mouseout(function () {
    $('#sjgw-b').hide();
});
//����Ƶ� ������ ��ʾ�����˵�
$("#language").mouseover(function () {
    $('#languageb').show();
});
$("#language").mouseout(function () {
    $('#languageb').hide();
});
//����Ƶ� ȫ������ ��ʾ�����˵�
$('#aaa').mouseover(function () {
    $(this).addClass("act")
    $('#map').show();
});
$('#aaa').mouseout(function () {
    $('#map').hide();
    $(this).removeClass("act")
    $('#map').css("zIndex","20");
});
$('#map').mouseover(function () {
    $(this).show();
    $("#aaa").addClass("act")
});
$('#map').mouseout(function () {
    $(this).hide();
    $("#aaa").removeClass("act")
});
//============================
console.log($('#nav>li'));
console.log($('#nav>li>div'));
$('#nav>li').mouseover(function () {
    $('#nav>li>div').eq($(this).index()).show();
});
$('#nav>li').mouseout(function () {
    $('#nav>li>div').eq($(this).index()).hide();
});
//��鵼����)
$("#QHl li").mouseover(function () {
    $("#QHlimg li").eq($(this).index()).show().siblings().hide();
});
$("#QHr li").mouseover(function () {
    $("#QHrimg li").eq($(this).index()).show().siblings().hide();
});
//���ĵ�����
$("#ADl li").mouseover(function () {
    $("#ADlimg li").eq($(this).index()).show().siblings().hide();
});
$("#ADr li").mouseover(function () {
    $("#ADrimg li").eq($(this).index()).show().siblings().hide();
});

//    �ֲ�ͼ
var timer = null;
var k = 0;
$("#list>li>span").mouseenter(function () {
    k = $(this).parent().index();
    core();
});
autoPlay();
function autoPlay() {
    timer = setInterval(function () {
        k++;
        (k > $("#lbtt>li").length - 1) && (k = 0);
        core();
    }, 2000);
}
function core() {
    $("#list>li>span").eq(k).addClass("yuan").parent().siblings().children().removeClass("yuan");
    $(this).eq(k).siblings().find('span').removeClass("yuan");
    $("#lbtt>li").eq(k).stop().fadeIn(800).siblings().stop().fadeOut(800);
}
$("#lbt").mouseenter(function () {
    clearInterval(timer);
    timer = null;
});
$("#lbt").mouseleave(function () {
    autoPlay();
});
$("#Next").click(function () {
    k++;
    (k > $("#lbtt>li").length - 1) && (k = 0);
    core();
});
$("#Prev").click(function () {
    k--;
    (k < 0) && (k = $("#lbtt>li").length - 1);
    core();
});




//=============================================
$(".xpb").mouseover(function () {
    var idx = $(this).index();
    $(".Top").eq(idx).stop().animate({top:0},300, "linear");
    $(".Left").eq(idx).stop().animate({left:0},300, "linear");
    $(".Right").eq(idx).stop().animate({left:190},300, "linear");
});
$(".xpb").mouseout(function () {
    var idx = $(this).index();
    $(".Top").eq(idx).stop().animate({top:-200},300, "linear");
    $(".Left").eq(idx).stop().animate({left:-190},300, "linear");
    $(".Right").eq(idx).stop().animate({left:390},300, "linear");
});
$(".fix>li").mouseover(function () {
    var idx = $(this).index();
    $("#fixbot>div").eq(idx).show().siblings().hide();
});

//==================================================================
var num = $("#zyrz>li>a>i").eq(0).css("width");
var index = $("#zyrz>li>a>i").index();
$("#zyrz>li>a>i").css("backgroundPositionX","-index*num");
//����Ƶ� ������ ����ͼ �ƶ�
$("#zyrz>li>a>i").mouseover(function () {
    $(this).css("backgroundPositionY",'-60px');
});
$("#zyrz>li>a>i").mouseout(function () {
    $(this).css("backgroundPositionY",'0');
});
////============
////������� ��ע���� ��ʾ�����˵�

$('#guanzhu').mouseover(function () {
    $('#gzb').show();
});
$('#guanzhu').mouseout(function () {
    $('#gzb').hide();
});
$("#gzb>a").mouseover(function () {
    $(this).css("backgroundPositionY",'-68px');
});
$("#gzb>a").mouseout(function () {
    $(this).css("backgroundPositionY",'0');
});



