/*
* 全局变量
* */

define([
  'app/common/resource'
], function(res) {

  FG.version = '1.0.0';

  FG.musicOn = true;

  // 水果
  FG.fruit = {
    apple: 'apple',
    banana: 'ba',
    cherry: 'cherry',

    // 葡萄
    grape: 'grape',

    // 凤梨
    pineapple: 'pa',

    pear: 'pear',

    // 草莓
    strawberry: 'sb',

    // 西瓜
    watermelon: 'wm'
  };

  FG.fruits = [];

  for(var key in FG.fruit) {
    FG.fruits.push(FG.fruit[key]);
  }

  //
  FG.gameLayer = {};
  FG.score = 0;


});