let contactForm = document.getElementsByClassName("contactForm__form")[0]

contactForm.addEventListener("submit", submitHandler)

function submitHandler(event) {
    event.preventDefault()

    let errorMessage = contactForm.getElementsByClassName("contactForm__errorMessage")[0];
    errorMessage.innerText = "";
    let name = event.target.name.value;
    let message = event.target.message.value;
    let email = event.target.email.value;

    const errorMessages = []


    if (name.length < 2) {
        errorMessages.push("Name needs to be atleast 2 letters")
    }

    if (message.length > 20) {
        errorMessages.push("Your message is too long")
    }

    if (message.length < 1) {
        errorMessages.push("You need to write a message")
    }

    if (email.length < 1) {
        errorMessages.push("You need to write an email")
    }

    errorMessages.forEach(function (element) {
        errorMessage.innerHTML += element + "<br>"
    })

    if (errorMessages.length === 0) {
        contactForm.reset()
        errorMessage.innerText = "Thanks for your message, you will receive an e-mail soon."
        errorMessage.classList.add("contactForm__errorMessage--success")
        setTimeout(function () { //timeout så success beskeden går væk, hvis nu man ville sende flere beskeder.
            errorMessage.style.display = "none"
        }, 3000)

    }
}
