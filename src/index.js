import axios from 'axios';

const form = document.querySelector('.js-form');
const box = document.querySelector('.js-box');
const input = document.querySelector('.js-input');

form.addEventListener('submit', getRequest);

function getRequest(evt) {
  evt.preventDefault();
  getCharacter(input.value).then(data => createMarkup(data.data));
}

function getCharacter(name) {
  return axios.get(`https://api.narutodb.xyz/character/search?name=${name}`);
}

function createMarkup(data) {
  const idx = data.images[1].indexOf('.png');
  const link = data.images[1].slice(0, idx + 4);

  const markup = `
    <img src="${link}" alt="" width="300"  />
        <h1>${data.name}</h1>`;

  box.innerHTML = markup;
}
