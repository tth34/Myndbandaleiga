class Myndbandaspilari {
  loadJSON2(callback) {
    const xobj = new XMLHttpRequest();
    xobj.overrideMimeType('application/json');
    xobj.open('GET', 'videos.json', true);
    xobj.onreadystatechange = function () { // eslint-disable-line
      if (xobj.readyState == 4 && xobj.status == '200') { // eslint-disable-line
        callback(xobj.responseText);
      }
    };
    xobj.send(null);
  }

  goJSON2(audkenni) {
    const audkennid = audkenni;
    const self = this;
    this.loadJSON2(function (response) { // eslint-disable-line
      const data = JSON.parse(response);
      const audkenni2 = audkennid;
      self.Builder(data, audkenni2);
    });
  }
  builderVilla(id) { // eslint-disable-line
    const main = document.querySelector('main');
    const newH1 = document.createElement('h1');
    const newTextH1 = document.createTextNode('Myndbandaleiga');
    newH1.appendChild(newTextH1);
    main.appendChild(newH1);
    const newH2 = document.createElement('h2');
    const newTextH2 = document.createTextNode('Videó er ekki til');
    newH2.appendChild(newTextH2);
    main.appendChild(newH2);
    const newForm = document.createElement('form');
    newForm.action = '/index.html';
    newForm.method = 'GET';
    main.appendChild(newForm);
    const newInput = document.createElement('Input');
    newInput.type = 'submit';
    newInput.value = 'Til baka';
    newInput.classList.add('Bakktakki2');
    newForm.appendChild(newInput);
    const newDiv = document.createElement('div');
    newDiv.id = 'divid1';
    main.appendChild(newDiv);
    const back = document.createElement('input');
    back.type = 'image';
    back.src = 'back.svg';
    back.id = 'back';
    newDiv.appendChild(back);
    const play = document.createElement('input');
    play.type = 'image';
    play.src = 'play.svg';
    play.id = 'play';
    newDiv.appendChild(play);
    const mute = document.createElement('input');
    mute.type = 'image';
    mute.src = 'mute.svg';
    mute.id = 'mute';
    newDiv.appendChild(mute);
    const fullscreen = document.createElement('input');
    fullscreen.type = 'image';
    fullscreen.src = 'fullscreen.svg';
    fullscreen.id = 'fullscreen';
    newDiv.appendChild(fullscreen);
    const next = document.createElement('input');
    next.type = 'image';
    next.src = 'next.svg';
    next.id = 'next';
    newDiv.appendChild(next);
  }

  Builder(data, numer) {
    const main = document.querySelector('main');
    const newH1 = document.createElement('h1');
    const newTextH1 = document.createTextNode(data.videos[numer - 1].title);
    newH1.appendChild(newTextH1);
    main.appendChild(newH1);
    const newDiv = document.createElement('div');
    newDiv.classList.add('player');
    newDiv.id = 'divid';
    main.appendChild(newDiv);
    const newVid = document.createElement('video');
    newVid.width = '900';
    newVid.height = '650';
    newVid.id = data.videos[numer - 1].id;
    newVid.poster = data.videos[numer - 1].poster;
    newDiv.appendChild(newVid);
    const newSrc = document.createElement('source');
    newSrc.src = data.videos[numer - 1].video;
    newSrc.type = 'video/mp4';
    newVid.appendChild(newSrc);
    const newDiv2 = document.createElement('div');
    newDiv2.id = 'divid1';
    newDiv2.classList.add('myndband--controls');
    newDiv.appendChild(newDiv2);
    const playmid = document.createElement('input');
    playmid.type = 'image';
    playmid.src = 'play.svg';
    playmid.id = 'playmid';
    newDiv.appendChild(playmid);
    const back = document.createElement('input');
    back.type = 'image';
    back.src = 'back.svg';
    back.id = 'back';
    newDiv2.appendChild(back);
    const play = document.createElement('input');
    play.type = 'image';
    play.src = 'play.svg';
    play.id = 'play';
    newDiv2.appendChild(play);
    const mute = document.createElement('input');
    mute.type = 'image';
    mute.src = 'mute.svg';
    mute.id = 'mute';
    newDiv2.appendChild(mute);
    const fullscreen = document.createElement('input');
    fullscreen.type = 'image';
    fullscreen.src = 'fullscreen.svg';
    fullscreen.id = 'fullscreen';
    newDiv2.appendChild(fullscreen);
    const next = document.createElement('input');
    next.type = 'image';
    next.src = 'next.svg';
    next.id = 'next';
    newDiv2.appendChild(next);
    const newForm = document.createElement('form');
    newForm.action = '/index.html';
    newForm.method = 'GET';
    newDiv.appendChild(newForm);
    const newInput = document.createElement('Input');
    newInput.type = 'submit';
    newInput.value = 'Til baka';
    newInput.classList.add('Bakktakki');
    newForm.appendChild(newInput);
    const duration = data.videos[numer - 1].duration; //eslint-disable-line
    next.duration = duration;
    playmid.addEventListener('click', this.playmid);
    newVid.addEventListener('click', this.playvideo);
    back.addEventListener('click', this.back);
    play.addEventListener('click', this.play);
    mute.addEventListener('click', this.mute);
    fullscreen.addEventListener('click', this.fullscreen);
    next.addEventListener('click', this.next);
  }

  playmid() {
    const vid = document.querySelector('video');
    const button = document.getElementById('play');
    const buttonmid = document.getElementById('playmid');
    const newDiv = document.getElementById('divid');
    if (button.src.slice(-9) === 'pause.svg') {
      const playmid = document.createElement('input');
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
  playvideo() {
    const vid = document.querySelector('video');
    const button = document.getElementById('play');
    const buttonmid = document.getElementById('playmid');
    const newDiv = document.getElementById('divid');
    if (button.src.slice(-9) === 'pause.svg') {
      const playmid = document.createElement('input');
      playmid.type = 'image';
      playmid.src = 'play.svg';
      playmid.id = 'playmid';
      newDiv.appendChild(playmid);
        playmid.addEventListener('click', function() { // eslint-disable-line
        const buttonmid = document.getElementById('playmid'); // eslint-disable-line
        const button = document.getElementById('play'); // eslint-disable-line
        const vid = document.querySelector('video'); // eslint-disable-line
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
  play() {
    const vid = document.querySelector('video');
    const button = document.getElementById('play');
    const buttonmid = document.getElementById('playmid');
    const newDiv = document.getElementById('divid');
    if (button.src.slice(-9) === 'pause.svg') {
      const playmid = document.createElement('input');
      playmid.type = 'image';
      playmid.src = 'play.svg';
      playmid.id = 'playmid';
      newDiv.appendChild(playmid);
      playmid.addEventListener('click', function() { // eslint-disable-line
        const buttonmid = document.getElementById('playmid'); //eslint-disable-line
        const button = document.getElementById('play'); // eslint-disable-line
        const vid = document.querySelector('video'); //eslint-disable-line
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
  mute() {
    let vid = document.querySelector('video'); // eslint-disable-line
    const button = document.getElementById('mute'); //eslint-disable-line
    if (button.src.slice(-10) === 'unmute.svg') {
      button.src = 'mute.svg';
      vid.muted = false;
    } else {
      button.src = 'unmute.svg';
      vid.muted = true;
    }
  }
  fullscreen() {
    const vid = document.querySelector('video');
    if (vid.requestFullscreen) {
      vid.requestFullscreen();
    } else if (vid.mozRequestFullScreen) {
      vid.mozRequestFullScreen();
    } else if (vid.webkitRequestFullscreen) {
      vid.webkitRequestFullscreen();
    }
  }
  back() {
    const vid = document.querySelector('video');
    const time = vid.currentTime;
    vid.pause();
    if (vid.currentTime < 3) {
      vid.currentTime = 0;
    } else {
      vid.currentTime = time - 3;
    }
    vid.play();
  }
  next() {
    const vid = document.querySelector('video'); //eslint-disable-line
    const time = vid.currentTime;
    const duration = vid.duration; // eslint-disable-line
    vid.pause();
    if (vid.currentTime + 3 < duration) {
      vid.currentTime = time + 3;
    } else {
      vid.currentTime = 0;
    }
    vid.play();
  }
}
document.addEventListener('DOMContentLoaded', () => {
  const id = window.location.href.slice('-1'); /* eslint linebreak-style: ['error', 'windows'] */
  if (id < 6) { /* eslint linebreak-style: ['error', 'windows'] */
    const newHeader = document.createElement('header'); /* eslint linebreak-style: ['error', 'windows'] */
    document.body.appendChild(newHeader); /* eslint linebreak-style: ['error', 'windows'] */
    const newMain = document.createElement('main'); /* eslint linebreak-style: ['error', 'windows'] */
    document.body.appendChild(newMain); /* eslint linebreak-style: ['error', 'windows'] */
    const myndbandaspilari = new Myndbandaspilari(); // eslint-disable-line
    myndbandaspilari.goJSON2(id); /* eslint linebreak-style: ['error', 'windows'] */
  } else { /* eslint linebreak-style: ['error', 'windows'] */
    const id = window.location.href.slice('-1'); //eslint-disable-line
    const newHeader = document.createElement('header'); /* eslint linebreak-style: ['error', 'windows'] */
    document.body.appendChild(newHeader); /* eslint linebreak-style: ['error', 'windows'] */
    const newMain = document.createElement('main'); /* eslint linebreak-style: ['error', 'windows'] */
    document.body.appendChild(newMain); /* eslint linebreak-style: ['error', 'windows'] */
    const myndbandaspilari = new Myndbandaspilari(); //eslint-disable-line
    myndbandaspilari.builderVilla(id); /* eslint linebreak-style: ['error', 'windows'] */
  } /* eslint linebreak-style: ['error', 'windows'] */
}); /* eslint linebreak-style: ['error', 'windows'] */
