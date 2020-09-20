import {ResourceLoader}  from "./js/base/ResourceLoader.js";
import {Director} from "./js/Director.js";
import {DataStore} from "./js/base/DataStore.js";
import {BackGround} from "./js/runtime/BackGround.js";
import {BeginButton} from "./js/player/BeginButton";
import {Land} from "./js/runtime/Land.js";
import {Birds} from "./js/player/Birds.js";
import {StartButton} from "./js/player/StartButton.js";
import {Score} from "./js/player/Score.js";
import { UserInfo } from "./js/getUserInfo.js";
export class Main{

    constructor() {
      this.canvas = wx.createCanvas();
      this.ctx = this.canvas.getContext('2d');
      this.director = Director.getInstance();
      this.dataStore = DataStore.getInstance();
      const loader = ResourceLoader.create();
      loader.onLoaded(map => this.onResourceFirstLoaded(map));
    }


        //创建背景音乐
    createBackgroundMusic() {
          const bgm = wx.createInnerAudioContext();
          bgm.autoplay = true;
          bgm.loop = true;
          bgm.src = 'audio/bgm.mp3';
    }

    // 图片资源首次加载
    onResourceFirstLoaded(map) {
    this.createBackgroundMusic();
      // console.log(map);
      this.dataStore.canvas = this.canvas;
      this.dataStore.ctx = this.ctx;
      this.dataStore.res = map;

    //   const button = wx.createUserInfoButton({
    //     type: 'text',
    //     text: '登录游戏',
    //     style: {
    //       left: 10,
    //       top: 76,
    //       width: 200,
    //       height: 40,
    //       lineHeight: 40,
    //       backgroundColor: '#e67e22',
    //       color: '#ffffff',
    //       textAlign: 'center',
    //       fontSize: 16,
    //       borderRadius: 4
    //     }
    //   })
    //   button.onTap((res) => {
    //     // 此处可以获取到用户信息
    //     // console.log(res)
    //   })

      const user = new UserInfo();
      user.download();
    //   user.getUserInfo();

    //   user.login();
    //   user.getSettings();

      this.init();
      this.director.isGameOver = true;
    }


    init() {
      //首先重置游戏是没有结束的
      this.director.isGameOver = false;
      this.dataStore
          .put('pencils', [])
          .put('background', BackGround)
          .put('land', Land)
          .put('birds', Birds)
          .put('score', Score)
          .put('startButton', StartButton);

      this.registerEvent();

      //创建铅笔要在游戏逻辑运行之前
      this.director.createPencil();
      this.director.run();
  }


  registerEvent() {
    // this.canvas.addEventListener('touchstart', e => {
    //     //屏蔽掉JS的事件冒泡
    //     e.preventDefault();
    //     if (this.director.isGameOver) {
    //         console.log('游戏开始');
    //         this.init();
    //     } else {
    //         this.director.birdsEvent();
    //     }
    // });

    wx.onTouchStart(() => {
        if (this.director.isGameOver) {
            console.log('游戏开始');
            this.init();
        } else {
            this.director.birdsEvent();
        }
    });
}

}