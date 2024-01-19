import{i as p,S as g,a as f}from"./assets/vendor-89feecc5.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const u of o.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&t(u)}).observe(document,{childList:!0,subtree:!0});function a(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function t(e){if(e.ep)return;e.ep=!0;const o=a(e);fetch(e.href,o)}})();const i=document.querySelector(".body-elements"),m=document.querySelector(".images-list"),c=document.querySelector(".loader"),l=document.querySelector(".load-more-btn"),h="https://pixabay.com/api/",v="27271649-0bf2f3b05194a9267cfa0a660",n=new URL(h);n.searchParams.append("key",v);n.searchParams.append("image_type","photo");n.searchParams.append("orientation","horizontal");n.searchParams.append("safesearch","true");n.searchParams.append("per_page","40");c.style.display="none";l.style.display="none";let d=1;const w=()=>{const a=document.querySelector(".card").getBoundingClientRect().height;window.scrollTo({top:window.scrollY+a*2,behavior:"smooth"})};i.addEventListener("submit",async s=>{s.preventDefault(),d=1,c.style.display="block",m.innerHTML="";const r=s.currentTarget.elements.inputValue.value.trim();r!==""?await y(r):(p.info({position:"center",title:"",message:"Please fill in the input field"}),c.style.display="none",i.elements.inputValue.value="")});l.addEventListener("click",async()=>{const s=i.elements.inputValue.value.trim();await y(s),w()});async function L(s,r){n.searchParams.set("q",s),n.searchParams.set("page",r);try{const a=await f.get(n);if(a.data.totalHits===0)throw new Error;return a.data}catch(a){throw a}}async function y(s){const r=n.searchParams.get("per_page");let a=!1;try{const t=await L(s,d);if(m.insertAdjacentHTML("beforeend",b(t)),P.refresh(),d+=1,(Math.ceil(t.totalHits/r)<d||t.hits.length===0)&&(a=!0,p.info({position:"center",title:"",message:"We're sorry, but you've reached the end of search results."}),l.style.display="none",c.style.display="none",i.elements.inputValue.value=""),a)return l.style.display="none",[];l.style.display="block"}catch{p.error({position:"center",title:"",message:"Sorry, there are no images matching your search query. Please try again!"}),l.style.display="none",i.elements.inputValue.value=""}finally{c.style.display="none"}}function b(s){return s.hits.reduce((a,t)=>(a+=`
            <div class="card gallery">
                    
                <a class="large-img" href="${t.largeImageURL}">
                    <img width="300" height="200" alt="${t.tags}" src="${t.webformatURL}">
                </a>

                <div class="card-elems">
                    <div class="card-text-el">
                        <h2 class="card-title">Likes</h2>
                        <p class="card-text">${t.likes}</p>
                    </div>
                    <div class="card-text-el">
                        <h2 class="card-title">Views</h2>
                        <p class="card-text">${t.views}</p>
                    </div>
                    <div class="card-text-el">
                        <h2 class="card-title">Comments</h2>
                        <p class="card-text">${t.comments}</p>
                    </div>
                    <div class="card-text-el">
                        <h2 class="card-title">Downloads</h2>
                        <p class="card-text">${t.downloads}</p>
                    </div>
                </div>
            </div>
        `,a),"")}const P=new g(".gallery a",{captionsData:"alt",captionDelay:250,captionPosition:"bottom"});
//# sourceMappingURL=commonHelpers.js.map
