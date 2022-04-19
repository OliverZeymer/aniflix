const limit=24,queries=new URLSearchParams(window.location.search),currentPage=queries.get("page"),searchParams=queries.get("q"),API_URL="https://api.jikan.moe/v4/anime?q="+searchParams;async function getSingleAnimeSearch(i){let e=await fetch(API_URL),s=await e.json(),a=(console.log(s,i),s.data.find(e=>e.title_english===i));document.title+=" - "+a.title_english,console.log(a);var n=`
            <h1 class="animeHeading">${a.title_english}</h1>
            <p class="singleAnimeInfo">${a.title_japanese}</p>
            <p class="singleAnimeInfo">${a.year}</p>
            <img class="singleAnimeImg" src="${a.images.webp.large_image_url}">
            <button class="trailerLink" onclick="popUpTrailer();"> ▶Watch Trailer</button>
            <h2 class="singleAnimeInfo">Synopsis:</h2>
            <p class="synopsis">${a.synopsis}</p>
            <p class="singleAnimeInfo">Rated: ${a.score}⭐</p>
            <p class="singleAnimeInfo">Episodes: ${a.episodes}</p>
            <a class="animeLink singleAnimeInfo" href="${a.url}" target="_blank">MAL LINK 🡥</a>
            <p class="singleAnimeInfo">Aired from: ${a.aired.prop.from.year} - ${a.aired.prop.to.year}</p>
            <p class="singleAnimeInfo">Studio: ${a.studios[0].name}</p>
            <p class="singleAnimeInfo">Producers: ${a.producers.map(e=>" "+e.name)}</p>    
            <div class="modal-outer">
                <div class="modal-inner">
                <iframe width="470" height="315" src="${a.trailer.embed_url}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <button class="close-modal">X</button>
                </div>
            </div>
            `;let l=document.getElementsByClassName("singleAnime")[0];l.innerHTML+=n}const anime=queries.get("anime");function popUpTrailer(e){document.querySelector(".close-modal");let i=document.querySelector(".modal-outer");i.classList.add("open"),i.addEventListener("click",function(e){i.classList.remove("open")})}anime?getSingleAnimeSearch(anime):window.location.href="/404.html";