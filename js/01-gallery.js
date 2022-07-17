import { galleryItems } from './gallery-items.js';
// Change code below this line
//const listLink = document.querySelector(".gallery__link");


function createGalery(arr) { return arr.reduce((acc, item) => acc + `<div class="gallery__item">
<a class="gallery__link" href="${item.original}">
  <img
    class="gallery__image"
    src="${item.preview}"
    data-source="${item.original}"
    alt="${item.description}"
  />
</a>
</div>`, "")};
const gallery = document.querySelector(".gallery");

const result = createGalery(galleryItems);

gallery.insertAdjacentHTML("beforeend", result);

gallery.addEventListener("click", onLinkClickImg);



function onLinkClickImg(e) {
   console.log();
    
}


