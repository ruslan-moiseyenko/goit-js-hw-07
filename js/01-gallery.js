import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryWrap = document.querySelector(".gallery");

const galleryItemsArray = [];

let instance;

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

    instance = basicLightbox.create(`
    <img src="${e.target.dataset.source}" width="800" height="600">
`, {
        onShow: () => {
            document.addEventListener('keydown', closeModalByEscape);
        },
        onClose: () => {
            document.removeEventListener('keydown', closeModalByEscape);
        },
    });
    instance.show()

}

function closeModalByEscape(e) {
    if (e.code === "Escape") {
        return instance.close();
    }
}

