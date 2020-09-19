$(function () {
    'use strict'
    //slider hight
        var  WindowHeight =$(window).height(),
             upperHeight  =$('.uppr-bar').innerHeight(),
             navHeight    =$('.nav-bar').innerHeight();
    $('.slider , .carousel-item').height(WindowHeight-(upperHeight+navHeight));
});