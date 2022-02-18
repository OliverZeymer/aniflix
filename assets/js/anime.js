const API_URL = 'https://api.jikan.moe/v4/anime?order_by=members&sort=desc&offset=0';
const API_URL2 = 'https://api.jikan.moe/v4/anime?order_by=members&sort=desc&offset=0&page=2';

async function getSingleAnime(anime) {
    let response = await fetch(API_URL);
    let json = await response.json();
    let singleAnime = json.data.find(element => element.title === anime)
    document.title += " - " + singleAnime.title
    console.log(singleAnime);
            const NEW_ITEM =`<article>
            <h1>${singleAnime.title}</h1>
            <p>${singleAnime.synopsis}</p>
            <p>${singleAnime.year}</p>
            <img src="${singleAnime.images.webp.large_image_url}">
            <p>Aired from: ${singleAnime.aired.prop.from.year} - ${singleAnime.aired.prop.to.year}</p>
            <p>Licensor: ${singleAnime.licensors[0].name}</p>
            <p>Producers: ${singleAnime.producers.map(producers => ' ' + producers.name)}</p>
            <p>${singleAnime.score}⭐</p>
            <p></p>
            <p></p>
            <p></p>
            </article>    
            `
    let singleApi = document.getElementsByClassName("singleApi")[0]
    singleApi.innerHTML += NEW_ITEM

}
const queries = new URLSearchParams(window.location.search)
const anime = queries.get("anime")



if (!anime) {
    window.location.href = "/404.html"
} else {
    getSingleAnime(anime)
}
