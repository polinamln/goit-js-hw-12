import{i as c,S as u,a as m}from"./assets/vendor-89feecc5.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();const p=document.querySelector(".body-elements"),l=document.querySelector(".images-list"),d=document.querySelector(".loader"),f="https://pixabay.com/api/",g="27271649-0bf2f3b05194a9267cfa0a660",o=new URL(f);o.searchParams.append("key",g);o.searchParams.append("image_type","photo");o.searchParams.append("orientation","horizontal");o.searchParams.append("safesearch","true");o.searchParams.append("q","cat");d.style.display="none";p.addEventListener("submit",a=>{a.preventDefault(),d.style.display="block",l.innerHTML="";const t=a.currentTarget.elements.inputValue.value;y(t),a.currentTarget.reset()});function h(a){return o.searchParams.set("q",a),m.get(o).then(t=>t.data).catch(t=>{c.error({position:"center",title:"",message:"Sorry, there are no images matching your search query. Please try again!"})})}function y(a){h(a).then(t=>{l.insertAdjacentHTML("afterbegin",L(t)),v.refresh(),t.hits.length===0&&c.error({position:"center",title:"",message:"Error. Please try again!"})}).catch(t=>{c.error({position:"center",title:"",message:"Error. Please try again!"})})}function L(a){return a.hits.reduce((i,s)=>(i+=`
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
        `,i),"")}const v=new u(".gallery a",{captionsData:"alt",captionDelay:250,captionPosition:"bottom"});
//# sourceMappingURL=commonHelpers.js.map
