const limit = 24
const queries = new URLSearchParams(window.location.search)
var currentPage = parseInt(queries.get("page")) || 1
const API_URL = `https://api.jikan.moe/v4/characters?order_by=favorites&sort=desc&limit=${limit}&page=${currentPage}`;
const prevBtn = document.getElementsByClassName('prev')[0];
const nextBtn = document.getElementsByClassName('next')[0];

async function getAnimeCharacter() {
    let response = await fetch(API_URL);
    let json = await response.json();
    const pages = Math.ceil(23593 / limit)
    if (!json.meta) {
        Math.ceil(23593 / limit)
    } else {
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
        const article = document.createElement("article")
        article.classList.add("apiArticle")
        article.addEventListener("click", function(){
            window.location.href =  `/singleCharacter.html?character=${element.name}&page=${currentPage}`
        })

        const NEW_ITEM = `
        <img class="apiArticle__img" src="/assets/img/loading.gif" alt ="${element.name} Image">
        <h1 class="apiArticle__primaryHeading"><a class="apiArticle__link" href="/anime.html?anime=${element.name}" target="_blank">${element.name}</a></h1>
        <h2 class="apiArticle__secondaryHeading">${element.name_kanji}</h2>
        <p class="apiArticle__score">Favorites ${element.favorites}⭐</p>
    `
        article.innerHTML += NEW_ITEM
        let apiElements = document.querySelector('.apiElements');
        apiElements.appendChild(article)


        const image = new Image()
        image.src = `${element.images.webp.image_url}`
        //image.style.display = "none"


        const finishedImage = article.querySelector("img")

        image.onload = function () {
            finishedImage.src = image.src
        }
        article.style.height = "400px"
    })
}


let pageIdentifier = document.querySelector('.pageIdentifier');
pageIdentifier.innerHTML = "Page: " + currentPage + " / 983"

getAnimeCharacter()