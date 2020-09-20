// 获取用户信息

export class UserInfo {
  getUserInfo() {
    const params = {
      success: function (res) {
          console.log(res);
      }
    };
    wx.getUserInfo(params);
  }

  login() {
    wx.login({
        success: function (res) {
            console.log(res);
        }
      });
  }


    getSettings() {
      wx.getSetting({
          success: function (res) {
              console.log(JSON.stringify(res));
          }
      });
    }



    //Http网络请求的调用
    httpExample() {
      wx.request({
          url: 'http://127.0.0.1:8181/',
          method: 'POST',
          data: 'MyData',
          success: function (response) {
              console.log(response);
              //这里可以根据服务器的指示来做相应的动作
          }
      });

      // wx.request({
      //     url: 'https://www.baidu.com/',
      //     method: 'GET',
      //     success: function (response) {
      //         console.log(response);
      //         //这里可以根据服务器的指示来做相应的动作
      //     }
      // });
  }

  socketExample() {
      wx.connectSocket({
          url: 'ws://127.0.0.1:8282',
          success: function () {
              console.log('客户端连接成功');
          }
      });

      //注意，我们发送数据必须在wx.onSocketOpen中进行
      wx.onSocketOpen(function () {
          wx.sendSocketMessage({
              data: '这个是来自客户端的实时消息'
          });

          wx.onSocketMessage(function (message) {
              console.log(message);
          });
      });
  }

  download() {
      wx.downloadFile({
          url: 'https://giligili-yinlei.oss-cn-shanghai.aliyuncs.com/%E5%B0%B9%E7%A3%8A%E7%AE%80%E5%8E%86.pdf',
          success: function (temp) {
              console.log(JSON.stringify(temp));
          }
      });
  }
}