/*
* 游戏主场景
*
* @author Allenice
* @date 2015-01-24
* */


define([
  'app/layout/GameLayout',
  'app/common/levelHelper',
  'app/sprite/FruitSprite'
], function(gameLayoutFunc, levelHelper) {
  var res = FG.res,
      winSize = cc.winSize;

  var GameLayer = FG.layer.Base.extend({

    score: 0,

    // 正在掉落的水果
    fruits: [],

    // 当前关卡已掉落的水果数目
    fellCount: 0,

    // 水果粒子发射器是否已经添加到 layer
    isEmitterAdded: false,

    ctor: function() {
      this._super();
      FG.gameLayer = this;

      // 初始化数据
      this.score = FG.score = 0;
      this.fruits = [];
      this.fellCount = 0;
      this.isEmitterAdded = false;

      // 水果爆炸粒子
      this.fruitEmitter = new cc.ParticleSystem(res.particle.wm);
      this.fruitEmitter.visible = false;
      this.addChild(this.fruitEmitter, 5);

      // 布局
      this.layout(gameLayoutFunc);

      levelHelper.init(this);
      this.curLevelData = levelHelper.getCurLevelData();
      this.fruitLabel.setString(this.curLevelData.fruitCount - this.fellCount);

      // 水果掉落
      this.fallSchedule();

      this.nodeIn();

      cc.audioEngine.stopMusic();

      // 统计
      FG.native.fireEvent('gameScene');

    },

    nodeIn: function() {
      var duration = 0.4;
      this.scoreLabel.runAction(cc.moveTo(duration, cc.p(winSize.width - 15, winSize.height - 75)));
      this.homeMenu.runAction(cc.moveTo(duration, cc.p(75, winSize.height - 75)));
      this.homeIcon.runAction(cc.moveTo(duration, cc.p(75, winSize.height - 75)));
      this.woodBg.runAction(cc.moveTo(duration, cc.p(0, 0)));
    },

    nodeOut: function(callback) {
      var duration = 0.4;
      this.scoreLabel.runAction(cc.moveTo(duration, cc.p(-100, winSize.height - 75)));
      this.homeMenu.runAction(cc.moveTo(duration, cc.p(winSize.width + 75, winSize.height - 75)));
      this.homeIcon.runAction(cc.moveTo(duration, cc.p(winSize.width + 75, winSize.height - 75)));
      this.woodBg.runAction(cc.sequence(cc.moveTo(duration, cc.p(0, -370)), cc.callFunc(callback, this)));
    },

    //
    fallSchedule: function() {
      this.schedule(this.fruitFall, 1.5);
    },

    //
    fruitFall: function() {

      var fruit = new FG.sprite.Fruit(levelHelper.getRandomFruit());
      this.addChild(fruit, 3);
      this.fruits.push(fruit);
      fruit.fall();
      this.fellCount++;
      this.fruitLabel.setString(this.curLevelData.fruitCount - this.fellCount);

      if(levelHelper.isLastLevel()) {
        this.fruitLabel.visible = false;
      }

      // 判断是否到下一关
      if(this.fellCount >= this.curLevelData.fruitCount && !levelHelper.isLastLevel()) {
        this.fellCount = 0;
        this.curLevelData = levelHelper.next();

        this.unschedule(this.fruitFall);

        // 水果按钮重新布局
        this.relayout = true;
      } else {
        this.relayout = false;
      }
    },

    // 回首页
    onHomeMenuClick: function(sender) {
      var scene = new FG.scene.Home();
      cc.director.runScene(scene);
    },
    
    // 水果点击
    onFruitTouch: function(sprite) {
      if(this.fruits.length <= 0) return;

      var flag = false;
      this.fruits.every(function(fruit, index) {
        // 如果中了就有分，否则游戏结束
        if(fruit.fruitType === sprite.fruitType) {
          this.fruits.splice(index, 1);
          fruit.destroy();
          flag = true;

          // 计分
          this.score += this.curLevelData.score;
          this.scoreLabel.setString('score: '+ this.score);

          return false;
        }
        return true;
      }, this);

      if(this.fruits.length <= 0 && this.relayout) {
        levelHelper.layoutButton();
      }

      if(!flag) {
        this.gameOver();
        return;
      }
    },

    // 游戏结束
    gameOver: function() {

      this.unschedule(this.fruitFall);
      FG.score = this.score;

      // 保存排名
      var scoreArr = FG.storage.getItem(FG.storage.SCORE);
      scoreArr.push({
        score: FG.score,
        date: new Date().getTime()
      });
      scoreArr.sort(function(a, b) { return a.score < b.score });
      if(scoreArr.length > 3) {
        scoreArr = scoreArr.slice(0,3);
      }
      FG.storage.setItem(FG.storage.SCORE, scoreArr);

      if(this.curLevelData.level % 2 === 0) {
        this.buttonLayer.setUnknown(false);
      }

      this.fruits.forEach(function(fruit) {
        this.removeChild(fruit);
      }, this);

      this.nodeOut(function() {
        setTimeout(function() {
          var scene = new FG.scene.GameOver();
          cc.director.runScene(scene);
        }, 1500);
      });

    }
  });

  FG.scene.Game = cc.Scene.extend({
    ctor: function () {
      this._super();
      var layer = new GameLayer();
      this.addChild(layer, 1, 1);
    },
    onExit: function() {
      FG.gameLayer = null;
      this._super();
    }
  });

  return FG.scene.Game;


})
