(()=>{"use strict";const e=document.getElementById("app"),t=document.getElementById("observe");let o=document.createElement("section");o.classList.add("Items");let n=JSON.parse(localStorage.getItem("pagination"))||"5";window.addEventListener("DOMContentLoaded",(()=>{localStorage.removeItem("pagination"),n="5",a=`https://api.escuelajs.co/api/v1/products?offset=${n}&limit=${s}`,console.log("api",a),c(),i(a)})),console.log("offset",n);let s="10",a=`https://api.escuelajs.co/api/v1/products?offset=${n}&limit=${s}`;function c(){localStorage.setItem("pagination",JSON.stringify(n))}const i=async t=>{var n;await(n=t,void fetch(n).then((e=>e.json())).then((t=>{c(),t.forEach((t=>{const n=document.createElement("article");n.classList.add("Card");const s=document.createElement("img");s.src=t.images[0];const a=document.createElement("h2");a.innerText=t.title;const c=document.createElement("small");c.innerText=`$ ${t.price}`,n.appendChild(s),n.appendChild(a),a.appendChild(c),o.appendChild(n),e.appendChild(o)}))})).catch((e=>console.log(e))))},l=new IntersectionObserver((o=>{o.forEach((o=>{o.isIntersecting&&((()=>{if(205!=n)n=Number(n)+Number(s),n=String(n),a=`https://api.escuelajs.co/api/v1/products?offset=${n}&limit=${s}`,c(),i(a);else{const o=document.createElement("p");o.innerText="Todos los productos Obtenidos",o.classList.add("finalP"),e.appendChild(o),l.unobserve(t),alert("Todos los productos Obtenidos")}})(),console.log("soy el observer"))}))}),{rootMargin:"0px 0px 100% 0px"});setTimeout((()=>{l.observe(t)}),2e3)})();