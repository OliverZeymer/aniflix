const queries=new URLSearchParams(window.location.search);var searchParams=queries.get("search");console.log(searchParams);const API_URL=`https://api.jikan.moe/v4/anime?q=${searchParams}&sort=desc&order_by=members`,apiSectionHeading=document.querySelector(".apiSection__primaryHeading");async function searchAnime(){let e=await fetch(API_URL),a=await e.json();console.log(a),apiSectionHeading.innerHTML=`We Found ${a.data.length} Results!`,a.data.forEach(e=>{e=`
        <article class="apiArticle" onclick="window.location.href='/search_anime.html?anime=${e.title_english}&q=${searchParams}'">
        <img class="apiImg" src="${e.images.webp.large_image_url}" alt ="${e.title_english} Image">
        <h1 class="apiHeading"><a class="apiHeading__link" href="/anime.html?anime=${e.title_english}" target="_blank">${e.popularity}. ${e.title_english||e.title}</a></h1>
        <h2 class="apiSecondHeading">${e.title_japanese}</h2>
        <p class="apiScore">Score: ${e.score}⭐</p>
        <p class="apiScore">Members: ${e.members}</p>
        </article>
    `;let a=document.querySelector(".apiElements");a.innerHTML+=e})}searchAnime();