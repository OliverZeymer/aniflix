let landingImg = document.querySelector('.landingSection__img');
if (localStorage.currentTheme == "white") {
    document.body.style.setProperty("--main-page-color", "#afafaf")
    document.body.style.setProperty("--heading-page-color", "white")
    landingImg.src = "/assets/img/gojo.png"
} else if (localStorage.currentTheme == "red") {
    document.body.style.setProperty("--main-page-color", "red")
    document.body.style.setProperty("--heading-page-color", "#cf2424")
    landingImg.src = "/assets/img/kaneki.png"
} else if (localStorage.currentTheme == "blue") {
    document.body.style.setProperty("--main-page-color", "blue")
    document.body.style.setProperty("--heading-page-color", "#3494d4")
    landingImg.src = "/assets/img/rem.png"
} else if (localStorage.currentTheme == "green") {
    document.body.style.setProperty("--main-page-color", "#334b2f")
    document.body.style.setProperty("--heading-page-color", "#42693b")
    landingImg.src = "/assets/img/levi.png"
}