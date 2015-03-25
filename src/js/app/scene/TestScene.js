/*
*  测试用的 scene
* */


define([], function() {
  var res = FG.res,
      winSize = cc.winSize;

  var Layer = cc.Layer.extend({
    ctor: function() {
      this._super();


      var label = new cc.LabelTTF('text', 'Arial', 48);
      var menuItem = new cc.MenuItemLabel(label, this.showParticle, this);
      var menu = new cc.Menu(menuItem);

      menu.setPosition(cc.p(winSize.width / 2, winSize.height / 2));

      this.addChild(menu, 1);

    },

    showParticle: function(){
      var emittor = new cc.ParticleSystem(res.particle.wm);
      emittor.attr({
        x: winSize.width / 2,
        y: winSize.height / 2
      });

      this.addChild(emittor, 50);
    }

  });

  FG.scene.Test = cc.Scene.extend({
    ctor: function () {
      this._super();

      this.addChild(new Layer());
    }
  });
});