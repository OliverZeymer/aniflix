const limit = 24
    const queries = new URLSearchParams(window.location.search)
    const currentPage = queries.get("page")
    const searchParams = queries.get("search")
   const API_URL = `https://api.jikan.moe/v4/anime?q=${searchParams}&order_by=members`; 

const apiSectionHeading = document.querySelector('.apiSection__primaryHeading');


async function searchAnime() {
    let response = await fetch(API_URL);
    let json = await response.json();
    console.log(json);
    apiSectionHeading.innerHTML = `We Found ${json.data.length} Results!`
    json.data.forEach(element => {
        const article = document.createElement("article")
        article.classList.add("apiArticle")
        article.addEventListener("click", function(){
            window.location.href =  `/anime.html?anime=${element.title_english}&page=${currentPage}`
        })
        const NEW_ITEM = `
        <img class="apiArticle__img" src="/assets/img/loading.gif" alt ="${element.title_english} Image">
        <h1 class="apiArticle__primaryHeading"><a class="apiArticle__link" href="/anime.html?anime=${element.title_english}" target="_blank">${element.popularity}. ${element.title_english}</a></h1>
        <h2 class="apiArticle__secondaryHeading">${element.title_japanese}</h2>
        <p class="apiArticle__score">Score: ${element.score}⭐</p>
        <p class="apiArticle__members">Members: ${element.members}</p>
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

searchAnime()
