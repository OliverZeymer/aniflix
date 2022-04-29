const limit = 24
    const queries = new URLSearchParams(window.location.search)
    const currentPage = queries.get("page")
    const searchParams = queries.get("q")
   const API_URL = `https://api.jikan.moe/v4/anime?q=${searchParams}`; 

async function getSingleAnimeSearch(anime) {
    let response = await fetch(API_URL);
    let json = await response.json();
    console.log(json, anime);
    let singleAnime = json.data.find(element => element.title_english === anime)
    document.title += " - " + singleAnime.title_english
    console.log(singleAnime);
    const NEW_ITEM = `
            <h1 class="animeHeading">${singleAnime.title_english}</h1>
            <p class="singleAnimeInfo">${singleAnime.title_japanese}</p>
            <p class="singleAnimeInfo">${singleAnime.year}</p>
            <img class="singleAnimeImg" src="${singleAnime.images.webp.large_image_url}">
            <button class="trailerLink" onclick="popUpTrailer();"> ▶Watch Trailer</button>
            <h2 class="singleAnimeInfo">Synopsis:</h2>
            <p class="synopsis">${singleAnime.synopsis}</p>
            <p class="singleAnimeInfo">Rated: ${singleAnime.score}⭐</p>
            <p class="singleAnimeInfo">Episodes: ${singleAnime.episodes}</p>
            <a class="animeLink singleAnimeInfo" href="${singleAnime.url}" target="_blank">MAL LINK 🡥</a>
            <p class="singleAnimeInfo">Aired from: ${singleAnime.aired.prop.from.year} - ${singleAnime.aired.prop.to.year}</p>
            <p class="singleAnimeInfo">Studio: ${singleAnime.studios[0].name}</p>
            <p class="singleAnimeInfo">Producers: ${singleAnime.producers.map(producers => ' ' + producers.name)}</p>    
            <div class="modal-outer">
                <div class="modal-inner">
                <iframe width="470" height="315" src="${singleAnime.trailer.embed_url}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <button class="close-modal">X</button>
                </div>
            </div>
            `
    let singleAnimeElement = document.getElementsByClassName("singleAnime")[0]
    singleAnimeElement.innerHTML += NEW_ITEM
}



const anime = queries.get("anime")
if (!anime) {
    window.location.href = "/404.html"
} else {
    getSingleAnimeSearch(anime)
}


function popUpTrailer(event) {
    let closeBtn = document.querySelector(".close-modal");
    let modalOuter = document.querySelector(".modal-outer");
    modalOuter.classList.add("open"); 
    modalOuter.addEventListener("click", function(event){
        modalOuter.classList.remove("open")
    });
}