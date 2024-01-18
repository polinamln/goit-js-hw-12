import{i as d,S as g,a as f}from"./assets/vendor-89feecc5.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const p of r.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&s(p)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const u=document.querySelector(".body-elements"),m=document.querySelector(".images-list"),l=document.querySelector(".loader"),i=document.querySelector(".load-more-btn"),h="https://pixabay.com/api/",v="27271649-0bf2f3b05194a9267cfa0a660",n=new URL(h);n.searchParams.append("key",v);n.searchParams.append("image_type","photo");n.searchParams.append("orientation","horizontal");n.searchParams.append("safesearch","true");n.searchParams.append("per_page","40");l.style.display="none";i.style.display="none";let c=1;const w=()=>{const o=document.querySelector(".card").getBoundingClientRect().height;window.scrollTo({top:window.scrollY+o*2,behavior:"smooth"})};u.addEventListener("submit",async a=>{a.preventDefault(),c=1,l.style.display="block",m.innerHTML="";const t=a.currentTarget.elements.inputValue.value.trim();t!==""?await y(t):(d.info({position:"center",title:"",message:"Please fill in the input field"}),l.style.display="none",u.elements.inputValue.value="")});i.addEventListener("click",async()=>{const a=u.elements.inputValue.value.trim();await y(a),w()});async function L(a,t){n.searchParams.set("q",a),n.searchParams.set("page",t);try{return(await f.get(n)).data}catch(o){throw d.error({position:"center",title:"",message:"Sorry, there are no images matching your search query. Please try again!"}),i.style.display="none",o}}async function y(a){let t=!1;const o=n.searchParams.get("per_page"),s=n.searchParams.get("totalHits");try{const e=await L(a,c);if(m.insertAdjacentHTML("beforeend",b(e)),P.refresh(),c+=1,e.hits.length===0)throw new Error;if(Math.ceil(s/o)===c&&(t=!0,d.info({position:"center",title:"",message:"We're sorry, but you've reached the end of search results."}),i.style.display="none",l.style.display="none"),t)return[];i.style.display="block"}catch{d.error({position:"center",title:"",message:"We're sorry, but you've reached the end of search results."}),i.style.display="none",u.elements.inputValue.value=""}finally{l.style.display="none"}}function b(a){return a.hits.reduce((o,s)=>(o+=`
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
        `,o),"")}const P=new g(".gallery a",{captionsData:"alt",captionDelay:250,captionPosition:"bottom"});
//# sourceMappingURL=commonHelpers.js.map
