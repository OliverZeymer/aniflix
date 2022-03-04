const queries = new URLSearchParams(window.location.search)
var searchParams = queries.get("search")
console.log(searchParams);
const API_URL = `https://api.jikan.moe/v4/anime?q=${searchParams}&sort=desc&order_by=members`

const apiSectionHeading = document.querySelector('.apiSection__primaryHeading');


async function searchAnime() {
    let response = await fetch(API_URL);
    let json = await response.json();
    console.log(json);
    apiSectionHeading.innerHTML = `We Found ${json.data.length} Results!`
    json.data.forEach(element => {
        const NEW_ITEM = `
        <article class="apiArticle" onclick="window.location.href='/search_anime.html?anime=${element.title_english}&q=${searchParams}'">
        <img class="apiImg" src="${element.images.webp.large_image_url}" alt ="${element.title_english} Image">
        <h1 class="apiHeading"><a class="apiHeading__link" href="/anime.html?anime=${element.title_english}" target="_blank">${element.popularity}. ${element.title_english || element.title}</a></h1>
        <h2 class="apiSecondHeading">${element.title_japanese}</h2>
        <p class="apiScore">Score: ${element.score}⭐</p>
        <p class="apiScore">Members: ${element.members}</p>
        </article>
    `
        let apiElements = document.querySelector('.apiElements');
        apiElements.innerHTML += NEW_ITEM
    })
}

searchAnime()
