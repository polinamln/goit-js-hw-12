import{i as c,S as g,a as y}from"./assets/vendor-89feecc5.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function a(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerpolicy&&(s.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?s.credentials="include":e.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(e){if(e.ep)return;e.ep=!0;const s=a(e);fetch(e.href,s)}})();const u=document.querySelector(".body-elements"),m=document.querySelector(".images-list"),d=document.querySelector(".loader"),i=document.querySelector(".load-more-btn"),h="https://pixabay.com/api/",f="27271649-0bf2f3b05194a9267cfa0a660",n=new URL(h);n.searchParams.append("key",f);n.searchParams.append("image_type","photo");n.searchParams.append("orientation","horizontal");n.searchParams.append("safesearch","true");n.searchParams.append("page","1");n.searchParams.append("per_page","40");d.style.display="none";i.style.display="none";const v=()=>{const a=document.querySelector(".card").getBoundingClientRect().height;window.scrollTo({top:window.scrollY+a*2,behavior:"smooth"})};u.addEventListener("submit",t=>{t.preventDefault(),d.style.display="block",m.innerHTML="";const r=t.currentTarget.elements.inputValue.value;p(r),t.currentTarget.reset()});i.addEventListener("click",()=>{const t=u.elements.inputValue.value;p(t),setTimeout(()=>{v()},100)});function L(t){return n.searchParams.set("q",t),y.get(n).then(r=>r.data).catch(r=>{c.error({position:"center",title:"",message:"Sorry, there are no images matching your search query. Please try again!"})})}async function p(t){let r=1;try{const a=await L(t);m.insertAdjacentHTML("beforeend",b(a)),P.refresh(),r+=1,a.hits.length===0&&c.error({position:"center",title:"",message:"Error. Please try again!"}),r>=Math.ceil(a.totalHits/40)&&(c.info({position:"center",title:"",message:"We're sorry, but you've reached the end of search results."}),i.style.display="none")}catch{c.error({position:"center",title:"",message:"Error. Please try again!"})}i.style.display="block",d.style.display="none"}function b(t){return t.hits.reduce((a,o)=>(a+=`
            <div class="card gallery">
                    
                <a class="large-img" href="${o.largeImageURL}">
                    <img width="300" height="200" alt="${o.tags}" src="${o.webformatURL}">
                </a>

                <div class="card-elems">
                    <div class="card-text-el">
                        <h2 class="card-title">Likes</h2>
                        <p class="card-text">${o.likes}</p>
                    </div>
                    <div class="card-text-el">
                        <h2 class="card-title">Views</h2>
                        <p class="card-text">${o.views}</p>
                    </div>
                    <div class="card-text-el">
                        <h2 class="card-title">Comments</h2>
                        <p class="card-text">${o.comments}</p>
                    </div>
                    <div class="card-text-el">
                        <h2 class="card-title">Downloads</h2>
                        <p class="card-text">${o.downloads}</p>
                    </div>
                </div>
            </div>
        `,a),"")}const P=new g(".gallery a",{captionsData:"alt",captionDelay:250,captionPosition:"bottom"});
//# sourceMappingURL=commonHelpers.js.map
