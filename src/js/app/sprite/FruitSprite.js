/*
* 水果
* @author Allenice
* @date 2015-01-26
* */


define([
  'app/common/fruitParticleConfig'
], function(pConfig) {
  var res = FG.res,
      winSize = cc.winSize;

  FG.sprite.Fruit = cc.Sprite.extend({
    ctor: function(fruitType) {
      this.fruitType = fruitType;
      this.fruitTexture = '#fruit_' + fruitType + '.png';
      this._super(this.fruitTexture);
      this.attr({
        x: FG.utils.random(60, winSize.width - 70),
        y: winSize.height + 100
      });

      this.speed = (this.y - 320) / 6;

    },

    // 掉落
    fall: function() {
      var pos = this.getPosition(),
          move = cc.moveTo(6, cc.p(pos.x, 320)),
          rotate = cc.rotateBy(6, 360),
          cbFunc = cc.callFunc(function() {
            FG.gameLayer.gameOver();
          }, this);

      this.moveSpeed = move.getSpeed();
      this.runAction(cc.sequence(cc.spawn(move, rotate), cbFunc));
    },

    // 销毁
    destroy: function() {
      var pos = this.getPosition(),
          size = this.getContentSize(),
          sprite1 = new cc.Sprite('#half_'+ this.fruitType +'_l.png'),
          sprite2 = new cc.Sprite('#half_'+ this.fruitType +'_r.png'),
          emitter = FG.gameLayer.fruitEmitter,
          config = pConfig[this.fruitType];

      FG.gameLayer.removeChild(this);
      if(FG.musicOn) {
        cc.audioEngine.playEffect(res.audio.effect);
      }

      if(!emitter.visible) {
        emitter.visible = true;
      }

      emitter.attr({
        x: pos.x,
        y: pos.y
      });

     if(config) {
       emitter.setStartColor(config.startColor);
       emitter.setEndColor(config.endColor);
       emitter.setTotalParticles(config.particleCount);
     }

      emitter.resetSystem();

      // 水果破碎掉落
      var x1 = pos.x - size.width / 4 - 10,
          x2 = pos.x + size.width / 4 + 10,
          duration = (pos.y - 320) / (this.speed * 4),
          rotate1 = cc.rotateTo(0.5, -45),
          rotate2 = cc.rotateTo(0.5, 45),
          move1 = cc.moveTo(duration, cc.p(x1 - 30, 320)),
          move2 = cc.moveTo(duration, cc.p(x2 + 30, 320));

      sprite1.attr({
        x: x1,
        y: pos.y
      });

      sprite2.attr({
        x: x2,
        y: pos.y
      });

      FG.gameLayer.addChild(sprite1, 5);
      FG.gameLayer.addChild(sprite2, 5);

      sprite1.runAction(cc.sequence(cc.spawn(move1, rotate1), cc.callFunc(function() {
        FG.gameLayer.removeChild(sprite1);
        FG.gameLayer.removeChild(sprite2);
      }, this)));

      sprite2.runAction(cc.spawn(move2, rotate2));


    }
  });

  return FG.sprite.Fruit;
});