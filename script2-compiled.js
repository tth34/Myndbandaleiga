'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Myndbandaspilari = function () {
  function Myndbandaspilari() {
    _classCallCheck(this, Myndbandaspilari);
  }

  _createClass(Myndbandaspilari, [{
    key: 'loadJSON2',
    value: function loadJSON2(callback) {
      var xobj = new XMLHttpRequest();
      xobj.overrideMimeType('application/json');
      xobj.open('GET', 'videos.json', true);
      xobj.onreadystatechange = function () {
        // eslint-disable-line
        if (xobj.readyState == 4 && xobj.status == '200') {
          // eslint-disable-line
          callback(xobj.responseText);
        }
      };
      xobj.send(null);
    }
  }, {
    key: 'goJSON2',
    value: function goJSON2(audkenni) {
      var audkennid = audkenni;
      var self = this;
      this.loadJSON2(function (response) {
        // eslint-disable-line
        var data = JSON.parse(response);
        var audkenni2 = audkennid;
        self.Builder(data, audkenni2);
      });
    }
  }, {
    key: 'builderVilla',
    value: function builderVilla(id) {
      // eslint-disable-line
      var main = document.querySelector('main');
      var newH1 = document.createElement('h1');
      var newTextH1 = document.createTextNode('Myndbandaleiga');
      newH1.appendChild(newTextH1);
      main.appendChild(newH1);
      var newH2 = document.createElement('h2');
      var newTextH2 = document.createTextNode('Videó er ekki til');
      newH2.appendChild(newTextH2);
      main.appendChild(newH2);
      var newForm = document.createElement('form');
      newForm.action = '/index.html';
      newForm.method = 'GET';
      main.appendChild(newForm);
      var newInput = document.createElement('Input');
      newInput.type = 'submit';
      newInput.value = 'Til baka';
      newInput.classList.add('Bakktakki2');
      newForm.appendChild(newInput);
      var newDiv = document.createElement('div');
      newDiv.id = 'divid1';
      main.appendChild(newDiv);
      var back = document.createElement('input');
      back.type = 'image';
      back.src = 'back.svg';
      back.id = 'back';
      newDiv.appendChild(back);
      var play = document.createElement('input');
      play.type = 'image';
      play.src = 'play.svg';
      play.id = 'play';
      newDiv.appendChild(play);
      var mute = document.createElement('input');
      mute.type = 'image';
      mute.src = 'mute.svg';
      mute.id = 'mute';
      newDiv.appendChild(mute);
      var fullscreen = document.createElement('input');
      fullscreen.type = 'image';
      fullscreen.src = 'fullscreen.svg';
      fullscreen.id = 'fullscreen';
      newDiv.appendChild(fullscreen);
      var next = document.createElement('input');
      next.type = 'image';
      next.src = 'next.svg';
      next.id = 'next';
      newDiv.appendChild(next);
    }
  }, {
    key: 'Builder',
    value: function Builder(data, numer) {
      var main = document.querySelector('main');
      var newH1 = document.createElement('h1');
      var newTextH1 = document.createTextNode(data.videos[numer - 1].title);
      newH1.appendChild(newTextH1);
      main.appendChild(newH1);
      var newDiv = document.createElement('div');
      newDiv.classList.add('player');
      newDiv.id = 'divid';
      main.appendChild(newDiv);
      var newVid = document.createElement('video');
      newVid.width = '900';
      newVid.height = '650';
      newVid.id = data.videos[numer - 1].id;
      newVid.poster = data.videos[numer - 1].poster;
      newDiv.appendChild(newVid);
      var newSrc = document.createElement('source');
      newSrc.src = data.videos[numer - 1].video;
      newSrc.type = 'video/mp4';
      newVid.appendChild(newSrc);
      var newDiv2 = document.createElement('div');
      newDiv2.id = 'divid1';
      newDiv2.classList.add('myndband--controls');
      newDiv.appendChild(newDiv2);
      var playmid = document.createElement('input');
      playmid.type = 'image';
      playmid.src = 'play.svg';
      playmid.id = 'playmid';
      newDiv.appendChild(playmid);
      var back = document.createElement('input');
      back.type = 'image';
      back.src = 'back.svg';
      back.id = 'back';
      newDiv2.appendChild(back);
      var play = document.createElement('input');
      play.type = 'image';
      play.src = 'play.svg';
      play.id = 'play';
      newDiv2.appendChild(play);
      var mute = document.createElement('input');
      mute.type = 'image';
      mute.src = 'mute.svg';
      mute.id = 'mute';
      newDiv2.appendChild(mute);
      var fullscreen = document.createElement('input');
      fullscreen.type = 'image';
      fullscreen.src = 'fullscreen.svg';
      fullscreen.id = 'fullscreen';
      newDiv2.appendChild(fullscreen);
      var next = document.createElement('input');
      next.type = 'image';
      next.src = 'next.svg';
      next.id = 'next';
      newDiv2.appendChild(next);
      var newForm = document.createElement('form');
      newForm.action = '/index.html';
      newForm.method = 'GET';
      newDiv.appendChild(newForm);
      var newInput = document.createElement('Input');
      newInput.type = 'submit';
      newInput.value = 'Til baka';
      newInput.classList.add('Bakktakki');
      newForm.appendChild(newInput);
      var duration = data.videos[numer - 1].duration; //eslint-disable-line
      next.duration = duration;
      playmid.addEventListener('click', this.playmid);
      newVid.addEventListener('click', this.playvideo);
      back.addEventListener('click', this.back);
      play.addEventListener('click', this.play);
      mute.addEventListener('click', this.mute);
      fullscreen.addEventListener('click', this.fullscreen);
      next.addEventListener('click', this.next);
    }
  }, {
    key: 'playmid',
    value: function playmid() {
      var vid = document.querySelector('video');
      var button = document.getElementById('play');
      var buttonmid = document.getElementById('playmid');
      var newDiv = document.getElementById('divid');
      if (button.src.slice(-9) === 'pause.svg') {
        var playmid = document.createElement('input');
        playmid.type = 'image';
        playmid.src = 'play.svg';
        playmid.id = 'playmid';
        newDiv.appendChild(playmid);
      } else {
        newDiv.removeChild(buttonmid);
      }
      if (button.src.slice(-9) === 'pause.svg') {
        button.src = 'play.svg';
        vid.pause();
      } else {
        button.src = 'pause.svg';
        vid.play();
      }
    }
  }, {
    key: 'playvideo',
    value: function playvideo() {
      var vid = document.querySelector('video');
      var button = document.getElementById('play');
      var buttonmid = document.getElementById('playmid');
      var newDiv = document.getElementById('divid');
      if (button.src.slice(-9) === 'pause.svg') {
        var playmid = document.createElement('input');
        playmid.type = 'image';
        playmid.src = 'play.svg';
        playmid.id = 'playmid';
        newDiv.appendChild(playmid);
        playmid.addEventListener('click', function () {
          // eslint-disable-line
          var buttonmid = document.getElementById('playmid'); // eslint-disable-line
          var button = document.getElementById('play'); // eslint-disable-line
          var vid = document.querySelector('video'); // eslint-disable-line
          newDiv.removeChild(buttonmid);
          button.src = 'pause.svg';
          vid.play();
        });
      } else {
        newDiv.removeChild(buttonmid);
      }
      if (button.src.slice(-9) === 'pause.svg') {
        button.src = 'play.svg';
        vid.pause();
      } else {
        button.src = 'pause.svg';
        vid.play();
      }
    }
  }, {
    key: 'play',
    value: function play() {
      var vid = document.querySelector('video');
      var button = document.getElementById('play');
      var buttonmid = document.getElementById('playmid');
      var newDiv = document.getElementById('divid');
      if (button.src.slice(-9) === 'pause.svg') {
        var playmid = document.createElement('input');
        playmid.type = 'image';
        playmid.src = 'play.svg';
        playmid.id = 'playmid';
        newDiv.appendChild(playmid);
        playmid.addEventListener('click', function () {
          // eslint-disable-line
          var buttonmid = document.getElementById('playmid'); //eslint-disable-line
          var button = document.getElementById('play'); // eslint-disable-line
          var vid = document.querySelector('video'); //eslint-disable-line
          newDiv.removeChild(buttonmid);
          button.src = 'pause.svg';
          vid.play();
        });
      } else {
        newDiv.removeChild(buttonmid);
      }
      if (button.src.slice(-9) === 'pause.svg') {
        button.src = 'play.svg';
        vid.pause();
      } else {
        button.src = 'pause.svg';
        vid.play();
      }
    }
  }, {
    key: 'mute',
    value: function mute() {
      var vid = document.querySelector('video'); // eslint-disable-line
      var button = document.getElementById('mute'); //eslint-disable-line
      if (button.src.slice(-10) === 'unmute.svg') {
        button.src = 'mute.svg';
        vid.muted = false;
      } else {
        button.src = 'unmute.svg';
        vid.muted = true;
      }
    }
  }, {
    key: 'fullscreen',
    value: function fullscreen() {
      var vid = document.querySelector('video');
      if (vid.requestFullscreen) {
        vid.requestFullscreen();
      } else if (vid.mozRequestFullScreen) {
        vid.mozRequestFullScreen();
      } else if (vid.webkitRequestFullscreen) {
        vid.webkitRequestFullscreen();
      }
    }
  }, {
    key: 'back',
    value: function back() {
      var vid = document.querySelector('video');
      var time = vid.currentTime;
      vid.pause();
      if (vid.currentTime < 3) {
        vid.currentTime = 0;
      } else {
        vid.currentTime = time - 3;
      }
      vid.play();
    }
  }, {
    key: 'next',
    value: function next() {
      var vid = document.querySelector('video'); //eslint-disable-line
      var time = vid.currentTime;
      var duration = vid.duration; // eslint-disable-line
      vid.pause();
      if (vid.currentTime + 3 < duration) {
        vid.currentTime = time + 3;
      } else {
        vid.currentTime = 0;
      }
      vid.play();
    }
  }]);

  return Myndbandaspilari;
}();

document.addEventListener('DOMContentLoaded', function () {
  var id = window.location.href.slice('-1'); /* eslint linebreak-style: ['error', 'windows'] */
  if (id < 6) {
    /* eslint linebreak-style: ['error', 'windows'] */
    var newHeader = document.createElement('header'); /* eslint linebreak-style: ['error', 'windows'] */
    document.body.appendChild(newHeader); /* eslint linebreak-style: ['error', 'windows'] */
    var newMain = document.createElement('main'); /* eslint linebreak-style: ['error', 'windows'] */
    document.body.appendChild(newMain); /* eslint linebreak-style: ['error', 'windows'] */
    var myndbandaspilari = new Myndbandaspilari(); // eslint-disable-line
    myndbandaspilari.goJSON2(id); /* eslint linebreak-style: ['error', 'windows'] */
  } else {
    /* eslint linebreak-style: ['error', 'windows'] */
    var _id = window.location.href.slice('-1'); //eslint-disable-line
    var _newHeader = document.createElement('header'); /* eslint linebreak-style: ['error', 'windows'] */
    document.body.appendChild(_newHeader); /* eslint linebreak-style: ['error', 'windows'] */
    var _newMain = document.createElement('main'); /* eslint linebreak-style: ['error', 'windows'] */
    document.body.appendChild(_newMain); /* eslint linebreak-style: ['error', 'windows'] */
    var _myndbandaspilari = new Myndbandaspilari(); //eslint-disable-line
    _myndbandaspilari.builderVilla(_id); /* eslint linebreak-style: ['error', 'windows'] */
  } /* eslint linebreak-style: ['error', 'windows'] */
}); /* eslint linebreak-style: ['error', 'windows'] */

//# sourceMappingURL=script2-compiled.js.map