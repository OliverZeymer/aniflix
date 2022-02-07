let logOutBtn = document.querySelector('.logOut__btn');

logOutBtn.addEventListener("click", function (event){
    localStorage.removeItem("storedName");
    window.location.href='index.html'
})