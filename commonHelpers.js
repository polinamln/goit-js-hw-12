import{i as d,S as g,a as f}from"./assets/vendor-89feecc5.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const u of o.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&a(u)}).observe(document,{childList:!0,subtree:!0});function e(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerpolicy&&(o.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?o.credentials="include":t.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(t){if(t.ep)return;t.ep=!0;const o=e(t);fetch(t.href,o)}})();const p=document.querySelector(".body-elements"),m=document.querySelector(".images-list"),i=document.querySelector(".loader"),c=document.querySelector(".load-more-btn"),h="https://pixabay.com/api/",v="27271649-0bf2f3b05194a9267cfa0a660",n=new URL(h);n.searchParams.append("key",v);n.searchParams.append("image_type","photo");n.searchParams.append("orientation","horizontal");n.searchParams.append("safesearch","true");n.searchParams.append("per_page","40");i.style.display="none";c.style.display="none";let l=1;const w=()=>{const e=document.querySelector(".card").getBoundingClientRect().height;window.scrollTo({top:window.scrollY+e*2,behavior:"smooth"})};p.addEventListener("submit",async r=>{r.preventDefault(),l=1,i.style.display="block",m.innerHTML="";const s=r.currentTarget.elements.inputValue.value.trim();s!==""?await y(s):(d.info({position:"center",title:"",message:"Please fill in the input field"}),i.style.display="none"),r.currentTarget.reset()});c.addEventListener("click",async()=>{const r=p.elements.inputValue.value.trim();await y(r),w()});async function L(r,s){n.searchParams.set("q",r),n.searchParams.set("page",s);try{return(await f.get(n)).data}catch(e){throw d.error({position:"center",title:"",message:"Sorry, there are no images matching your search query. Please try again!"}),c.style.display="none",e}}async function y(r){let s=!1;try{const e=await L(r,l);if(m.insertAdjacentHTML("beforeend",b(e)),P.refresh(),l+=1,e.hits.length===0)throw new Error;if(Math.ceil(e.totalHits/e.per_page)===l&&(s=!0,d.info({position:"center",title:"",message:"We're sorry, but you've reached the end of search results."}),c.style.display="none",i.style.display="none"),s)return[];c.style.display="block"}catch{d.error({position:"center",title:"",message:"We're sorry, but you've reached the end of search results."})}i.style.display="none"}function b(r){return r.hits.reduce((e,a)=>(e+=`
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
        `,e),"")}const P=new g(".gallery a",{captionsData:"alt",captionDelay:250,captionPosition:"bottom"});
//# sourceMappingURL=commonHelpers.js.map
