import{i as u,S as g,a as h}from"./assets/vendor-89feecc5.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const p of n.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&t(p)}).observe(document,{childList:!0,subtree:!0});function r(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerpolicy&&(n.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?n.credentials="include":e.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function t(e){if(e.ep)return;e.ep=!0;const n=r(e);fetch(e.href,n)}})();const i=document.querySelector(".body-elements"),m=document.querySelector(".images-list"),c=document.querySelector(".loader"),l=document.querySelector(".load-more-btn"),f="https://pixabay.com/api/",v="27271649-0bf2f3b05194a9267cfa0a660",o=new URL(f);o.searchParams.append("key",v);o.searchParams.append("image_type","photo");o.searchParams.append("orientation","horizontal");o.searchParams.append("safesearch","true");o.searchParams.append("per_page","40");c.style.display="none";l.style.display="none";let d=1;const L=()=>{const r=document.querySelector(".card").getBoundingClientRect().height;window.scrollTo({top:window.scrollY+r*2,behavior:"smooth"})};i.addEventListener("submit",async a=>{a.preventDefault(),d=1,c.style.display="block",m.innerHTML="";const s=a.currentTarget.elements.inputValue.value.trim();s!==""?await y(s):(u.info({position:"center",title:"",message:"Please fill in the input field"}),c.style.display="none",i.elements.inputValue.value="")});l.addEventListener("click",async()=>{const a=i.elements.inputValue.value.trim();await y(a),L()});async function P(a,s){o.searchParams.set("q",a),o.searchParams.set("page",s);try{return(await h.get(o)).data}catch(r){throw u.error({position:"center",title:"",message:"Sorry, there are no images matching your search query. Please try again!"}),l.style.display="none",r}}async function y(a){o.searchParams.get("totalHits");const s=o.searchParams.get("per_page");let r=!1;try{const t=await P(a,d);if(m.insertAdjacentHTML("beforeend",b(t)),w.refresh(),d+=1,([Math.ceil(t.totalHits/s)]===d||t.hits.length===0)&&(r=!0,u.info({position:"center",title:"",message:"We're sorry, but you've reached the end of search results."}),l.style.display="none",c.style.display="none",i.elements.inputValue.value=""),r)return l.style.display="none",[];l.style.display="block"}catch{u.error({position:"center",title:"",message:"Sorry, there are no images matching your search query. Please try again!"}),l.style.display="none",i.elements.inputValue.value=""}finally{c.style.display="none"}}function b(a){return a.hits.reduce((r,t)=>(r+=`
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
        `,r),"")}const w=new g(".gallery a",{captionsData:"alt",captionDelay:250,captionPosition:"bottom"});
//# sourceMappingURL=commonHelpers.js.map
