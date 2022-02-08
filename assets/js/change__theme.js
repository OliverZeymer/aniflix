let whiteThemeBtn = document.querySelector('.whiteTheme');
let blueThemeBtn = document.querySelector('.blueTheme');
let redThemeBtn = document.querySelector('.redTheme');
let greenThemeBtn = document.querySelector('.greenTheme');



updateUI()

whiteThemeBtn.addEventListener("click", () => {
    localStorage.currentTheme = "white"
    updateUI();
})

blueThemeBtn.addEventListener("click", () => {
    localStorage.currentTheme = "blue"
    updateUI();
})

redThemeBtn.addEventListener("click", () => {
    localStorage.currentTheme = "red"
    updateUI();
})

greenThemeBtn.addEventListener("click", () => {
    localStorage.currentTheme = "green"
    updateUI();
})


function updateUI() {
    if (localStorage.currentTheme == "white") {
        document.body.style.setProperty("--main-page-color", "#afafaf")
        document.body.style.setProperty("--heading-page-color", "white")
    } else if (localStorage.currentTheme == "red") {
        document.body.style.setProperty("--main-page-color", "red")
        document.body.style.setProperty("--heading-page-color", "#cf2424")
    } else if (localStorage.currentTheme == "blue") {
        document.body.style.setProperty("--main-page-color", "blue")
        document.body.style.setProperty("--heading-page-color", "#3494d4")
    } else if (localStorage.currentTheme == "green") {
        document.body.style.setProperty("--main-page-color", "#334b2f")
        document.body.style.setProperty("--heading-page-color", "#42693b")
    }
}