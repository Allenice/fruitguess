/*
* BaseLayer 所有场景的 Layer 都继承它
* * @author Allenice
 * @date 2015-01-23
* */

define([
  'app/common/resource',
  'app/layout/BaseLayout'
], function (res, baseLayoutFunc) {
  var BaseLayer = cc.Layer.extend({

    ctor: function () {
      this._super();
    },

    /**
     * 布局，调用一个布局方法处理布局，分离 UI 和 动作
     * @param layoutFunc 处理布局的方法
     */
    layout: function (layoutFunc) {
      // 公共布局
      baseLayoutFunc.call(this);

      // 场景布局
      layoutFunc.call(this);
    }

  });

  FG.layer.Base = BaseLayer;

  return BaseLayer;
});