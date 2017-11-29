'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Myndbandaleiga = function () {
  function Myndbandaleiga() {
    _classCallCheck(this, Myndbandaleiga);
  }

  _createClass(Myndbandaleiga, [{
    key: 'loadJSON',
    value: function loadJSON(callback) {
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
    key: 'goJSON',
    value: function goJSON() {
      var self = this;
      this.loadJSON(function (response) {
        // eslint-disable-line
        var data = JSON.parse(response);
        self.show(data);
      });
    }
  }, {
    key: 'show',
    value: function show(data) {
      var Main = document.querySelector('main');
      var img = document.querySelector('img');
      Main.removeChild(img);
      var newH1 = document.createElement('h1');
      var textiH1 = document.createTextNode(data.categories[0].title);
      var Div = document.querySelector('.listi');
      Div.appendChild(newH1);
      newH1.appendChild(textiH1);
      var newDivC = document.createElement('div');
      newDivC.classList.add('listi--content');
      Div.appendChild(newDivC);
      var newDiv = document.createElement('div');
      newDiv.classList.add('myndband');
      newDivC.appendChild(newDiv);
      var newVid = document.createElement('video');
      newVid.width = '470';
      newVid.height = '500';
      newVid.id = data.videos[0].id;
      newVid.poster = data.videos[0].poster;
      newDiv.appendChild(newVid);
      var newP = document.createElement('p');
      newP.classList.add('bottomright');
      var newTextP = document.createTextNode(this.calculateTime(data.videos[0].duration));
      newP.appendChild(newTextP);
      newDiv.appendChild(newP);
      var newSrc = document.createElement('source');
      newSrc.src = data.videos[0].video;
      newSrc.type = 'video/mp4';
      newVid.appendChild(newSrc);
      var newSpan = document.createElement('span');
      newSpan.classList.add('fyrirsogn');
      var textiSpan = document.createTextNode(data.videos[0].title);
      newSpan.appendChild(textiSpan);
      newDiv.appendChild(newSpan);
      newSpan = document.createElement('span');
      newSpan.classList.add('posted');
      textiSpan = document.createTextNode(this.calculateDates(data.videos[0].created));
      newSpan.appendChild(textiSpan);
      newDiv.appendChild(newSpan);
      newDiv = document.createElement('div');
      newDiv.classList.add('myndband');
      newDivC.appendChild(newDiv);
      newVid = document.createElement('video');
      newVid.width = '470';
      newVid.height = '500';
      newVid.id = data.videos[1].id;
      newVid.poster = data.videos[1].poster;
      newDiv.appendChild(newVid);
      newP = document.createElement('p');
      newP.classList.add('bottomright');
      newTextP = document.createTextNode(this.calculateTime(data.videos[0].duration));
      newP.appendChild(newTextP);
      newDiv.appendChild(newP);
      newSrc = document.createElement('source');
      newSrc.src = data.videos[1].video;
      newSrc.type = 'video/mp4';
      newVid.appendChild(newSrc);
      newSpan = document.createElement('span');
      newSpan.classList.add('fyrirsogn');
      textiSpan = document.createTextNode(data.videos[1].title);
      newSpan.appendChild(textiSpan);
      newDiv.appendChild(newSpan);
      newSpan = document.createElement('span');
      newSpan.classList.add('posted');
      textiSpan = document.createTextNode(this.calculateDates(data.videos[1].created));
      newSpan.appendChild(textiSpan);
      newDiv.appendChild(newSpan);
      Main = document.querySelector('main');
      var newHr = document.createElement('hr');
      Main.appendChild(newHr);
      var newStoraDiv = document.createElement('div');
      newStoraDiv.classList.add('listi');
      Main.appendChild(newStoraDiv);
      newH1 = document.createElement('h1');
      textiH1 = document.createTextNode(data.categories[1].title);
      newH1.appendChild(textiH1);
      newStoraDiv.appendChild(newH1);
      newDivC = document.createElement('div');
      newDivC.classList.add('listi--content');
      newStoraDiv.appendChild(newDivC);
      newDiv = document.createElement('div');
      newDiv.classList.add('myndband');
      newDivC.appendChild(newDiv);
      newVid = document.createElement('video');
      newVid.width = '470';
      newVid.height = '500';
      newVid.id = data.videos[0].id;
      newVid.poster = data.videos[0].poster;
      newDiv.appendChild(newVid);
      newP = document.createElement('p');
      newP.classList.add('bottomright');
      newTextP = document.createTextNode(this.calculateTime(data.videos[0].duration));
      newP.appendChild(newTextP);
      newDiv.appendChild(newP);
      newSrc = document.createElement('source');
      newSrc.src = data.videos[0].video;
      newSrc.type = 'video/mp4';
      newVid.appendChild(newSrc);
      newSpan = document.createElement('span');
      newSpan.classList.add('fyrirsogn');
      textiSpan = document.createTextNode(data.videos[0].title);
      newSpan.appendChild(textiSpan);
      newDiv.appendChild(newSpan);
      newSpan = document.createElement('span');
      textiSpan = document.createTextNode(this.calculateDates(data.videos[0].created));
      newSpan.appendChild(textiSpan);
      newDiv.appendChild(newSpan);
      newDiv = document.createElement('div');
      newDiv.classList.add('myndband');
      newDivC.appendChild(newDiv);
      newVid = document.createElement('video');
      newVid.width = '470';
      newVid.height = '500';
      newVid.id = data.videos[2].id;
      newVid.poster = data.videos[2].poster;
      newDiv.appendChild(newVid);
      newP = document.createElement('p');
      newP.classList.add('bottomright');
      newTextP = document.createTextNode(this.calculateTime(data.videos[0].duration));
      newP.appendChild(newTextP);
      newDiv.appendChild(newP);
      newSrc = document.createElement('source');
      newSrc.src = data.videos[2].video;
      newSrc.type = 'video/mp4';
      newVid.appendChild(newSrc);
      newSpan = document.createElement('span');
      newSpan.classList.add('fyrirsogn');
      textiSpan = document.createTextNode(data.videos[2].title);
      newSpan.appendChild(textiSpan);
      newDiv.appendChild(newSpan);
      newSpan = document.createElement('span');
      newSpan.classList.add('posted');
      textiSpan = document.createTextNode(this.calculateDates(data.videos[2].created));
      newSpan.appendChild(textiSpan);
      newDiv.appendChild(newSpan);
      newDiv = document.createElement('div');
      newDiv.classList.add('myndband');
      newDivC.appendChild(newDiv);
      newVid = document.createElement('video');
      newVid.width = '470';
      newVid.height = '500';
      newVid.id = data.videos[3].id;
      newVid.poster = data.videos[3].poster;
      newDiv.appendChild(newVid);
      newP = document.createElement('p');
      newP.classList.add('bottomright');
      newTextP = document.createTextNode(this.calculateTime(data.videos[0].duration));
      newP.appendChild(newTextP);
      newDiv.appendChild(newP);
      newSrc = document.createElement('source');
      newSrc.src = data.videos[3].video;
      newSrc.type = 'video/mp4';
      newVid.appendChild(newSrc);
      newSpan = document.createElement('span');
      newSpan.classList.add('fyrirsogn');
      textiSpan = document.createTextNode(data.videos[3].title);
      newSpan.appendChild(textiSpan);
      newDiv.appendChild(newSpan);
      newSpan = document.createElement('span');
      newSpan.classList.add('posted');
      textiSpan = document.createTextNode(this.calculateDates(data.videos[3].created));
      newSpan.appendChild(textiSpan);
      newDiv.appendChild(newSpan);
      newHr = document.createElement('hr');
      Main.appendChild(newHr);
      newStoraDiv = document.createElement('div');
      newStoraDiv.classList.add('listi');
      Main.appendChild(newStoraDiv);
      newH1 = document.createElement('h1');
      newStoraDiv.appendChild(newH1);
      textiH1 = document.createTextNode(data.categories[2].title);
      newH1.appendChild(textiH1);
      newDivC = document.createElement('div');
      newDivC.classList.add('listi--content');
      newStoraDiv.appendChild(newDivC);
      newDiv = document.createElement('div');
      newDiv.classList.add('myndband');
      newDivC.appendChild(newDiv);
      newVid = document.createElement('video');
      newVid.width = '470';
      newVid.height = '500';
      newVid.id = data.videos[1].id;
      newVid.poster = data.videos[1].poster;
      newDiv.appendChild(newVid);
      newP = document.createElement('p');
      newP.classList.add('bottomright');
      newTextP = document.createTextNode(this.calculateTime(data.videos[0].duration));
      newP.appendChild(newTextP);
      newDiv.appendChild(newP);
      newSrc = document.createElement('source');
      newSrc.src = data.videos[1].video;
      newSrc.type = 'video/mp4';
      newVid.appendChild(newSrc);
      newSpan = document.createElement('span');
      newSpan.classList.add('fyrirsogn');
      textiSpan = document.createTextNode(data.videos[1].title);
      newSpan.appendChild(textiSpan);
      newDiv.appendChild(newSpan);
      newSpan = document.createElement('span');
      textiSpan = document.createTextNode(this.calculateDates(data.videos[1].created));
      newSpan.appendChild(textiSpan);
      newDiv.appendChild(newSpan);
      newDiv = document.createElement('div');
      newDiv.classList.add('myndband');
      newDivC.appendChild(newDiv);
      newVid = document.createElement('video');
      newVid.width = '470';
      newVid.height = '500';
      newVid.id = data.videos[2].id;
      newVid.poster = data.videos[2].poster;
      newDiv.appendChild(newVid);
      newP = document.createElement('p');
      newP.classList.add('bottomright');
      newTextP = document.createTextNode(this.calculateTime(data.videos[0].duration));
      newP.appendChild(newTextP);
      newDiv.appendChild(newP);
      newSrc = document.createElement('source');
      newSrc.src = data.videos[2].video;
      newSrc.type = 'video/mp4';
      newVid.appendChild(newSrc);
      newSpan = document.createElement('span');
      newSpan.classList.add('fyrirsogn');
      textiSpan = document.createTextNode(data.videos[2].title);
      newSpan.appendChild(textiSpan);
      newDiv.appendChild(newSpan);
      newSpan = document.createElement('span');
      newSpan.classList.add('posted');
      textiSpan = document.createTextNode(this.calculateDates(data.videos[2].created));
      newSpan.appendChild(textiSpan);
      newDiv.appendChild(newSpan);
      newDiv = document.createElement('div');
      newDiv.classList.add('myndband');
      newDivC.appendChild(newDiv);
      newVid = document.createElement('video');
      newVid.width = '470';
      newVid.height = '500';
      newVid.id = data.videos[3].id;
      newVid.poster = data.videos[3].poster;
      newDiv.appendChild(newVid);
      newP = document.createElement('p');
      newP.classList.add('bottomright');
      newTextP = document.createTextNode(this.calculateTime(data.videos[0].duration));
      newP.appendChild(newTextP);
      newDiv.appendChild(newP);
      newSrc = document.createElement('source');
      newSrc.src = data.videos[3].video;
      newSrc.type = 'video/mp4';
      newVid.appendChild(newSrc);
      newSpan = document.createElement('span');
      newSpan.classList.add('fyrirsogn');
      textiSpan = document.createTextNode(data.videos[3].title);
      newSpan.appendChild(textiSpan);
      newDiv.appendChild(newSpan);
      newSpan = document.createElement('span');
      newSpan.classList.add('posted');
      textiSpan = document.createTextNode(this.calculateDates(data.videos[3].created));
      newSpan.appendChild(textiSpan);
      newDiv.appendChild(newSpan);
      newHr = document.createElement('hr');
      Main.appendChild(newHr);
      var vidjo = document.querySelectorAll('video');
      for (var i = 0; i < vidjo.length; i++) {
        // eslint-disable-line
        vidjo[i].addEventListener('click', this.submit);
      }
    }
  }, {
    key: 'submit',
    value: function submit() {
      var newForm = document.createElement('form');
      newForm.id = 'formid';
      newForm.action = '/video.html';
      var newInput = document.createElement('input');
      newInput.type = 'hidden';
      newInput.name = 'id';
      newInput.value = this.id;
      newForm.appendChild(newInput);
      document.body.appendChild(newForm);
      newForm.submit();
      document.body.removeChild(newForm);
      this.clear; // eslint-disable-line
    }
  }, {
    key: 'calculateDates',
    value: function calculateDates(old) {
      var d = new Date();
      var nutimi = d.getTime() - old;
      var day = Math.round(nutimi / 24 / 60 / 60 / 1000);
      if (day < 2) {
        return 'Fyrir einum degi síðan';
      } else if (day < 7) {
        return 'Fyrir ' + day + ' d\xF6gum s\xED\xF0an';
      } else if (day === 7) {
        return 'Fyrir einni viku síðan';
      } else if (day < 30) {
        return 'Fyrir ' + Math.round(day / 7) + ' vikum s\xED\xF0an';
      } else if (day === 30) {
        return 'Fyrir einum mánuði síðan';
      } else if (day < 360) {
        return 'Fyrir ' + Math.round(day / 30) + ' m\xE1nu\xF0um s\xED\xF0an';
      } else if (day === 360) {
        return 'Fyrir einu ári síðan';
      } else {
        // eslint-disable-line
        return 'Fyrir ' + Math.round(day / 360) + ' \xE1rum s\xED\xF0an';
      }
    }
  }, {
    key: 'Refresh1',
    value: function Refresh1() {
      var main = document.querySelector('main');
      while (main.hasChildNodes()) {
        main.removeChild(main.lastChild);
      }
      var Header = document.querySelector('header');
      var newH1 = document.createElement('h1');
      var textiH1 = document.createTextNode('Myndbandaleigan');
      newH1.appendChild(textiH1);
      Header.appendChild(newH1);
      var Main = document.querySelector('main');
      var newDiv = document.createElement('div');
      newDiv.classList.add('listi');
      Main.appendChild(newDiv);
      var myndbandaleiga = new Myndbandaleiga();
      myndbandaleiga.goJSON();
    }
  }, {
    key: 'calculateTime',
    value: function calculateTime(old) {
      var minutur = Math.floor(old / 60);
      var sekundur = old % 60;
      if (sekundur < 10) {
        return minutur + ':0' + sekundur;
      } else {
        // eslint-disable-line
        return minutur + ':' + sekundur;
      }
    }
  }]);

  return Myndbandaleiga;
}();

document.addEventListener('DOMContentLoaded', function () {
  var newHeader = document.createElement('header');
  var newH1 = document.createElement('h1');
  var textiH1 = document.createTextNode('Myndbandaleigan');
  newH1.appendChild(textiH1); /* eslint linebreak-style: ["error", "windows"] */
  newHeader.appendChild(newH1); /* eslint linebreak-style: ["error", "windows"] */
  document.body.appendChild(newHeader); /* eslint linebreak-style: ["error", "windows"] */
  var newMain = document.createElement('main'); /* eslint linebreak-style: ["error", "windows"] */
  document.body.appendChild(newMain); /* eslint linebreak-style: ["error", "windows"] */
  var newDiv = document.createElement('div'); /* eslint linebreak-style: ["error", "windows"] */
  newDiv.classList.add('listi'); /* eslint linebreak-style: ["error", "windows"] */
  newMain.appendChild(newDiv); /* eslint linebreak-style: ["error", "windows"] */
  var myndbandaleiga = new Myndbandaleiga(); /* eslint linebreak-style: ["error", "windows"] */
  var img = document.createElement('img');
  img.setAttribute('src', 'loading.gif');
  newMain.appendChild(img);
  myndbandaleiga.goJSON(); /* eslint linebreak-style: ["error", "windows"] */
}); /* eslint linebreak-style: ["error", "windows"] */

//# sourceMappingURL=script-compiled.js.map