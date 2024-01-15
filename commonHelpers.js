import{i,S as y,a as g}from"./assets/vendor-89feecc5.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const d of s.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&o(d)}).observe(document,{childList:!0,subtree:!0});function a(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerpolicy&&(s.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?s.credentials="include":e.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(e){if(e.ep)return;e.ep=!0;const s=a(e);fetch(e.href,s)}})();const u=document.querySelector(".body-elements"),p=document.querySelector(".images-list"),l=document.querySelector(".loader"),c=document.querySelector(".load-more-btn"),f="https://pixabay.com/api/",h="27271649-0bf2f3b05194a9267cfa0a660",n=new URL(f);n.searchParams.append("key",h);n.searchParams.append("image_type","photo");n.searchParams.append("orientation","horizontal");n.searchParams.append("safesearch","true");n.searchParams.append("page","1");n.searchParams.append("per_page","40");l.style.display="none";c.style.display="none";const v=()=>{const a=document.querySelector(".card").getBoundingClientRect().height;window.scrollTo({top:window.scrollY+a*2,behavior:"smooth"})};u.addEventListener("submit",async r=>{r.preventDefault(),l.style.display="block",p.innerHTML="";const t=r.currentTarget.elements.inputValue.value.trim();t!==""?await m(t):(i.info({position:"center",title:"",message:"Please fill in the input field"}),l.style.display="none"),r.currentTarget.reset()});c.addEventListener("click",async()=>{const r=u.elements.inputValue.value;await m(r),await v()});async function w(r){n.searchParams.set("q",r);try{return(await g.get(n)).data}catch(t){throw i.error({position:"center",title:"",message:"Sorry, there are no images matching your search query. Please try again!"}),t}}async function m(r){let t=1;try{const a=await w(r);if(p.insertAdjacentHTML("beforeend",L(a)),b.refresh(),t+=1,a.hits.length===0&&i.error({position:"center",title:"",message:"Error. Please try again!"}),t>=Math.ceil(a.totalHits/40)){i.info({position:"center",title:"",message:"We're sorry, but you've reached the end of search results."}),c.style.display="none";return}}catch{i.error({position:"center",title:"",message:"Error. Please try again!"}),c.style.display="none"}c.style.display="block",l.style.display="none"}function L(r){return r.hits.reduce((a,o)=>(a+=`
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
        `,a),"")}const b=new y(".gallery a",{captionsData:"alt",captionDelay:250,captionPosition:"bottom"});
//# sourceMappingURL=commonHelpers.js.map
