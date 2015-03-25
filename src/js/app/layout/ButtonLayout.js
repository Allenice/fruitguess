/*
* 游戏场景的水果按钮布局
* @author Allenice
* @date 2015-01-24
* */

define([
  'app/sprite/FruitButtonSprite'
], function() {

  var res = FG.res,
      winSize = cc.winSize;

  var layout = {

    // 初始化
    init: function() {
      var self = this;

      // 水果乱序
      FG.fruits = FG.utils.shuffle(FG.fruits);
      this.fruitSprites = [];
    },

    // 第一种按钮布局
    style1: function() {

      // 前四个显示
      for(var i = 0; i < 4; i++) {
        var sprite = new FG.sprite.FruitButton(FG.fruits[i]);
        sprite.attr({
          x: 110 + (56 + 110) * i,
          y: 160
        });
        this.fruitSprites.push(sprite);
        this.addChild(sprite);

      }

    },

    // 第二种布局
    style2: function() {
      // 第五个
      var sprite = new FG.sprite.FruitButton(FG.fruits[4]);
      this.fruitSprites.push(sprite);
      this.addChild(sprite);

      // 乱序
      this.fruitSprites = FG.utils.shuffle(this.fruitSprites);

      // 前四个上移
      for(var i = 0; i < 4; i++) {
        this.fruitSprites[i].attr({
          x: 110 + (56 + 110) * i,
          y: 240
        });
      }

      // 第五个位置
      this.fruitSprites[4].attr({
        x: winSize.width / 2,
        y: 100
      });
    },

    // 第三种布局
    style3: function() {
      // 第六个
      var sprite = new FG.sprite.FruitButton(FG.fruits[5]);
      this.fruitSprites.push(sprite);
      this.addChild(sprite);

      // 乱序
      this.fruitSprites = FG.utils.shuffle(this.fruitSprites);

      // 前四个位置
      for(var i = 0; i < 4; i++) {
        this.fruitSprites[i].attr({
          x: 110 + (56 + 110) * i,
          y: 240
        });
      }

      // 第五个位置
      this.fruitSprites[4].attr({
        x: 110 + (56 + 110) * 1,
        y: 100
      });

      // 第六个位置
      this.fruitSprites[5].attr({
        x: 110 + (56 + 110) * 2,
        y: 100
      });
    },

    // 第四种
    style4: function() {
      var sprite = new FG.sprite.FruitButton(FG.fruits[6]);
      this.fruitSprites.push(sprite);
      this.addChild(sprite);

      // 乱序
      this.fruitSprites = FG.utils.shuffle(this.fruitSprites);

      // 前四个位置
      for(var i = 0; i < 4; i++) {
        this.fruitSprites[i].attr({
          x: 110 + (56 + 110) * i,
          y: 240
        });
      }

      // 第五个位置
      this.fruitSprites[4].attr({
        x: winSize.width / 2 - 150,
        y: 100
      });

      // 第六个位置
      this.fruitSprites[5].attr({
        x: winSize.width / 2,
        y: 100
      });

      // 第七个位置
      this.fruitSprites[6].attr({
        x: winSize.width / 2 + 150,
        y: 100
      });

    },

    // 第五种
    style5: function() {
      var sprite = new FG.sprite.FruitButton(FG.fruits[7]);
      this.fruitSprites.push(sprite);
      this.addChild(sprite);

      // 乱序
      this.fruitSprites = FG.utils.shuffle(this.fruitSprites);

      var x, y;
      for(var i = 0; i < 8; i++) {
        y = i < 4 ? 240 : 100;
        x = i < 4 ? 110 + (56 + 110) * i : 110 + (56 + 110) * (i - 4);
        this.fruitSprites[i].attr({
          x: x,
          y: y
        });
      }
    }
  };

  return layout;

});