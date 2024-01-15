import{i as c,S as f,a as g}from"./assets/vendor-89feecc5.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const d of s.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&o(d)}).observe(document,{childList:!0,subtree:!0});function a(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerpolicy&&(s.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?s.credentials="include":e.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(e){if(e.ep)return;e.ep=!0;const s=a(e);fetch(e.href,s)}})();const p=document.querySelector(".body-elements"),m=document.querySelector(".images-list"),l=document.querySelector(".loader"),i=document.querySelector(".load-more-btn"),h="https://pixabay.com/api/",v="27271649-0bf2f3b05194a9267cfa0a660",n=new URL(h);n.searchParams.append("key",v);n.searchParams.append("image_type","photo");n.searchParams.append("orientation","horizontal");n.searchParams.append("safesearch","true");n.searchParams.append("page","1");n.searchParams.append("per_page","40");l.style.display="none";i.style.display="none";const w=()=>{const a=document.querySelector(".card").getBoundingClientRect().height;window.scrollTo({top:window.scrollY+a*2,behavior:"smooth"})};p.addEventListener("submit",async r=>{r.preventDefault(),l.style.display="block",m.innerHTML="";const t=r.currentTarget.elements.inputValue.value.trim();t!==""?await y(t):(c.info({position:"center",title:"",message:"Please fill in the input field"}),l.style.display="none"),r.currentTarget.reset()});i.addEventListener("click",async()=>{const r=p.elements.inputValue.value;await y(r),w()});async function L(r){n.searchParams.set("q",r);try{return(await g.get(n)).data}catch(t){throw c.error({position:"center",title:"",message:"Sorry, there are no images matching your search query. Please try again!"}),i.style.display="none",t}}let u=1;async function y(r){let t=!1;try{const a=await L(r,{page:u});if(m.insertAdjacentHTML("beforeend",b(a)),P.refresh(),u+=1,a.hits.length===0)throw new Error;if(u>=Math.ceil(a.totalHits/40)&&(t=!0,c.info({position:"center",title:"",message:"We're sorry, but you've reached the end of search results."}),i.style.display="none"),t)return[];i.style.display="block"}catch{c.error({position:"center",title:"",message:"Error! Enter a valid request."})}l.style.display="none"}function b(r){return r.hits.reduce((a,o)=>(a+=`
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
        `,a),"")}const P=new f(".gallery a",{captionsData:"alt",captionDelay:250,captionPosition:"bottom"});
//# sourceMappingURL=commonHelpers.js.map
