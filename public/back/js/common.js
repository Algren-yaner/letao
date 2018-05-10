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
