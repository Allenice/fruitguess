/*
 * 调用 web 代码
 * @author Allenice
 * @date 2015-02-02
 * */

define(function () {
  return {

    // 显示分享
    showShare: function (score) {
      cc.log('share');
    },

    // 显示广告
    showAd: function() {
      cc.log('ad');
    },

    // 场景统计
    fireEvent: function(eventId) {
      cc.log('fireEvent' + eventId);
    }

  }
});