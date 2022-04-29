async function getFavorites() {
    let response = await fetch("http://localhost:3000/favorites");
    let json = await response.json();
    console.log(json);

    json.forEach(element => {

        const NEW_ITEM = `
        <h1>${element.title}</h1>
        <img src="${element.images.url}">
        <p>${element.synopsis}</p>
        <a href ="${element.url}" target="_blank">LINK</a>
    `        
        const article = document.createElement("article")
        article.classList.add("favoritesArticle")
        article.innerHTML += NEW_ITEM
        let section = document.querySelector('.section');
        section.appendChild(article)
        article.style.marginBottom = "4rem"
        article.style.display = "flex"
        article.style.alignItems = "center"
        article.style.flexDirection = "column"
    })
}

getFavorites()