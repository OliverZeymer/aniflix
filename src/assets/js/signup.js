let formName  = document.getElementById('signupForm__name');
let form  = document.querySelector('.signupForm');
let customerName = "";

function updateStorage() {
                        // "HVOR"          "HVAD"
    localStorage.setItem('storedName', customerName);
};    


form.addEventListener("submit", function (event) {
    event.preventDefault();
    console.log(formName.value);
    window.location.href='index.html'
    if (formName.value != ''){
        localStorage.setItem('storedName', customerName);
        customerName = formName.value;
        }
    else {
        alert('you have to write a name')
    }
    updateStorage();
    
    
});
