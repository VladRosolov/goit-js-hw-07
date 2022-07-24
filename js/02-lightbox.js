import { galleryItems } from './gallery-items.js';


const galleryContainer = document.querySelector('.gallery');
const imagesMarkup = createGalleryMarkup(galleryItems);

galleryContainer.insertAdjacentHTML( 'beforeend' ,imagesMarkup);

galleryContainer.addEventListener('click', SimpleLightbox);



function createGalleryMarkup (images) {
    return galleryItems.map ( ({ preview, original, description}) => {
return `
<div class="gallery__item">
<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
</div> 
`;
    })
    .join('');
}


new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionDelay: 250,
    captionPosition: "bottom",
    });

