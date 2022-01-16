import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const galleryWrap = document.querySelector(".gallery");

galleryItems.forEach(({ preview, original, description }) => {
    galleryWrap.insertAdjacentHTML('beforeend', `
        <li>
            <a class="gallery__item" href="${original}">
                <img class="gallery__image" src="${preview}" alt="${description}" />
            </a>
        </li>
        `);
});


const lightbox = new SimpleLightbox('.gallery a', {
    captions: true,
    captionsData: "alt",
    captionDelay: 250,
});