/*
* 本地存储
* @author Allenice
* @date 2015-01-27
* */

define(function () {

	// 加密
	function encode(str) {
		if(!str) return str;

		var charArr = str.split(''),
				newCharArr = [];

		charArr.forEach(function (char) {
			newCharArr.push(String.fromCharCode(char.charCodeAt(0) + 10));
		});

		return newCharArr.join('');
	}

	// 解密
	function decode(str) {
		if(!str) return str;

		var charArr = str.split(''),
			newCharArr = [];

		charArr.forEach(function (char) {
			newCharArr.push(String.fromCharCode(char.charCodeAt(0) - 10));
		});

		return newCharArr.join('');
	}

	FG.storage = {
		VERSION: 'fg___f',
		SCORE: 'fg___u',
		MUSIC_ON: 'fg___c',
		INIT: 'fg___k',

		setItem: function (name, value) {
			cc.sys.localStorage.setItem(encode(name), encode(JSON.stringify(value)));
			return this;
		},

		getItem: function (name) {
			var data = decode(cc.sys.localStorage.getItem(encode(name))) || 'null';
			return JSON.parse(data);
		}
	};

	return FG.storage;
});