# 微信小游戏——飞翔的小鸟:bird:
### 模块拆解：

- game.js 游戏全局的入口文件
- main.js 程序的主类：初始化canvas和全局的对象，精灵和绑定点击事件
- Director.js 程序导演类，控制游戏的逻辑和精灵的创建和销毁，控制游戏主循环
- DataStore.js 存储需要长期保存、定时销毁的变量
- Resource.js 游戏资源的数组
- ResorceLoader.js 资源加载器，保证图片加载完了canvas才渲染
- Sprite.js 游戏精灵的基类。子类有背景、陆地、铅笔、小鸟等子类
- Background.js 背景类
- Land.js 陆地类
- UpPencil.js 上半部分的铅笔类
- DownPencil.js 下半部分的铅笔类
- Bird.js  小鸟类
- Score.js 计分器
- StartButton.js 重新开始按钮

canvas绘制图像是一层层叠加的，类似ps中的图层的概念

微信小游戏的代码分层和逻辑和Flutter的flame几乎是一致的。

