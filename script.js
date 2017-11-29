class Myndbandaleiga {
  loadJSON(callback) {
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
  goJSON() {
    const self = this;
    this.loadJSON(function (response) { // eslint-disable-line
      const data = JSON.parse(response);
      self.show(data);
    });
  }
  show(data) {
    let Main = document.querySelector('main');
    const img = document.querySelector('img');
    Main.removeChild(img);
    let newH1 = document.createElement('h1');
    let textiH1 = document.createTextNode(data.categories[0].title);
    const Div = document.querySelector('.listi');
    Div.appendChild(newH1);
    newH1.appendChild(textiH1);
    let newDivC = document.createElement('div');
    newDivC.classList.add('listi--content');
    Div.appendChild(newDivC);
    let newDiv = document.createElement('div');
    newDiv.classList.add('myndband');
    newDivC.appendChild(newDiv);
    let newVid = document.createElement('video');
    newVid.width = '470';
    newVid.height = '500';
    newVid.id = data.videos[0].id;
    newVid.poster = data.videos[0].poster;
    newDiv.appendChild(newVid);
    let newP = document.createElement('p');
    newP.classList.add('bottomright');
    let newTextP = document.createTextNode(this.calculateTime(data.videos[0].duration));
    newP.appendChild(newTextP);
    newDiv.appendChild(newP);
    let newSrc = document.createElement('source');
    newSrc.src = data.videos[0].video;
    newSrc.type = 'video/mp4';
    newVid.appendChild(newSrc);
    let newSpan = document.createElement('span');
    newSpan.classList.add('fyrirsogn');
    let textiSpan = document.createTextNode(data.videos[0].title);
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
    newTextP = document.createTextNode(this.calculateTime(data.videos[1].duration));
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
    let newHr = document.createElement('hr');
    Main.appendChild(newHr);
    let newStoraDiv = document.createElement('div');
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
    newTextP = document.createTextNode(this.calculateTime(data.videos[2].duration));
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
    newTextP = document.createTextNode(this.calculateTime(data.videos[3].duration));
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
    newTextP = document.createTextNode(this.calculateTime(data.videos[1].duration));
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
    newTextP = document.createTextNode(this.calculateTime(data.videos[2].duration));
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
    newTextP = document.createTextNode(this.calculateTime(data.videos[3].duration));
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
    const vidjo = document.querySelectorAll('video');
    for (let i = 0; i < vidjo.length; i++) { // eslint-disable-line
      vidjo[i].addEventListener('click', this.submit);
    }
  }
  submit() {
    const newForm = document.createElement('form');
    newForm.id = 'formid';
    newForm.action = '/isi6/Vefforritun1/StortVerkefni2/';
    const newInput = document.createElement('input');
    newInput.type = 'hidden';
    newInput.name = 'id';
    newInput.value = this.id;
    newForm.appendChild(newInput);
    document.body.appendChild(newForm);
    newForm.submit();
    document.body.removeChild(newForm);
    this.clear; // eslint-disable-line
  }
  calculateDates(old) {
    const d = new Date();
    const nutimi = d.getTime() - old;
    const day = Math.round(nutimi / 24 / 60 / 60 / 1000);
    if (day < 2) {
      return 'Fyrir einum degi síðan';
    } else if (day < 7) {
      return `Fyrir ${day} dögum síðan`;
    } else if (day === 7) {
      return 'Fyrir einni viku síðan';
    } else if (day < 30) {
      return `Fyrir ${Math.round(day / 7)} vikum síðan`;
    } else if (day === 30) {
      return 'Fyrir einum mánuði síðan';
    } else if (day < 360) {
      return `Fyrir ${Math.round(day / 30)} mánuðum síðan`;
    } else if (day === 360) {
      return 'Fyrir einu ári síðan';
    } else { // eslint-disable-line
      return `Fyrir ${Math.round(day / 360)} árum síðan`;
    }
  }
  Refresh1() {
    const main = document.querySelector('main');
    while (main.hasChildNodes()) {
      main.removeChild(main.lastChild);
    }
    const Header = document.querySelector('header');
    const newH1 = document.createElement('h1');
    const textiH1 = document.createTextNode('Myndbandaleigan');
    newH1.appendChild(textiH1);
    Header.appendChild(newH1);
    const Main = document.querySelector('main');
    const newDiv = document.createElement('div');
    newDiv.classList.add('listi');
    Main.appendChild(newDiv);
    const myndbandaleiga = new Myndbandaleiga();
    myndbandaleiga.goJSON();
  }
  calculateTime(old) {
    const minutur = Math.floor(old / 60);
    const sekundur = old % 60;
    if (sekundur < 10) {
      return `${minutur}:0${sekundur}`;
    } else { // eslint-disable-line
      return `${minutur}:${sekundur}`;
    }
  }
}
document.addEventListener('DOMContentLoaded', () => {
  const newHeader = document.createElement('header');
  const newH1 = document.createElement('h1');
  const textiH1 = document.createTextNode('Myndbandaleigan');
  newH1.appendChild(textiH1); /* eslint linebreak-style: ["error", "windows"] */
  newHeader.appendChild(newH1); /* eslint linebreak-style: ["error", "windows"] */
  document.body.appendChild(newHeader); /* eslint linebreak-style: ["error", "windows"] */
  const newMain = document.createElement('main'); /* eslint linebreak-style: ["error", "windows"] */
  document.body.appendChild(newMain); /* eslint linebreak-style: ["error", "windows"] */
  const newDiv = document.createElement('div'); /* eslint linebreak-style: ["error", "windows"] */
  newDiv.classList.add('listi'); /* eslint linebreak-style: ["error", "windows"] */
  newMain.appendChild(newDiv); /* eslint linebreak-style: ["error", "windows"] */
  const myndbandaleiga = new Myndbandaleiga(); /* eslint linebreak-style: ["error", "windows"] */
  const img = document.createElement('img');
  img.setAttribute('src','loading.gif');
  newMain.appendChild(img);
  myndbandaleiga.goJSON(); /* eslint linebreak-style: ["error", "windows"] */
}); /* eslint linebreak-style: ["error", "windows"] */
