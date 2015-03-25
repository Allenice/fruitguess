/*
 * 游戏首页场景
 * @author Allenice
 * @date 2015-01-23
 * */

define([
  'app/layout/HomeLayout',
  'app/layer/BaseLayer',
  'app/scene/GameScene',
  'app/scene/GameOverScene'
], function (homeLayout, homeLayout2) {

  var res = FG.res,
      winSize = cc.winSize;

  var HomeLayer = FG.layer.Base.extend({

    ctor: function () {
      this._super();

      // 布局
      this.layout(homeLayout);
      this.menuIn();

      if(FG.musicOn) {
        cc.audioEngine.playMusic(FG.res.audio.bg, true);
      }

      // 统计
      FG.native.fireEvent('homeScene');

    },

    // 开始菜单点击
    onStartMenuClick: function (sender) {
      this.menuOut();

      this.fruits.forEach(function(sprite) {
        var pos = sprite.getPosition(),
            move = cc.moveTo(1 + FG.utils.random(3, 10) * 0.1, cc.p(pos.x, winSize.height));

        move.easing(cc.easeBackOut());
        sprite.runAction(move);
      });

      setTimeout(function() {
        var scene = new FG.scene.Game();
        cc.director.runScene(scene);
      }, 1800);

    },

    // 音乐菜单点击
    onMusicMenuClick: function (sender) {
      var musicMenu = this.menu.getChildren()[0];
      FG.musicOn = !FG.musicOn;
      FG.storage.setItem(FG.storage.MUSIC_ON, FG.musicOn);
      if(FG.musicOn) {
        cc.audioEngine.playMusic(res.audio.bg);
        musicMenu.getNormalImage().setSpriteFrame('button_bg1.png');

      } else {
        cc.audioEngine.stopMusic();
        musicMenu.getNormalImage().setSpriteFrame('button_dis.png');
      }
    },

    // 记录菜单点击
    onRecordMenuClick: function (sender) {
      this.menuOut();
      this.recordIn();

      // 统计
      FG.native.fireEvent('rankClick');
    },

    // 分享菜单点击
    onShareMenuClick: function (sender) {
      FG.native.showShare();
    },

    // 退出菜单点击
    onExitMenuClick: function (sender) {
      // 统计
      FG.native.fireEvent('exit');

      cc.director.end();
    },

    // 回到主界面
    onHomeMenuClick: function() {
      this.menuIn();
      this.recordOut();
    },

    menuIn: function() {
      var duration = 0.3;

      // title, 所有菜单移入界面
      this.title.runAction(cc.moveTo(duration, cc.p(winSize.width / 2, winSize.height / 2 + 200)));
      this.startMenu.runAction(cc.moveTo(duration, cc.p(winSize.width / 2, winSize.height / 2 + 50)));
      this.menu.runAction(cc.moveTo(duration, cc.p(winSize.width / 2, winSize.height / 2 - 200)));
    },

    menuOut: function(flag) {
      var duration = 0.3;

      // title, 所有菜单移出界面
      this.title.runAction(cc.moveTo(duration, cc.p(winSize.width / 2, winSize.height + 150)));
      this.startMenu.runAction(cc.moveTo(duration, cc.p(-200, winSize.height / 2)));
      this.menu.runAction(cc.moveTo(duration, cc.p(winSize.width / 2, -50)));
    },

    // 记录 layout 进入界面
    recordIn: function() {
      this.recordLayer.runAction(cc.moveTo(0.3, cc.p(0, 0)));
    },

    // 记录 layout 进出界面
    recordOut: function() {
      this.recordLayer.runAction(cc.moveTo(0.3, cc.p(winSize.width + 10, 0)));
    }


  });

  // 主页场景
  FG.scene.Home = cc.Scene.extend({
    ctor: function () {
      this._super();

      var layer = new HomeLayer();
      this.addChild(layer, 1, 1);
    }
  });

  return FG.scene.Home;

});