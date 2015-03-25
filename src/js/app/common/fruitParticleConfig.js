/*
* 水果爆炸粒子配置
* @author Allenice
* @date 2015-02-06
* */


define([], function() {

  var config = {};

  config[FG.fruit.apple] = {
    startColor: cc.color(255, 0, 0),
    endColor: cc.color(255, 255, 255),
    particleCount: 100
  };

  config[FG.fruit.banana] = {
    startColor: cc.color(244, 214, 9),
    endColor: cc.color(250, 229, 255),
    particleCount: 50
  }

  config[FG.fruit.cherry] = {
    startColor: cc.color(255, 0, 0),
    endColor: cc.color(255, 255, 255),
    particleCount: 10
  };

  config[FG.fruit.grape] = {
    startColor: cc.color(144, 109, 244),
    endColor: cc.color(255, 255, 255),
    particleCount: 50
  };

  config[FG.fruit.pear] = {
    startColor: cc.color(244, 214, 9),
    endColor: cc.color(255, 255, 255),
    particleCount: 100
  };


  config[FG.fruit.pineapple] = {
    startColor: cc.color(244, 214, 9),
    endColor: cc.color(250, 229, 255),
    particleCount: 100
  };

  config[FG.fruit.strawberry] = {
    startColor: cc.color(255, 0, 0),
    endColor: cc.color(255, 255, 255),
    particleCount: 50
  };

  config[FG.fruit.watermelon] = {
    startColor: cc.color(255, 0, 0),
    endColor: cc.color(255, 0, 0),
    particleCount: 200
  };



  return config;
});