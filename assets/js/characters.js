const limit=24,queries=new URLSearchParams(window.location.search);var currentPage=parseInt(queries.get("page"))||1;const API_URL=`https://api.jikan.moe/v4/characters?order_by=favorites&sort=desc&limit=${limit}&page=`+currentPage,prevBtn=document.getElementsByClassName("prev")[0],nextBtn=document.getElementsByClassName("next")[0];async function getAnimeCharacter(){let e=await fetch(API_URL),a=await e.json();var t=Math.ceil(23593/limit);a.meta?Math.ceil(a.meta.total/limit):Math.ceil(23593/limit),prevBtn.href="?page="+(currentPage-1),nextBtn.href="?page="+(currentPage+1),t<currentPage&&(currentPage=t,prevBtn.href="?page="+(currentPage-1),nextBtn.href="?page="+currentPage),currentPage<1&&(currentPage=1,prevBtn.href="?page="+currentPage,nextBtn.href="?page="+(currentPage+1)),console.log(t,currentPage,a),a.data.forEach(e=>{const a=document.createElement("article");a.classList.add("apiArticle"),a.addEventListener("click",function(){window.location.href=`/singleCharacter.html?character=${e.name}&page=`+currentPage});var t=`
        <img class="apiArticle__img" src="/assets/img/loading.gif" alt ="${e.name} Image">
        <h1 class="apiArticle__primaryHeading"><a class="apiArticle__link" href="/anime.html?anime=${e.name}" target="_blank">${e.name}</a></h1>
        <h2 class="apiArticle__secondaryHeading">${e.name_kanji}</h2>
        <p class="apiArticle__score">Favorites ${e.favorites}⭐</p>
    `;a.innerHTML+=t;let r=document.querySelector(".apiElements");r.appendChild(a);const n=new Image,i=(n.src=""+e.images.webp.image_url,a.querySelector("img"));n.onload=function(){i.src=n.src},a.style.height="400px"})}let pageIdentifier=document.querySelector(".pageIdentifier");pageIdentifier.innerHTML="Page: "+currentPage+" / 983",getAnimeCharacter();