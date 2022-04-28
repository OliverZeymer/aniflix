const limit=24,queries=new URLSearchParams(window.location.search),currentPage=queries.get("page"),API_URL=`https://api.jikan.moe/v4/characters?order_by=favorites&sort=desc&limit=${limit}&page=`+currentPage;async function getSingleCharacter(a){let e=await fetch(API_URL),t=await e.json();console.log(t,a);var r=t.data.find(e=>e.name===a),r=(document.title+=" - "+r.name,console.log(r),`
            <h1 class="CharacterHeading">${r.name}</h1>
            <img src="${r.images.webp.image_url}">
            <p class="singleCharacterInfo">${r.favorites}</p>
            <p class="singleCharacterInfo">${r.about}</p>
            
            `);let c=document.getElementsByClassName("singleAnime")[0];c.innerHTML+=r}const character=queries.get("character");function popUpTrailer(e){document.querySelector(".close-modal");let a=document.querySelector(".modal-outer");a.classList.add("open"),a.addEventListener("click",function(e){a.classList.remove("open")})}character?getSingleCharacter(character):window.location.href="/404.html";