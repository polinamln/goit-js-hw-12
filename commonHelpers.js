import{i as d,S as g,a as f}from"./assets/vendor-89feecc5.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const u of r.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&a(u)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const p=document.querySelector(".body-elements"),m=document.querySelector(".images-list"),c=document.querySelector(".loader"),i=document.querySelector(".load-more-btn"),h="https://pixabay.com/api/",v="27271649-0bf2f3b05194a9267cfa0a660",n=new URL(h);n.searchParams.append("key",v);n.searchParams.append("image_type","photo");n.searchParams.append("orientation","horizontal");n.searchParams.append("safesearch","true");n.searchParams.append("per_page","40");c.style.display="none";i.style.display="none";let l=1;const w=()=>{const o=document.querySelector(".card").getBoundingClientRect().height;window.scrollTo({top:window.scrollY+o*2,behavior:"smooth"})};p.addEventListener("submit",async s=>{s.preventDefault(),l=1,c.style.display="block",m.innerHTML="";const t=s.currentTarget.elements.inputValue.value.trim();t!==""?await y(t):(d.info({position:"center",title:"",message:"Please fill in the input field"}),c.style.display="none")});i.addEventListener("click",async()=>{const s=p.elements.inputValue.value.trim();await y(s),w()});async function L(s,t){n.searchParams.set("q",s),n.searchParams.set("page",t);try{return(await f.get(n)).data}catch(o){throw d.error({position:"center",title:"",message:"Sorry, there are no images matching your search query. Please try again!"}),i.style.display="none",o}}async function y(s){let t=!1;const o=n.searchParams.get("per_page"),a=n.searchParams.get("totalHits");try{const e=await L(s,l);if(m.insertAdjacentHTML("beforeend",b(e)),P.refresh(),l+=1,e.hits.length===0)throw new Error;if(Math.ceil(a/o)===l&&(t=!0,d.info({position:"center",title:"",message:"We're sorry, but you've reached the end of search results."}),i.style.display="none",c.style.display="none"),t)return[];i.style.display="block"}catch{d.error({position:"center",title:"",message:"We're sorry, but you've reached the end of search results."}),i.style.display="none"}finally{c.style.display="none"}}function b(s){return s.hits.reduce((o,a)=>(o+=`
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
        `,o),"")}const P=new g(".gallery a",{captionsData:"alt",captionDelay:250,captionPosition:"bottom"});
//# sourceMappingURL=commonHelpers.js.map
