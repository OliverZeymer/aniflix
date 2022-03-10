const limit = 24
const queries = new URLSearchParams(window.location.search)
var currentPage = parseInt(queries.get("page")) || 1
const API_URL = `https://api.jikan.moe/v4/anime?order_by=members&sort=desc&limit=${limit}&page=${currentPage}`;

var prevBtn = document.querySelector('.prev');
var nextBtn = document.querySelector('.next');

async function getAnime() {
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
            window.location.href =  `/anime.html?anime=${element.title_english}&page=${currentPage}`
        })

        const NEW_ITEM = `
        <img class="apiImg" src="/assets/img/loading.gif" alt ="${element.title_english} Image">
        <h1 class="apiHeading"><a class="apiHeading__link" href="/anime.html?anime=${element.title_english}" target="_blank">${element.popularity}. ${element.title_english}</a></h1>
        <h2 class="apiSecondHeading">${element.title_japanese}</h2>
        <p class="apiScore">Score: ${element.score}⭐</p>
        <p class="apiScore">Members: ${element.members}</p>
    `
        article.innerHTML += NEW_ITEM
        let apiElements = document.querySelector('.apiElements');
        apiElements.appendChild(article)


        const image = new Image()
        image.src = `${element.images.webp.large_image_url}`
        //image.style.display = "none"


        const finishedImage = article.querySelector("img")

        image.onload = function () {
            finishedImage.src = image.src
        }
    })
}


let pageIdentifier = document.querySelector('.pageIdentifier');
pageIdentifier.innerHTML = "Page: " + currentPage + " / 983"

getAnime()





// let searchBar = document.querySelector('#searchBar');
// searchBar.addEventListener('input', function () {
//     let apiHeading = document.querySelectorAll('.apiHeading');
//     apiHeading.forEach(element => {
//         if (!element.innerText.toLowerCase().includes(searchBar.value.toLowerCase())) {
//             element.parentElement.style.display = "none"
//         } else{
//             element.parentElement.style.display = "flex"
//         }
//     })
// });