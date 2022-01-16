import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryWrap = document.querySelector(".gallery");

const galleryItemsArray = [];

galleryItems.forEach(({ preview, original, description }) => {

    galleryItemsArray.push(document.createRange().createContextualFragment(`
        <div class="gallery__item">
            <a class="gallery__link" href="${original}">
            <img
                class="gallery__image"
                src="${preview}"
            data-source="${original}"
            alt="Image ${description}"
            />
        </a>
    </div >
        `)
    )
});


galleryWrap.append(...galleryItemsArray);

galleryWrap.addEventListener('click', onImageClick);

function onImageClick(e) {
    e.preventDefault();
    if (e.target.nodeName !== 'IMG') {
        return;
    }

    const instance = basicLightbox.create(`
    <img src="${e.target.dataset.source}" width="800" height="600">
    `);


    instance.show()

    if (document.querySelector('.basicLightbox')) {
        closeModalByEscape(instance);
    }

}

function closeModalByEscape(modal) {
    document.addEventListener('keydown', e => {
        if (e.code === "Escape") {
            modal.close();
        }
    });
}