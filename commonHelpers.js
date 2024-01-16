import{i as d,S as f,a as g}from"./assets/vendor-89feecc5.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const u of a.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&o(u)}).observe(document,{childList:!0,subtree:!0});function t(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerpolicy&&(a.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?a.credentials="include":e.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(e){if(e.ep)return;e.ep=!0;const a=t(e);fetch(e.href,a)}})();const p=document.querySelector(".body-elements"),m=document.querySelector(".images-list"),i=document.querySelector(".loader"),c=document.querySelector(".load-more-btn"),h="https://pixabay.com/api/",v="27271649-0bf2f3b05194a9267cfa0a660",n=new URL(h);n.searchParams.append("key",v);n.searchParams.append("image_type","photo");n.searchParams.append("orientation","horizontal");n.searchParams.append("safesearch","true");n.searchParams.append("per_page","40");i.style.display="none";c.style.display="none";let l=1;const w=()=>{const t=document.querySelector(".card").getBoundingClientRect().height;window.scrollTo({top:window.scrollY+t*2,behavior:"smooth"})};p.addEventListener("submit",async r=>{r.preventDefault(),l=1,i.style.display="block",m.innerHTML="";const s=r.currentTarget.elements.inputValue.value.trim();s!==""?await y(s):(d.info({position:"center",title:"",message:"Please fill in the input field"}),i.style.display="none"),r.currentTarget.reset()});c.addEventListener("click",async()=>{const r=p.elements.inputValue.value;await y(r),w()});async function L(r,s){n.searchParams.set("q",r),n.searchParams.set("page",s);try{return(await g.get(n)).data}catch(t){throw d.error({position:"center",title:"",message:"Sorry, there are no images matching your search query. Please try again!"}),c.style.display="none",t}}async function y(r){let s=!1;try{const t=await L(r,l);if(m.insertAdjacentHTML("beforeend",b(t)),P.refresh(),l+=1,t.hits.length===0)throw new Error;if(l>=Math.ceil(t.totalHits/40)&&(s=!0,d.info({position:"center",title:"",message:"We're sorry, but you've reached the end of search results."}),c.style.display="none",i.style.display="none"),s)return[];c.style.display="block"}catch{d.error({position:"center",title:"",message:"Error! Enter a valid request."})}i.style.display="none"}function b(r){return r.hits.reduce((t,o)=>(t+=`
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
        `,t),"")}const P=new f(".gallery a",{captionsData:"alt",captionDelay:250,captionPosition:"bottom"});
//# sourceMappingURL=commonHelpers.js.map
