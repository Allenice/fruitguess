/*
* 游戏结束场景
* @author Allenice
* @date 2015-01-24
* */

define([
  'app/layout/GameOverLayout',
  'app/layer/BaseLayer'
], function(gameOverLayoutFunc) {
  var res = FG.res,
      winSize = cc.winSize;

  var GameOverLayer = FG.layer.Base.extend({
    ctor: function() {
      this._super();
      this.layout(gameOverLayoutFunc);

      if(FG.musicOn) {
        cc.audioEngine.playEffect(res.audio.fail);
      }

      // 显示广告
      FG.native.showAd();

      // 统计
      FG.native.fireEvent('gameOverScene');

    },

    onHomeMenuClick: function(sender) {
      var scene = new FG.scene.Home();
      cc.director.runScene(scene);
    },

    onShareMenuClick: function(sender) {
      FG.native.showShare(FG.score);
    },

    onRetryMenuClick: function (sender) {
      var scene = new FG.scene.Game();
      cc.director.runScene(scene);
    }

  });

  // 主页场景
  FG.scene.GameOver = cc.Scene.extend({
    ctor: function () {
      this._super();

      var layer = new GameOverLayer();
      this.addChild(layer, 1, 1);
    }
  });

  return FG.scene.GameOver;
});