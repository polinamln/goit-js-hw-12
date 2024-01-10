import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const form = document.querySelector('.body-elements')
const imagesList = document.querySelector('.images-list');

const loader = document.querySelector('.loader')

const BASE_URL = 'https://pixabay.com/api/'
const API_KEY = "27271649-0bf2f3b05194a9267cfa0a660"
const url = new URL(BASE_URL);
url.searchParams.append("key", API_KEY)
url.searchParams.append('image_type', 'photo')
url.searchParams.append('orientation', 'horizontal')
url.searchParams.append('safesearch', 'true')
url.searchParams.append('q', 'cat')

loader.style.display = 'none';

form.addEventListener('submit', (event) => {
    event.preventDefault();

    loader.style.display = 'block';
    
    imagesList.innerHTML = '';

    const query = event.currentTarget.elements.inputValue.value;

    renderImages(query);

    event.currentTarget.reset()
})

function getImage(quary) {
    
    url.searchParams.set('q', quary);
    return fetch(url)
        .then((res) => {
            if (res.ok) {
                return res.json()
            } else {
                throw new Error('Request is ot OK.')
            }
        }).catch(error => {
            iziToast.error({
                    position: 'center',
                    title: '',
                    message: 'Sorry, there are no images matching your search query. Please try again!',
});
        })
};

function renderImages(quary) {
    getImage(quary)
        .then(image => {
            imagesList.insertAdjacentHTML("afterbegin", createImageHTML(image))
            lightbox.refresh()
            if (image.hits.length === 0) {
                iziToast.error({
                    position: 'center',
                    title: '',
                    message: 'Sorry, there are no images matching your search query. Please try again!',
});
            }
        })
        .catch(error => {
        iziToast.error({
                    position: 'center',
                    title: '',
                    message: 'Sorry, there are no images matching your search query. Please try again!',
});
    })
    
};

function createImageHTML(image) {
    const imagesHTML = image.hits.reduce((html, hit) => {
        html += `
            <div class="card gallery">
                    
                <a class="large-img" href="${hit.largeImageURL}">
                    <img width="300" height="200" alt="${hit.tags}" src="${hit.webformatURL}">
                </a>

                <div class="card-elems">
                    <div class="card-text-el">
                        <h2 class="card-title">Likes</h2>
                        <p class="card-text">${hit.likes}</p>
                    </div>
                    <div class="card-text-el">
                        <h2 class="card-title">Views</h2>
                        <p class="card-text">${hit.views}</p>
                    </div>
                    <div class="card-text-el">
                        <h2 class="card-title">Comments</h2>
                        <p class="card-text">${hit.comments}</p>
                    </div>
                    <div class="card-text-el">
                        <h2 class="card-title">Downloads</h2>
                        <p class="card-text">${hit.downloads}</p>
                    </div>
                </div>
            </div>
        `;
        return html;
    }, '');

    return imagesHTML;
}

const lightbox = new SimpleLightbox('.gallery a', {
        captionsData: "alt",
        captionDelay: 250,
        captionPosition:'bottom'
    });

