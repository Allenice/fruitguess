/*
* 游戏场景的水果按钮布局
* @author Allenice
* @date 2015-01-24
* */

define([
  'app/layout/ButtonLayout'
], function(buttonLayout) {
  var res = FG.res,
      winSize = cc.winSize;

  FG.layer.Button = cc.Layer.extend({
    ctor: function(target) {
      var self = this;
      this._super();
      this.target = target;

      buttonLayout.init.call(this);
      this.setLayoutStyle(1);
      
      // 
      this.bindEvent();
    },
    
    bindEvent: function() {
        cc.eventManager.addListener({
          event: cc.EventListener.TOUCH_ONE_BY_ONE,
          swallowTouches: true,
          onTouchBegan: function (touch, event) {
            event.getCurrentTarget()._onTouchBegan(touch, event);
            return true;
          },
          onTouchMoved: function (touch, event) {
            event.getCurrentTarget()._onTouchMoved(touch, event);
          },
          onTouchEnded: function (touch, event) {
            event.getCurrentTarget()._onTouchEnded(touch, event);
          }
        }, this);
    },

    /**
     * 设置按钮布局样式
     * @param lv 第几种
     */
    setLayoutStyle: function(lv) {
      buttonLayout['style' + lv].call(this);
    },

    setUnknown: function(flag) {
      this.fruitSprites.forEach(function(sprite) {
        sprite.setUnknown(flag);
      })
    },

    buttonIn: function(callbck, tartget) {
      tartget = tartget || this;
      this.fruitSprites.forEach(function(sprite) {
        sprite.runAction(cc.scaleTo(0.5, 1));
      });

      setTimeout(function() {
        callbck.call(tartget);
      }, 1000);
    },

    buttonOut: function(callbck, tartget) {
      tartget = tartget || this;

      tartget = tartget || this;
      this.fruitSprites.forEach(function(sprite) {
        sprite.runAction(cc.scaleTo(0.5, 0));
      });

      setTimeout(function() {
        callbck.call(tartget);
      }, 1000);
    },

    /**
     * 点击水果事件，供 gameLayer 重写调用
     * @param sprite 点击了哪个水果
     */
    onFruitTouch: function(sprite) {},

    _onTouchBegan: function(touch, event) {
      var self = this,
        location = touch.getLocation();

      this.fruitSprites.forEach(function(node) {
        if(cc.rectContainsPoint(node.getBoundingBoxToWorld(), location)) {
          node.setScale(1.4);
          return;
        }
      });
    },
    
    _onTouchMoved: function(touch, event) {
    },

    _onTouchEnded: function(touch, event) {
      var self = this,
          location = touch.getLocation();

      this.fruitSprites.forEach(function(node) {
        if(cc.rectContainsPoint(node.getBoundingBoxToWorld(), location)) {
          node.setScale(1);
          self.onFruitTouch.call(self.target, node);
          return;
        }
      });
    }
    
    
  });

  return FG.layer.Button;
});