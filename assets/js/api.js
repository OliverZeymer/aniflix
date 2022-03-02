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
        <article class="apiArticle" onclick="window.location.href='/anime.html?anime=${element.title_english}&page=${currentPage}'">
        <img class="apiImg" src="${element.images.webp.large_image_url}" alt ="${element.title_english} Image">
        <h1 class="apiHeading"><a class="apiHeading__link" href="/anime.html?anime=${element.title_english}" target="_blank">${element.popularity}. ${element.title_english}</a></h1>
        <h2 class="apiSecondHeading">${element.title_japanese}</h2>
        <p class="apiScore">Score: ${element.score}⭐</p>
        <p class="apiScore">Members: ${element.members}</p>
        </article>
    `
        let apiElements = document.querySelector('.apiElements');
        apiElements.innerHTML += NEW_ITEM
    })






let searchBar = document.querySelector('#searchBar');

}
searchBar.addEventListener('input', function () {
    let apiHeading = document.querySelectorAll('.apiHeading');
    apiHeading.forEach(element => {
        if (!element.innerText.toLowerCase().includes(searchBar.value.toLowerCase())) {
            element.parentElement.style.display = "none"
        } else{
            element.parentElement.style.display = "flex"
        }
    })
});

let pageIdentifier = document.querySelector('.pageIdentifier');
pageIdentifier.innerHTML = "Page: " + currentPage

getAnime()









// const API_URL2 = 'https://api.jikan.moe/v4/anime?order_by=members&sort=desc&offset=0&page=2';    

// let response2 = await fetch(API_URL2);
    // let json2 = await response2.json();
    // console.log(json2);
    // json2.data.forEach(element => {
    //     const NEW_ITEM = `
    //     <article class="apiArticle" onclick="window.location.href='/anime.html?anime=${element.title_english}'">
    //     <img class="apiImg" src="${element.images.webp.large_image_url}" alt ="${element.title_english} Image">
    //     <h1 class="apiHeading"><a class="apiHeading__link" href="/anime.html?anime=${element.title_english}" target="_blank">${i}. ${element.title_english}</a></h1>
    //     <h2 class="apiSecondHeading">${element.title_japanese}</h2>
    //     <p class="apiScore">Score: ${element.score}⭐</p>
    //     <p class="apiScore">Members: ${element.members}</p>
    //     </article>
    // `
    //     let apiElements = document.querySelector('.apiElements');
    //     apiElements.innerHTML += NEW_ITEM
    //     i++
    // })