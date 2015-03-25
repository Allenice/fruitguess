/*
* 记录界面布局
* @author Allenice
* @date 2015-01-23
* */


define([], function() {
  var res = FG.res;

  var layout = function() {
    var self = this,
        winSize = cc.winSize;

    this.record = [];
    this.recordLabel = [];
    this.recordDateLabel = [];

    // 记录
    this.record[0] = new cc.Sprite('#record_bg.png');
    this.record[1] = new cc.Sprite('#record_bg.png');
    this.record[2] = new cc.Sprite('#record_bg.png');

    this.record[0].attr({
      x: winSize.width / 2,
      y: winSize.height / 2 + 150
    });
    this.record[1].attr({
      x: winSize.width / 2,
      y: winSize.height / 2
    });
    this.record[2].attr({
      x: winSize.width / 2,
      y: winSize.height / 2 - 150
    });

    this.addChild(this.record[0], 1);
    this.addChild(this.record[1], 1);
    this.addChild(this.record[2], 1);

    // record label
    var labelColor = cc.color(0, 255, 204),
      labelAttr = {
        anchorX: 0,
        anchorY: 0,
        x: 15,
        y: 15
      },
      dateLabelAttr = {
        anchorX: 1,
        anchorY: 0,
        x: 620,
        y: 23
      };

    this.recordLabel[0] = new cc.LabelTTF('', 'Arial', 48);
    this.recordLabel[1] = new cc.LabelTTF('', 'Arial', 48);
    this.recordLabel[2] = new cc.LabelTTF('', 'Arial', 48);

    this.recordLabel[0].setColor(labelColor);
    this.recordLabel[1].setColor(labelColor);
    this.recordLabel[2].setColor(labelColor);

    this.recordLabel[0].attr(labelAttr);
    this.recordLabel[1].attr(labelAttr);
    this.recordLabel[2].attr(labelAttr);


    this.record[0].addChild(this.recordLabel[0]);
    this.record[1].addChild(this.recordLabel[1]);
    this.record[2].addChild(this.recordLabel[2]);

    this.recordDateLabel[0] = new cc.LabelTTF('', 'Arial', 32);
    this.recordDateLabel[1] = new cc.LabelTTF('', 'Arial', 32);
    this.recordDateLabel[2] = new cc.LabelTTF('', 'Arial', 32);

    this.recordDateLabel[0].setColor(labelColor);
    this.recordDateLabel[1].setColor(labelColor);
    this.recordDateLabel[2].setColor(labelColor);

    this.recordDateLabel[0].attr(dateLabelAttr);
    this.recordDateLabel[1].attr(dateLabelAttr);
    this.recordDateLabel[2].attr(dateLabelAttr);


    this.record[0].addChild(this.recordDateLabel[0]);
    this.record[1].addChild(this.recordDateLabel[1]);
    this.record[2].addChild(this.recordDateLabel[2]);


    // home menu
    var home = new cc.Sprite('#button_bg1.png'),
      homeSelected = new cc.Sprite('#button_bg1.png'),
      homeMenuItem = new cc.MenuItemSprite(home, homeSelected, this.targetLayer.onHomeMenuClick, this.targetLayer);

    homeSelected.setColor(cc.color(128, 128, 0));

    this.homeMenu = new cc.Menu(homeMenuItem);
    this.homeMenu.attr({
      x: winSize.width / 2,
      y: winSize.height / 2 + 300
    });

    this.addChild(this.homeMenu, 1);

    // home icon
    this.homeIcon = new cc.Sprite('#home.png');
    this.homeIcon.attr({
      x: winSize.width / 2,
      y: winSize.height / 2 + 300
    });

    this.addChild(this.homeIcon, 8);


  };

  return layout;
});