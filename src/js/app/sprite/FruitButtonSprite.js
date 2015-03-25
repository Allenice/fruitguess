/*
* 水果按钮
* @author Allenice
* @date 2015-01-24
* */

define([], function() {
  var res = FG.res,
      winSize = cc.winSize;

  FG.sprite.FruitButton = cc.Sprite.extend({
    ctor: function (fruitType) {
      // 设置按钮背景
      this._super('#button_bg1.png');

      this.fruitType = fruitType;
      this.fruitTexture = '#fruit_' + fruitType + '_s.png';

      var contentSize = this.getContentSize();
      // 设置对应按钮图案
      this.fruit = new cc.Sprite(this.fruitTexture);
      this.fruit.attr({
        x: contentSize.width /  2,
        y: contentSize.height / 2
      });
      this.addChild(this.fruit);
    },

    // 将图案设置成未知
    setUnknown: function(flag) {
     flag ? this.fruit.setSpriteFrame('unknow.png') : this.fruit.setSpriteFrame(this.fruitTexture.substr(1));
    }

  });
});