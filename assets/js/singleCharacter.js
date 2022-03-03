const limit = 24
    const queries = new URLSearchParams(window.location.search)
    const currentPage = queries.get("page")
   const API_URL = `https://api.jikan.moe/v4/characters?order_by=favorites&sort=desc&limit=${limit}&page=${currentPage}`; 

async function getSingleCharacter(character) {
    let response = await fetch(API_URL);
    let json = await response.json();
    console.log(json, character);
    let singleCharacter = json.data.find(element => element.name === character)
    document.title += " - " + singleCharacter.title_english
    console.log(singleCharacter);
    const NEW_ITEM = `
            <h1 class="CharacterHeading">${singleCharacter.name}</h1>
            <img src="${singleCharacter.images.webp.image_url}">
            <p class="singleCharacterInfo">${singleCharacter.favorites}</p>
            <p class="singleCharacterInfo">${singleCharacter.about}</p>
            
            `
    let singleAnimeElement = document.getElementsByClassName("singleAnime")[0]
    singleAnimeElement.innerHTML += NEW_ITEM
}



const character = queries.get("character")
if (!character) {
    window.location.href = "/404.html"
} else {
    getSingleCharacter(character)
}


function popUpTrailer(event) {
    let closeBtn = document.querySelector(".close-modal");
    let modalOuter = document.querySelector(".modal-outer");
    modalOuter.classList.add("open"); 
    modalOuter.addEventListener("click", function(event){
        modalOuter.classList.remove("open")
    });
}