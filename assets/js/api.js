const API_URL = 'https://api.jikan.moe/v4/anime?order_by=members&sort=desc&offset=0';
const API_URL2 = 'https://api.jikan.moe/v4/anime?order_by=members&sort=desc&offset=0&page=2';

async function getAnime() {
    let response = await fetch(API_URL);
    let json = await response.json();

    let i = 1;
    console.log(json);
    json.data.forEach(element => {
        const NEW_ITEM = `
        <article class="apiArticle" onclick="window.location.href='/anime.html?anime=${element.title_english}'">
        <img class="apiImg" src="${element.images.webp.large_image_url}" alt ="${element.title_english} Image">
        <h1 class="apiHeading"><a class="apiHeading__link" href="/anime.html?anime=${element.title_english}" target="_blank">${i}. ${element.title_english}</a></h1>
        <h2 class="apiSecondHeading">${element.title_japanese}</h2>
        <p class="apiScore">Score: ${element.score}⭐</p>
        <p class="apiScore">Members: ${element.members}</p>
        </article>
    `
        let apiElements = document.querySelector('.apiElements');
        apiElements.innerHTML += NEW_ITEM
        i++
    })



    let response2 = await fetch(API_URL2);
    let json2 = await response2.json();
    console.log(json2);
    json2.data.forEach(element => {
        const NEW_ITEM = `
        <article class="apiArticle" onclick="window.location.href='/anime.html?anime=${element.title_english}'">
        <img class="apiImg" src="${element.images.webp.large_image_url}" alt ="${element.title_english} Image">
        <h1 class="apiHeading"><a class="apiHeading__link" href="/anime.html?anime=${element.title_english}" target="_blank">${i}. ${element.title_english}</a></h1>
        <h2 class="apiSecondHeading">${element.title_japanese}</h2>
        <p class="apiScore">Score: ${element.score}⭐</p>
        <p class="apiScore">Members: ${element.members}</p>
        </article>
    `
        let apiElements = document.querySelector('.apiElements');
        apiElements.innerHTML += NEW_ITEM
        i++
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

getAnime()