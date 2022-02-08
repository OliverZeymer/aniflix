const API_URL = 'https://api.jikan.moe/v4/anime?order_by=members&sort=desc';

async function getPopularAnime() {
    let response = await fetch(API_URL);
    let json = await response.json();

    let i = 1;
    console.log(json);
    json.data.forEach(element => {
        const newItem = `
        <h1 class="apiHeading"><a class="apiHeading__link" href="${element. url}" target="_blank">${i}. ${element.title}</a></h1>
        <h2 class="apiSecondHeading">${element.title_japanese}</h2>
        <img src="${element.images.webp.large_image_url}" alt ="">
        <h3 class="apiThirdHeading">Synopsis:</h3>
        <p>${element.synopsis}</p>
        <p class="apiScore">Score: ${element.score}⭐</p>
        <p class="apiScore">Members: ${element.members}</p>
        <a class="trailerLink" href="${element.trailer.url}" target="_blank">Watch Trailer</a>
        <div class="apiInfo">
        <p>Status: ${element.status}</p>
        <p>Year: ${element.year}</p>
        <p>Genres: ${element.genres.map(genre => ' ' + genre.name)}</p>
        </div>
    `
        let apiSection = document.querySelector('.apiSection');
        const article = document.createElement("article")
        article.classList.add("apiArticle")
        article.innerHTML = newItem
        apiSection.appendChild(article)
        i++
    });

}

getPopularAnime()