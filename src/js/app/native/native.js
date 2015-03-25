/*
 * 调用 native 代码
 * @author Allenice
 * @date 2015-02-02
 * */

define([
  'app/native/android',
  'app/native/ios',
  'app/native/web'
], function (android, ios, web) {

  switch (cc.sys.platform) {
    case cc.sys.ANDROID:
      FG.native = android;
      break;
    case cc.sys.IPHONE:
      FG.native = ios;
      break;
    default:
      FG.native = web;
      break;
  }

  return FG.native;
});