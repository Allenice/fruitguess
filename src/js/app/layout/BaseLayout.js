/*
 * 公共布局
 * @author Allenice
 * @date 2015-01-23
 * */


define([
  'app/common/resource'
], function(res) {

  var layout = function() {
    var winSize = cc.winSize;

    // 草地背景
    var bgMap = new cc.TMXTiledMap(res.tmx.ground);
    this.addChild(bgMap, 1, 1);

    // 遮罩
    var maskLayer = new cc.Sprite(res.img.mask);
    maskLayer.attr({
      anchorX: 0,
      anchorY: 0
    });
    this.addChild(maskLayer, 200, 200);

  }

  return layout;

});