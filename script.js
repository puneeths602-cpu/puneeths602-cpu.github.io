const menuBtn=document.getElementById("menuBtn"),nav=document.getElementById("nav");
menuBtn.addEventListener("click",()=>{nav.classList.toggle("open");menuBtn.textContent=nav.classList.contains("open")?"✕":"☰"});
document.querySelectorAll("#nav a").forEach(a=>a.addEventListener("click",()=>{nav.classList.remove("open");menuBtn.textContent="☰"}));
document.getElementById("year").textContent=new Date().getFullYear();