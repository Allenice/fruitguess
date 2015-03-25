/*
 * 工具函数
 * @author Allenice
 * @date 2015-01-23
 * */

define(function () {
  FG.utils = {
    /**
     * 元素是否在数组中
     * @param element
     * @param array
     * @returns {boolean}
     */
    inArray: function (element, array) {
      return array.indexOf(element) >= 0;
    },

    /**
     * 生成随机整数
     * @param min
     * @param max
     * @returns {*}
     */
    random: function(min, max) {
      if (max == null) {
        max = min;
        min = 0;
      }
      return min + Math.floor(Math.random() * (max - min + 1));
    },

    /**
     * 将数组乱序
     * @param arr
     * @returns {*}
     */
    shuffle: function(arr) {
      var length = arr.length,
        shuffled = Array(length);
      for (var index = 0, rand; index < length; index++) {
        rand = this.random(0, index);
        if (rand !== index) shuffled[index] = shuffled[rand];
        shuffled[rand] = arr[index];
      }
      return shuffled;
    },

    /**
     * 格式化日期时间
     * @param time  时间戳
     */
    dateFormat: function(time) {
      var date = new Date(time),
          year = date.getFullYear(),
          month = date.getMonth() + 1,
          day = date.getDate(),
          hour = date.getHours(),
          min = date.getMinutes(),
          sec = date.getSeconds();

      function addZero(arg) {
        return arg < 10 ? '0' + arg : arg;
      }

      month = addZero(month);
      day = addZero(day);
      hour = addZero(hour);
      min = addZero(min);
      sec = addZero(sec);

      return year + '-' + month + '-' + day + ' ' + hour + ':' + min + ':' + sec;
    }
  };

  return FG.utils;
});