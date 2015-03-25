/*
* 记录 layer
* @author Allenice
* @date 2015-01-23
* */

define([
  'app/layout/RecordLayout'
], function(recordLatoutFunc) {
  var res = FG.res;

  var layer = cc.Layer.extend({

    ctor: function (targetLayer) {
      this._super();

      this.targetLayer = targetLayer;

      recordLatoutFunc.call(this);

      // 排名
      var scoreArr = FG.storage.getItem(FG.storage.SCORE);
      scoreArr.forEach(function(scoreObj, index) {
        this.recordLabel[index].setString((index+1) + '    ' + scoreObj.score);
        this.recordDateLabel[index].setString(FG.utils.dateFormat(scoreObj.date));
      }, this);
    }

  });

  FG.layer.Record = layer;

  return layer;
});