/*
* 资源
* */

define(function() {
  var res = {
    img: {
      title: 'res/img/title.png',
      mask: 'res/img/mask.png',
      ground: 'res/tmx/ground.png',
      button: 'res/plist/button.png',
      fruit: 'res/plist/fruit.png',
      half: 'res/plist/fruit-half.png',
      other: 'res/plist/other.png',
      futura: 'res/font/futura-48.png'
    },
    plist: {
      button: 'res/plist/button.plist',
      fruit: 'res/plist/fruit.plist',
      half: 'res/plist/fruit-half.plist',
      other: 'res/plist/other.plist'
    },
    tmx: {
      ground: 'res/tmx/ground.tmx'
    },
    font: {
      futura: 'res/font/futura-48.fnt'
    },
    audio: {
      bg: 'res/audio/bg.mp3',
      fail: 'res/audio/fail.mp3',
      effect: 'res/audio/effect.mp3'
    },
    particle: {
      wm: 'res/particle/wm.plist'
    }
  };

  // 资源预加载数组
  res.preloadSet = [];

  for(var key in res.img) {
    res.preloadSet.push(res.img[key]);
  }

  for(var key in res.plist) {
    res.preloadSet.push(res.plist[key]);
  }

  for(var key in res.tmx) {
    res.preloadSet.push(res.tmx[key]);
  }

  for(var key in res.font) {
    res.preloadSet.push(res.font[key]);
  }

  for(var key in res.audio) {
    res.preloadSet.push(res.audio[key]);
  }

  for(var key in res.particle) {
    res.preloadSet.push(res.particle[key]);
  }

  FG.res = res;

  return res;
});