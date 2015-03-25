/*
 * 调用 Android 代码
 * @author Allenice
 * @date 2015-02-02
 * */

define(function () {
  return {

    // 显示分享
    showShare: function (score) {
      score = score || '';
      jsb.reflection.callStaticMethod("com/allenice/fruitguess/AppActivity", "showShare", "(I)V", score);
    },

    // 显示广告
    showAd: function() {
      jsb.reflection.callStaticMethod("com/allenice/fruitguess/AppActivity", "showAd", "()V");
    },

    // 场景统计
    fireEvent: function(eventId) {
      jsb.reflection.callStaticMethod("com/allenice/fruitguess/AppActivity", "fireEvent", "(Ljava/lang/String;)V", eventId);
    }

  }
});