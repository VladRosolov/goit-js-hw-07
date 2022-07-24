import { galleryItems } from './gallery-items.js';


const galleryContainer = document.querySelector('.gallery');
const imagesMarkup = createGalleryMarkup(galleryItems);

galleryContainer.insertAdjacentHTML( 'beforeend' ,imagesMarkup);

galleryContainer.addEventListener('click', onGalleryClick);




function createGalleryMarkup (images) {
    return galleryItems.map ( ({ preview, original, description}) => {
return `
<div class="gallery__item">
<a class="gallery__link" href="##"> 
    <img class="gallery__image" 
    src="${preview}" 
    data-source="${original}" 
    alt="${description}"/>
</a>
</div> 
`;
    })
    .join('');
}


function onGalleryClick (click) {
    click.preventDefault();
    const originalImage = click.target.dataset.source;

    if (click.target.classList.contains('gallery__image')) {

        function onEscClick (event) {
            if (event.code === 'Escape') {
            console.log(event)
            instance.close()
            }
        }

        const instance = basicLightbox.create(
            `<img  src="${originalImage}">`, {

            onShow: (instance) => {
                window.addEventListener('keydown', onEscClick);
                },
            onClose: (instance) => {
                window.removeEventListener('keydown', onEscClick);
                } 
            });
        instance.show();
        };
        
}




// function onGalleryClick (click) {
//     click.preventDefault();
//     const originalImage = click.target.dataset.source;

//     if (click.target.classList.contains('gallery__image')) {

//         const instance = basicLightbox.create(`
//         <img  src="${originalImage}">
//         `);
//         instance.show();

//     document.addEventListener('keydown', onEscClick);
//         function onEscClick (event) {
//             if (event.code === 'Escape') {
//                 console.log(event)
//                 instance.close()
//                 }
//             }

//         };
// }
