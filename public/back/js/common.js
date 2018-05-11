/**
 * Created by Jepson on 2018/5/9.
 */

//禁用进度条
NProgress.configure({showSpinner: false});

//希望效果是,每次ajax提交 产生进度条 ajax完成 结束进度条

/**
 * ajax 全局事件
 * 1-ajaxComplete 只要请求完成就调用(不管成功或者失败)
 * 2-ajaxError 请求失败时调用
 * 3-ajaxSuccess请求成功时调用
 * 4-ajaxSend  请求发送时调用
 * 5-ajaxStart 第一个ajax开始发送的时候调用
 * 6-ajaxStop  最后一个ajax停止的时候调用*/
$(document).ajaxStart(function () {
  //开启进度条
  NProgress.start();
});

$(document).ajaxStop(function () {
  setTimeout(function () {
    //结束进度条
    NProgress.done();
  }, 500);
});


$(function () {

//1-公共的二级菜单切换功能
  $('.category').click(function () {
    
    $('.lt_aside .child').stop().slideToggle();
  });

//  2-点击菜单按钮,进行切换菜单
  $('.icon_menu').click(function () {
    $('.lt_aside').toggleClass("hidemenu");
    //  当菜单隐藏时,lt_tobar,lt_main都不需要padding-left了
    $('.lt_tobar').toggleClass("hidemenu");
    $('.lt_main').toggleClass("hidemenu");
  })
})