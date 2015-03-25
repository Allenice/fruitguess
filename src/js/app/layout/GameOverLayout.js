/*
* 游戏结束场景布局
*
* @author Allenice
* @date 2015-01-24
* */

define([], function() {
  var res = FG.res,
      winSize = cc.winSize;

  var layout = function() {
    // title
    var title = new cc.Sprite('#game_over.png');
    title.attr({
      x: winSize.width / 2,
      y: winSize.height / 2 + 200
    });

    this.addChild(title, 3);

    // score label
    this.scoreLabel = new cc.LabelBMFont('score: ' + FG.score, res.font.futura);
    this.scoreLabel.attr({
      x: winSize.width / 2,
      y: winSize.height / 2 + 100
    });


    this.addChild(this.scoreLabel, 3);

    // menu
    var home = new cc.Sprite('#button_bg1.png'),
        homeSelected = new cc.Sprite('#button_bg1.png'),
        share = new cc.Sprite('#button_bg1.png'),
        shareSelected = new cc.Sprite('#button_bg1.png'),
        retry = new cc.Sprite('#button_bg1.png'),
        retrySelected =  new cc.Sprite('#button_bg1.png'),

        homeMenuItem = new cc.MenuItemSprite(home, homeSelected, this.onHomeMenuClick, this),
        shareMenuItem = new cc.MenuItemSprite(share, shareSelected, this.onShareMenuClick, this),
        retryMenuItem = new cc.MenuItemSprite(retry, retrySelected, this.onRetryMenuClick, this);

    homeSelected.setColor(cc.color(200, 200, 0));
    shareSelected.setColor(cc.color(200, 200, 0));
    retrySelected.setColor(cc.color(200, 200, 0));

    var menu = new cc.Menu(homeMenuItem, shareMenuItem, retryMenuItem);
    menu.attr({
      x: winSize.width / 2,
      y: winSize.height / 2 - 20
    });

    menu.alignItemsHorizontallyWithPadding(20);

    this.addChild(menu, 3);

    // 各图标对应的 icon
    this.homeIcon = new cc.Sprite('#home.png');
    this.shareIcon = new cc.Sprite('#share.png');
    this.retryIcon = new cc.Sprite('#retry.png');

    this.homeIcon.attr({
      x: 230,
      y: winSize.height / 2 - 20
    });

    this.shareIcon.attr({
      x: 360,
      y: winSize.height / 2 - 20
    });

    this.retryIcon.attr({
      x: 495,
      y: winSize.height / 2 - 20
    });

    this.addChild(this.homeIcon, 4);
    this.addChild(this.shareIcon, 4);
    this.addChild(this.retryIcon, 4);

  };

  return layout;

});