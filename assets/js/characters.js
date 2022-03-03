const limit = 24
const queries = new URLSearchParams(window.location.search)
var currentPage = parseInt(queries.get("page")) || 1
const API_URL = `https://api.jikan.moe/v4/characters?order_by=favorites&sort=desc&limit=${limit}&page=${currentPage}`;

var prevBtn = document.querySelector('.prev');
var nextBtn = document.querySelector('.next');

async function getAnimeCharacter() {
    let response = await fetch(API_URL);
    let json = await response.json();
    const pages = Math.ceil(23593 / limit)
    if (!json.meta){
        Math.ceil(23593 / limit)
    } else{
        Math.ceil(json.meta.total / limit)
    }
    
    prevBtn.href = `?page=${currentPage - 1}`
    nextBtn.href = `?page=${currentPage + 1}`
    if (currentPage > pages) {
        currentPage = pages
        prevBtn.href = `?page=${currentPage - 1}`
        nextBtn.href = `?page=${currentPage}`
    }
    
    if (currentPage < 1) {
        currentPage = 1
        prevBtn.href = `?page=${currentPage}`
        nextBtn.href = `?page=${currentPage + 1}`
    }
    console.log(pages, currentPage, json);

    json.data.forEach(element => {
        const NEW_ITEM = `
        <article class="apiArticle" onclick="window.location.href='/singleCharacter.html?character=${element.name}&page=${currentPage}'">
        <img src="${element.images.webp.image_url}" alt ="${element.name} Image">
        <h1 class="apiHeading"><a class="apiHeading__link" href="/anime.html?anime=${element.name}" target="_blank">${element.name}</a></h1>
        <h2 class="apiSecondHeading">${element.name_kanji}</h2>
        <p class="apiScore">Favorites ${element.favorites}⭐</p>
        </article>
    `
        let apiElements = document.querySelector('.apiElements');
        apiElements.innerHTML += NEW_ITEM
    })
}


let pageIdentifier = document.querySelector('.pageIdentifier');
pageIdentifier.innerHTML = "Page: " + currentPage

getAnimeCharacter()