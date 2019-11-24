import items from './gallery-items.js';

const galleryItemsWrapper = document.querySelector('ul.js-gallery');
const modalWrapper = document.querySelector('div.js-lightbox');
const largeImg = modalWrapper.querySelector('img.lightbox__image');
const closeModalButton = modalWrapper.querySelector('button[data-action="close-lightbox"]');

function createGalleryItem(items) {
  const fragment = document.createDocumentFragment();
  items.map(item => {
    let li = document.createElement('li');
    li.classList.add('gallery__item');
    
    let galleryItemModel = `
      <a
        class="gallery__link"
        href="${item.original}"
      >
        <img
          class="gallery__image"
          src="${item.preview}"
          data-source="${item.original}"
          alt="${item.description}"
        />
        <span class="gallery__icon">
          <i class="material-icons">zoom_out_map</i>
        </span>
      </a>`;
      li.insertAdjacentHTML('beforeend', galleryItemModel);  
      fragment.appendChild(li);
  })

  galleryItemsWrapper.appendChild(fragment);
}

function handlerChangePicture(event) {
  event.preventDefault();
  if (event.target === event.currentTarget) return;
  openModal();
  // const parentImageElement = event.target.parentElement.tagName === 'A' ? event.target.parentElement : null;  
  // if (!parentImageElement) return;
  // handlerEnlargePicture(parentImageElement.href, event.target.alt);
  handlerEnlargePicture(event.target.dataset.source, event.target.alt);  
};

function openModal() {
  modalWrapper.classList.add('is-open');
}

function handlerEnlargePicture(linkLargePicture, altPicture) {
  largeImg.setAttribute('src', linkLargePicture);  
  largeImg.setAttribute('alt', altPicture);
}

function handlerCloseModal(event) {
  if (modalWrapper.classList.contains('is-open')) {
    modalWrapper.classList.remove('is-open');
  }  
  refreshModal()
}

function refreshModal () {
  largeImg.setAttribute('src', '');  
  largeImg.setAttribute('alt', '');
}

galleryItemsWrapper.addEventListener('click', handlerChangePicture);
closeModalButton.addEventListener('click', handlerCloseModal);
document.addEventListener('DOMContentLoaded', event => {createGalleryItem(items)});