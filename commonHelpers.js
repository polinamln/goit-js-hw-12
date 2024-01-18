import{i as d,S as g,a as f}from"./assets/vendor-89feecc5.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const u of o.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&a(u)}).observe(document,{childList:!0,subtree:!0});function t(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(e){if(e.ep)return;e.ep=!0;const o=t(e);fetch(e.href,o)}})();const p=document.querySelector(".body-elements"),m=document.querySelector(".images-list"),i=document.querySelector(".loader"),c=document.querySelector(".load-more-btn"),h="https://pixabay.com/api/",v="27271649-0bf2f3b05194a9267cfa0a660",n=new URL(h);n.searchParams.append("key",v);n.searchParams.append("image_type","photo");n.searchParams.append("orientation","horizontal");n.searchParams.append("safesearch","true");n.searchParams.append("per_page","40");i.style.display="none";c.style.display="none";let l=1;const w=()=>{const t=document.querySelector(".card").getBoundingClientRect().height;window.scrollTo({top:window.scrollY+t*2,behavior:"smooth"})};p.addEventListener("submit",async s=>{s.preventDefault(),l=1,i.style.display="block",m.innerHTML="";const r=s.currentTarget.elements.inputValue.value.trim();r!==""?await y(r):(d.info({position:"center",title:"",message:"Please fill in the input field"}),i.style.display="none"),s.currentTarget.reset()});c.addEventListener("click",async()=>{const s=p.elements.inputValue.value.trim();await y(s),w()});async function L(s,r){n.searchParams.set("q",s),n.searchParams.set("page",r);try{return(await f.get(n)).data}catch(t){throw d.error({position:"center",title:"",message:"Sorry, there are no images matching your search query. Please try again!"}),c.style.display="none",t}}async function y(s){let r=!1;try{const t=await L(s,l);if(m.insertAdjacentHTML("beforeend",b(t)),P.refresh(),l+=1,t.hits.length===0)throw new Error;if(Math.ceil(t.totalHits/40)===l&&(r=!0,d.info({position:"center",title:"",message:"We're sorry, but you've reached the end of search results."}),c.style.display="none",i.style.display="none"),r)return[];c.style.display="block"}catch{d.error({position:"center",title:"",message:"We're sorry, but you've reached the end of search results."})}i.style.display="none"}function b(s){return s.hits.reduce((t,a)=>(t+=`
            <div class="card gallery">
                    
                <a class="large-img" href="${a.largeImageURL}">
                    <img width="300" height="200" alt="${a.tags}" src="${a.webformatURL}">
                </a>

                <div class="card-elems">
                    <div class="card-text-el">
                        <h2 class="card-title">Likes</h2>
                        <p class="card-text">${a.likes}</p>
                    </div>
                    <div class="card-text-el">
                        <h2 class="card-title">Views</h2>
                        <p class="card-text">${a.views}</p>
                    </div>
                    <div class="card-text-el">
                        <h2 class="card-title">Comments</h2>
                        <p class="card-text">${a.comments}</p>
                    </div>
                    <div class="card-text-el">
                        <h2 class="card-title">Downloads</h2>
                        <p class="card-text">${a.downloads}</p>
                    </div>
                </div>
            </div>
        `,t),"")}const P=new g(".gallery a",{captionsData:"alt",captionDelay:250,captionPosition:"bottom"});
//# sourceMappingURL=commonHelpers.js.map
