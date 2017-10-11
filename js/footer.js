var oZyrz = $("#zyrz");
var aZyrzi = $("i",oZyrz);
var imgW = aZyrzi[0].offsetWidth;
for (var i = 0; i < aZyrzi.length; i++) {
    aZyrzi[i].index = i;
    var k = aZyrzi[i].index;
    aZyrzi[i].style.backgroundPositionX = ""+-k*imgW+"px";
}
//鼠标移到 背景上 精灵图 移动
for (var i = 0; i < aZyrzi.length; i++) {
    aZyrzi[i].index = i;
    aZyrzi[i].onmouseover = function () {
        for (var i = 0; i < aZyrzi.length; i++) {
            aZyrzi[i].style.backgroundPositionY = '0';
        }
        aZyrzi[this.index].style.backgroundPositionY = '-60px';
    };
    aZyrzi[i].onmouseout = function () {
        for (var i = 0; i < aZyrzi.length; i++) {
            aZyrzi[i].style.backgroundPositionY = '0';
        }
    }
}
//============
//鼠标移上 关注我们 显示下拉菜单
var oGzuanzhu = $('#guanzhu');
var oGzb = $('#gzb');
var aGzba = $('a',oGzb);
var aAw = aGzba[0].offsetWidth;
oGzuanzhu.onmouseover = function () {
    oGzb.style.display = 'block';
};
oGzuanzhu.onmouseout = function () {
    oGzb.style.display = 'none';
};
for (var i = 0; i < aGzba.length; i++) {
    aGzba[i].index = i;
    var k = aGzba[i].index;
    aGzba[i].onmouseover = function () {
        for (var i = 0; i < aGzba.length; i++) {
            aGzba[i].style.backgroundPositionY = '0';
        }
        aGzba[this.index].style.backgroundPositionY = '-68px';
    };
    aGzba[i].onmouseout = function () {
        for (var i = 0; i < aGzba.length; i++) {
            aGzba[i].style.backgroundPositionY = '0';
        }
    };
}


