import{i as c,S as u}from"./assets/vendor-46aac873.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const m=document.querySelector(".body-elements"),l=document.querySelector(".images-list"),d=document.querySelector(".loader"),p="https://pixabay.com/api/",g="27271649-0bf2f3b05194a9267cfa0a660",o=new URL(p);o.searchParams.append("key",g);o.searchParams.append("image_type","photo");o.searchParams.append("orientation","horizontal");o.searchParams.append("safesearch","true");o.searchParams.append("q","cat");d.style.display="none";m.addEventListener("submit",a=>{a.preventDefault(),d.style.display="block",l.innerHTML="";const r=a.currentTarget.elements.inputValue.value;f(r),a.currentTarget.reset()});function h(a){return o.searchParams.set("q",a),fetch(o).then(r=>{if(r.ok)return r.json();throw new Error("Request is ot OK.")}).catch(r=>{c.error({position:"center",title:"",message:"Sorry, there are no images matching your search query. Please try again!"})})}function f(a){h(a).then(r=>{l.insertAdjacentHTML("afterbegin",y(r)),L.refresh(),r.hits.length===0&&c.error({position:"center",title:"",message:"Sorry, there are no images matching your search query. Please try again!"})}).catch(r=>{c.error({position:"center",title:"",message:"Sorry, there are no images matching your search query. Please try again!"})})}function y(a){return a.hits.reduce((n,s)=>(n+=`
            <div class="card gallery">
                    
                <a class="large-img" href="${s.largeImageURL}">
                    <img width="300" height="200" alt="${s.tags}" src="${s.webformatURL}">
                </a>

                <div class="card-elems">
                    <div class="card-text-el">
                        <h2 class="card-title">Likes</h2>
                        <p class="card-text">${s.likes}</p>
                    </div>
                    <div class="card-text-el">
                        <h2 class="card-title">Views</h2>
                        <p class="card-text">${s.views}</p>
                    </div>
                    <div class="card-text-el">
                        <h2 class="card-title">Comments</h2>
                        <p class="card-text">${s.comments}</p>
                    </div>
                    <div class="card-text-el">
                        <h2 class="card-title">Downloads</h2>
                        <p class="card-text">${s.downloads}</p>
                    </div>
                </div>
            </div>
        `,n),"")}const L=new u(".gallery a",{captionsData:"alt",captionDelay:250,captionPosition:"bottom"});
//# sourceMappingURL=commonHelpers.js.map
