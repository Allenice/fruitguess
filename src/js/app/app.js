/*
 * 游戏入口
 * */

define([
  'app/common/resource',
  'app/common/global',
  'app/common/utils',
  'app/common/storage',
  'app/native/native',
  'app/scene/TestScene',
  'app/scene/HomeScene'

], function () {
  var res = FG.res;
  cc.view.adjustViewPort(true);
  cc.view.setDesignResolutionSize(720, 1280, cc.ResolutionPolicy.SHOW_ALL);
  cc.view.resizeWithBrowserSize(true);

  // 初始化存储
  if(!FG.storage.getItem(FG.storage.INIT)) {
    FG.storage.setItem(FG.storage.SCORE, []);
    FG.storage.setItem(FG.storage.MUSIC_ON, true);
    FG.storage.setItem(FG.storage.VERSION, FG.version);
    FG.storage.setItem(FG.storage.INIT, true);
  }

  FG.musicOn = FG.storage.getItem(FG.storage.MUSIC_ON);

  //load resources
  cc.LoaderScene.preload(FG.res.preloadSet, function () {
    //  texture cache
    cc.spriteFrameCache.addSpriteFrames(res.plist.button);
    cc.spriteFrameCache.addSpriteFrames(res.plist.fruit);
    cc.spriteFrameCache.addSpriteFrames(res.plist.half);
    cc.spriteFrameCache.addSpriteFrames(res.plist.other);

    cc.director.runScene(new FG.scene.Home());
  }, this);
});