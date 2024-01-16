import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import axios from 'axios';




const form = document.querySelector('.body-elements')
const imagesList = document.querySelector('.images-list');

const loader = document.querySelector('.loader')

const loadBtn = document.querySelector('.load-more-btn')

const BASE_URL = 'https://pixabay.com/api/'
const API_KEY = "27271649-0bf2f3b05194a9267cfa0a660"

const url = new URL(BASE_URL);
url.searchParams.append("key", API_KEY)
url.searchParams.append('image_type', 'photo')
url.searchParams.append('orientation', 'horizontal')
url.searchParams.append('safesearch', 'true')
url.searchParams.append('per_page', '40')

// const url = axios.create({
//     baseURL: "https://pixabay.com/api/",
//     params: {
//         apiKey: "27271649-0bf2f3b05194a9267cfa0a660",
//         image_type: "photo",
//         orientation: "horizontal",
//         safesearch: "true",
//         per_page: "40"
//     }
// })

loader.style.display = 'none';
loadBtn.style.display = 'none';
let page = 1;

const scrollPage = () => {
     const cardEl = document.querySelector('.card');
                const cardRect = cardEl.getBoundingClientRect();
                const cardHeight = cardRect.height;

                window.scrollTo({
                    top: window.scrollY + cardHeight * 2,
                    behavior: 'smooth',
                });
}

form.addEventListener('submit', async (event) => {
    event.preventDefault();

    page = 1;

    loader.style.display = 'block';
    
    imagesList.innerHTML = '';

    const query = event.currentTarget.elements.inputValue.value.trim();

    if (query !== '') {
            await renderImages(query);
    } else {
        iziToast.info({
                    position: 'center',
                    title: '',
                    message: 'Please fill in the input field',
        });
        loader.style.display = 'none';
    }
    
    event.currentTarget.reset()
})

loadBtn.addEventListener('click', async () => {
        const query = form.elements.inputValue.value;

        await renderImages(query);

        scrollPage()

        });



async function getImage(query, page) {

    url.searchParams.set('q', query);
    url.searchParams.set('page', page);

    try {
        const res = await axios.get(url);
        return res.data;
    } catch (error) {
        iziToast.error({
            position: 'center',
            title: '',
            message: 'Sorry, there are no images matching your search query. Please try again!',
        });
        loadBtn.style.display = 'none';
        throw error;
    }
};


async function renderImages(quary) {
    
    let isLastPage = false;

    try {
        const image = await getImage(quary, page);
            
             imagesList.insertAdjacentHTML("beforeend", createImageHTML(image))

        lightbox.refresh()
        
            page += 1

        if (image.hits.length === 0) {
                throw new Error
        }

        if (page >= Math.ceil(image.totalHits / 40)) {
            isLastPage = true;
                iziToast.info({
                        position: 'center',
                        title: '',
                    message: "We're sorry, but you've reached the end of search results.",});
            loadBtn.style.display = 'none';
            loader.style.display = 'none';

        } 

        if (isLastPage) {
            return []
        }
        loadBtn.style.display = 'block';
        }
        catch(error)  {
        iziToast.error({
                    position: 'center',
                    title: '',
                    message: 'Error! Enter a valid request.',});
        
    } 
    loader.style.display = 'none';
    
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
};


const lightbox = new SimpleLightbox('.gallery a', {
        captionsData: "alt",
        captionDelay: 250,
        captionPosition:'bottom'
    });

