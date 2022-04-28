async function getFavorites(){let e=await fetch("http://localhost:3000/favorites"),t=await e.json();console.log(t),t.forEach(e=>{e=`
        <h1>${e.title}</h1>
        <img src="${e.images.url}">
        <p>${e.synopsis}</p>
        <a href ="${e.url}" target="_blank">LINK</a>
    `;const t=document.createElement("article");t.classList.add("favoritesArticle"),t.innerHTML+=e;let l=document.querySelector(".section");l.appendChild(t),t.style.marginBottom="4rem",t.style.display="flex",t.style.alignItems="center",t.style.flexDirection="column"})}getFavorites();