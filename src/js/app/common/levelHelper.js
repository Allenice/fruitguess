/*
* 关卡相关
* @author Allenice
* @date 2015-01-26
* */


define([], function() {
  var levelHelper = {
    curLevel: 1,
    gameLayer: null,

    init: function(gameLayer) {
      this.curLevel = 1;
      this.gameLayer = gameLayer;
    },

    // 返回下一关的数据
    next: function() {
      if(this.curLevel < this.data.length) {
        this.curLevel++;
        return this.data[this.curLevel - 1];
      }
    },

    // 是否是最后一关
    isLastLevel: function() {
      return this.curLevel === this.data.length;
    },

    // 返回当前关卡的数据
    getCurLevelData: function() {
      return this.data[this.curLevel - 1];
    },

    // 返回关卡随机水果
    getRandomFruit: function() {
      return FG.fruits[FG.utils.random(0, FG.gameLayer.buttonLayer.fruitSprites.length - 1)];
    },

    // 水果按钮重新布局
    layoutButton: function() {
      var layoutNum,
          bl = this.gameLayer.buttonLayer;

     bl.buttonOut(function() {

       // 偶数关卡是水果按钮变成问号
       if(this.curLevel %  2 === 0) {
         bl.setUnknown(true);
       } else {
         // 奇数关卡就换布局样式
         layoutNum = (this.curLevel + 1) / 2;
         bl.setLayoutStyle(layoutNum);
         bl.setUnknown(false);
       }

       bl.buttonIn(function() {
         FG.gameLayer.fallSchedule();
       }, this);
     }, this);

    },

    // 关卡数据
    data: [
      {
        level: 1,
        score: 10,
        fruitCount: 10
      },
      {
        level: 2,
        score: 20,
        fruitCount: 40
      },
      {
        level: 3,
        score: 10,
        fruitCount: 15
      },
      {
        level: 4,
        score: 20,
        fruitCount: 60
      },
      {
        level: 5,
        score: 10,
        fruitCount: 20
      },
      {
        level: 6,
        score: 20,
        fruitCount: 80
      },
      {
        level: 7,
        score: 10,
        fruitCount: 25
      },
      {
        level: 8,
        score: 20,
        fruitCount: 100
      },
      {
        level: 9,
        score: 10,
        fruitCount: 25
      },
      {
        level: 10,
        score: 20,
        fruitCount: 250
      }
    ]

    // 关卡数据
//    data: [
//      {
//        level: 1,
//        score: 10,
//        fruitCount: 2
//      },
//      {
//        level: 2,
//        score: 20,
//        fruitCount: 2
//      },
//      {
//        level: 3,
//        score: 10,
//        fruitCount: 2
//      },
//      {
//        level: 4,
//        score: 20,
//        fruitCount: 2
//      },
//      {
//        level: 5,
//        score: 10,
//        fruitCount: 2
//      },
//      {
//        level: 6,
//        score: 20,
//        fruitCount: 2
//      },
//      {
//        level: 7,
//        score: 10,
//        fruitCount: 2
//      },
//      {
//        level: 8,
//        score: 20,
//        fruitCount: 2
//      },
//      {
//        level: 9,
//        score: 10,
//        fruitCount: 2
//      },
//      {
//        level: 10,
//        score: 20,
//        fruitCount: 250
//      }
//    ]
  };

  return levelHelper;
});