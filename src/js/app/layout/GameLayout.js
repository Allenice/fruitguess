/*
* 游戏主场景布局
* @author Allenice
* @date 2015-01-24
* */

define([
  'app/layer/ButtonLayer'
], function() {
  var res = FG.res,
      winSize = cc.winSize;

  var layout = function () {
    // score label
    this.scoreLabel = new cc.LabelBMFont('score: ' + FG.score, res.font.futura);
    this.scoreLabel.attr({
      anchorX: 1,
      x: 15,
      y: winSize.height - 75
    });


    this.addChild(this.scoreLabel, 3);

    // 木板背景
    this.woodBg = new cc.Sprite('#wood_bg.png');
    this.woodBg.attr({
      anchorX: 0,
      anchorY: 0,
      x: 0,
      y: -370
    });
    this.addChild(this.woodBg, 4);

    // 水果按钮
    this.buttonLayer = new FG.layer.Button(this);
    this.buttonLayer.onFruitTouch = this.onFruitTouch;
    this.addChild(this.buttonLayer, 5);

    // home menu
    var home = new cc.Sprite('#button_bg1.png'),
      homeSelected = new cc.Sprite('#button_bg1.png'),
      homeMenuItem = new cc.MenuItemSprite(home, homeSelected, this.onHomeMenuClick, this);

    homeSelected.setColor(cc.color(128, 128, 0));

    this.homeMenu = new cc.Menu(homeMenuItem);
    this.homeMenu.attr({
      x: winSize.width - 75,
      y: winSize.height - 75
    });

    this.addChild(this.homeMenu, 6);

    // home icon
    this.homeIcon = new cc.Sprite('#home.png');
    this.homeIcon.attr({
      x: winSize.width - 75,
      y: winSize.height - 75
    });

    this.addChild(this.homeIcon, 6);

    // 显示当前关卡还剩多少水果
    this.fruitLabel = new cc.LabelTTF('0', 'Arial', 120);
    this.fruitLabel.attr({
      x: winSize.width / 2,
      y: winSize.height / 2 + 175,
      opacity: 160
    });
    this.fruitLabel.setColor(cc.color(0, 0, 0));
    this.addChild(this.fruitLabel, 3);

  };


  return layout;
});