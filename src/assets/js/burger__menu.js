let navigationList = document.querySelector(".navigation__list");
let navigationLinks = document.querySelectorAll(".navigation__link");
let burger = document.querySelector(".burger");
let closeIcon = document.querySelector(".closeIcon");
let menuIcon = document.querySelector(".menuIcon");


function toggleMenu() {
  if (navigationList.classList.contains("showMenu")) {
    navigationList.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    navigationList.classList.add("showMenu");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
  }
}

burger.addEventListener("click", toggleMenu);

navigationLinks.forEach(
  function (menuItem) {
    menuItem.addEventListener("click", toggleMenu);
  }
)