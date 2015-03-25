水果猜猜猜
------
水果猜猜猜是使用 cocos2d-js v3.2 开发的一款游戏，有 android 版和 IOS 版。游戏下载地址： [http://game.allenice233.com/fruitguess/](http://game.allenice233.com/fruitguess/)

## 运行
水果猜猜猜使用 [grunt](http://gruntjs.com/) 构建，所以需要 [nodejs](https://nodejs.org/) 的运行环境，并安装 grunt。
```bash
# clone 或直接下载 zip 包
git clone git@github.com:Allenice/fruitguess.git

# 创建 cocos2d-js 游戏
cd fruitguess
mkdir game
cd game
cocos new fruitguess -l js -d ./

# 返回上层目录，fruitguess
cd ..

# 安装 npm 包
npm install

# 初始化项目
grunt init
```

运行 grunt init 后，游戏就可以运行了，打开 game/fruitguess/index.html 查看游戏。注意一定要运行在 http 服务器。

## 开发
修改代码时，请执行 grunt 任务
```javascript
grunt
```

## navtive 相关
游戏集成了分享、广告、统计这三个跟 native 相关的功能。这部分的代码没有开源出来是因为涉及到敏感数据。其实 js 调用 native 代码页很简单，只是用 jsb.reflection.callStaticMethod 这个方法就完成了，具体使用请参考：

 - IOS：http://cocos2d-x.org/docs/manual/framework/html5/v3/reflection-oc/zh
 - Android： http://cocos2d-x.org/docs/manual/framework/html5/v3/reflection/zh

至于哪个功能要用哪一家的 SDK, 这个自己决定。一般这些 sdk 文档都比较详细，所以我这里也不写了。