function openLetter(n,m){overlay.style.display='flex';t.innerText='💌 Untuk '+n;c.innerText=m;}
function closeLetter(){overlay.style.display='none';}
```javascript
function openImage(src){

document.getElementById("lightbox").style.display="flex";

document.getElementById("lightbox-img").src=src;

document.getElementById("downloadBtn").href=src;

}

function closeImage(){

document.getElementById("lightbox").style.display="none";

}
```
