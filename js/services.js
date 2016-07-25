angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 1,
    name: '服务器',
    lastText: '3478次',
    face: 'img/ben.png'
  }, {
    id: 2,
    name: '数据库',
    lastText: '3478次',
    face: 'img/max.png'
  }, {
    id: 3,
    name: '网络设备',
    lastText: '3478次',
    face: 'img/adam.jpg'
  }, {
    id: 4,
    name: '未知字段未知字段段未知字段段未知字段未知',
    lastText: '3478次',
    face: 'img/perry.png'
  }, {
    id: 5,
    name: '机房设备',
    lastText: '3478次',
    face: 'img/mike.png'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});
