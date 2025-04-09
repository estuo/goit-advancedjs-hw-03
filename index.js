import{i as a,S as m}from"./assets/vendor-JrXZsd1Y.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const l={form:document.querySelector(".form-js"),input:document.querySelector(".input-js"),list:document.querySelector(".gallery-js"),loader:document.querySelector(".loader")},c="hidden",d={BASE_URL:"https://pixabay.com/api/",API_KEY:"49692460-099fca5bd4b56e7d7d026f90d",IMAGE_TYPE:"photo",ORIENTATION:"horizontal",SAFESEARCH:!0},{BASE_URL:p,API_KEY:h,IMAGE_TYPE:g,ORIENTATION:y,SAFESEARCH:E}=d;function b(o){return o?(l.loader.classList.remove(c),fetch(`${p}?key=${h}&q=${o}&image_type=${g}&orientation=${y}&safesearch=${E}`).then(r=>{if(!r.ok)throw new Error(`Error data: ${r.status}`);return r.json()}).then(r=>r.hits.length===0?(a.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}),[]):r.hits).catch(r=>{a.error({title:"Error",message:"Something went wrong. Please try again!"}),console.log(r)}).finally(()=>{l.loader.classList.add(c)})):(a.error({title:"Error",message:"Please enter a valid search query!"}),Promise.resolve([]))}function S(o){return o.map(({webformatURL:r,largeImageURL:s,tags:n,likes:e,views:t,comments:i,downloads:f})=>`
<li class="gallery-item">
  <a class="gallery-link" href="${s}">
    <img class="gallery-image" src="${r}" alt="${n}" />
  </a>
  <div class="info">
    <p class="info-item"><b>Likes:</b> ${e}</p>
    <p class="info-item"><b>Views:</b> ${t}</p>
    <p class="info-item"><b>Comments:</b> ${i}</p>
    <p class="info-item"><b>Downloads:</b> ${f}</p>
  </div>
</li>`).join("")}const{form:L,input:$,list:u}=l,A=new m(".gallery-link",{captionsData:"alt",captionDelay:300});L.addEventListener("submit",o=>{o.preventDefault();const r=$.value.trim();u.innerHTML="",b(r).then(s=>{u.innerHTML=S(s),A.refresh()}).catch(s=>console.log(s))});
//# sourceMappingURL=index.js.map
