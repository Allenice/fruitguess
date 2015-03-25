/*
* 主界面布局
* @author Allenice
* @date 2015-01-23
* */


define([
  'app/common/resource',
  'app/layer/RecordLayer'
], function(res) {

  var layout = function() {
    var self = this,
        winSize = cc.winSize;
    
    // title
    this.title = new cc.Sprite(res.img.title);
    this.title.attr({
      x: winSize.width / 2,
      y: winSize.height + 150
    });

    this.addChild(this.title, 3, 3);

    // 开始按钮
    var startSprite = new cc.Sprite('#start.png'),
        startSpriteSelected = new cc.Sprite('#start.png'),
        startMenuItem = new cc.MenuItemSprite(startSprite, startSpriteSelected, this.onStartMenuClick, this);

    startSpriteSelected.setColor(cc.color(128, 128, 0));

    this.startMenu = new cc.Menu(startMenuItem);

    this.startMenu.attr({
      x: -200,
      y: winSize.height / 2 + 50
    });
    this.addChild(this.startMenu, 4, 4);

    // 音乐，记录，分享，退出按钮
    var musicBg = FG.musicOn ? '#button_bg1.png' : '#button_dis.png';
    var music = new cc.Sprite(musicBg),
        musicSelected = new cc.Sprite(musicBg),
        record = new cc.Sprite('#button_bg1.png'),
        recordSelected = new cc.Sprite('#button_bg1.png'),
        share = new cc.Sprite('#button_bg1.png'),
        shareSelected = new cc.Sprite('#button_bg1.png'),
        exit = new cc.Sprite('#button_bg1.png'),
        exitSelected = new cc.Sprite('#button_bg1.png'),

        musicMenuItem = new cc.MenuItemSprite(music, musicSelected, this.onMusicMenuClick, this),
        recordMenuItem = new cc.MenuItemSprite(record, recordSelected, this.onRecordMenuClick, this),
        shareMenuItem = new cc.MenuItemSprite(share, shareSelected, this.onShareMenuClick, this),
        exitMenuItem = new cc.MenuItemSprite(exit, exitSelected, this.onExitMenuClick, this);

    musicSelected.setColor(cc.color(200, 200, 0));
    recordSelected.setColor(cc.color(200, 200, 0));
    shareSelected.setColor(cc.color(200, 200, 0));
    exitSelected.setColor(cc.color(200, 200, 0));

    this.menu = new cc.Menu(musicMenuItem, recordMenuItem, shareMenuItem);

    if(cc.sys.platform === cc.sys.ANDROID) {
      this.menu.addChild(exitMenuItem);
    }

    this.menu.attr({
      x: winSize.width / 2,
      y: -50
    });

    this.menu.alignItemsHorizontallyWithPadding(25);

    this.addChild(this.menu, 5, 5);

    // 各菜单对应的图标
    var musicIcon = new cc.Sprite('#music.png'),
        recordIcon = new cc.Sprite('#record.png'),
        shareIcon = new cc.Sprite('#share.png'),
        exitIcon = new cc.Sprite('#exit.png'),
        iconPos = cc.p(55, 55);

    musicMenuItem.addChild(musicIcon);
    recordMenuItem.addChild(recordIcon);
    shareMenuItem.addChild(shareIcon);
    exitMenuItem.addChild(exitIcon);

    musicIcon.setPosition(iconPos);
    recordIcon.setPosition(iconPos);
    shareIcon.setPosition(iconPos);
    exitIcon.setPosition(iconPos);

    // 底部水果
    var fruitTextures = FG.utils.shuffle([].concat(FG.fruits, FG.fruits));
    this.fruits = [];

    fruitTextures.forEach(function(texture) {
      var sprite = new cc.Sprite('#fruit_' + texture + '.png');
      self.fruits.push(sprite);
      sprite.attr({
        anchorX: 0,
        anchorY: 0,
        x: FG.utils.random(0, 600),
        y: 0
      });
      self.addChild(sprite, 7);
    });

    // 记录
    this.recordLayer = new FG.layer.Record(this);
    this.recordLayer.attr({
      x: winSize.width + 10,
      y: 0
    });
    this.addChild(this.recordLayer, 8);

  }

  return layout;

});