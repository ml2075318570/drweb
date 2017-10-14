
var num = $("#zyrz>li>a>i").eq(0).css("width");
var index = $("#zyrz>li>a>i").index();
$("#zyrz>li>a>i").css("backgroundPositionX","-index*num");
//鼠标移到 背景上 精灵图 移动
$("#zyrz>li>a>i").mouseover(function () {
    $(this).css("backgroundPositionY",'-60px');
});
$("#zyrz>li>a>i").mouseout(function () {
    $(this).css("backgroundPositionY",'0');
});
////============
////鼠标移上 关注我们 显示下拉菜单

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



