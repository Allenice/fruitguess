/*
 * 调用 IOS 代码
 * @author Allenice
 * @date 2015-02-02
 * */

define(function () {
  return {

    // 显示分享
    showShare: function (score) {
      jsb.reflection.callStaticMethod('RootViewController', 'showShare:', 'arg');
    },

    // 显示广告
    showAd: function() {
      jsb.reflection.callStaticMethod('RootViewController', 'showAd:', 'arg');
    },

    // 场景统计
    fireEvent: function(eventId) {
      jsb.reflection.callStaticMethod('RootViewController', 'fireEvent:', eventId);
    }

  }
});