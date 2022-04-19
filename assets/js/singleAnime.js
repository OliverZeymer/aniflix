const limit=24,queries=new URLSearchParams(window.location.search),currentPage=queries.get("page"),API_URL=`https://api.jikan.moe/v4/anime?order_by=members&sort=desc&limit=${limit}&page=`+currentPage;async function getSingleAnime(i){let e=await fetch(API_URL),n=await e.json(),s=(console.log(n,i),n.data.find(e=>e.title_english===i));document.title+=" - "+s.title_english,console.log(s);var a=`
            <h1 class="animeHeading">${s.title_english}</h1>
            <p class="singleAnimeInfo">${s.title_japanese}</p>
            <p class="singleAnimeInfo">${s.year}</p>
            <img class="singleAnimeImg" src="${s.images.webp.large_image_url}">
            <button class="trailerLink" onclick="popUpTrailer();"> ▶Watch Trailer</button>
            <h2 class="singleAnimeInfo">Synopsis:</h2>
            <p class="synopsis">${s.synopsis}</p>
            <p class="singleAnimeInfo">Rated: ${s.score}⭐</p>
            <p class="singleAnimeInfo">Episodes: ${s.episodes}</p>
            <a class="animeLink singleAnimeInfo" href="${s.url}" target="_blank">MAL LINK 🡥</a>
            <p class="singleAnimeInfo">Aired from: ${s.aired.prop.from.year} - ${s.aired.prop.to.year}</p>
            <p class="singleAnimeInfo">Licensor: ${s.licensors[0].name}</p>
            <p class="singleAnimeInfo">Producers: ${s.producers.map(e=>" "+e.name)}</p>    
            <div class="modal-outer">
                <div class="modal-inner">
                <iframe width="470" height="315" src="${s.trailer.embed_url}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <button class="close-modal">X</button>
                </div>
            </div>
            `;let l=document.getElementsByClassName("singleAnime")[0];l.innerHTML+=a}const anime=queries.get("anime");function popUpTrailer(e){document.querySelector(".close-modal");let i=document.querySelector(".modal-outer");i.classList.add("open"),i.addEventListener("click",function(e){i.classList.remove("open")})}anime?getSingleAnime(anime):window.location.href="/404.html";