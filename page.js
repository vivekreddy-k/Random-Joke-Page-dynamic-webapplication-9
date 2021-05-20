let jokeText = document.getElementById("jokeText");
let jokeBtn = document.getElementById("jokeBtn");
let spinner = document.getElementById("spinner");
jokeBtn.addEventListener('click', generateJoke)

function generateJoke() {
    spinner.classList.remove("d-none");
    let url = "https://api.chucknorris.io/jokes/random";
    let options = {
        method: "GET",
    };
    fetch(url, options)
        .then(function(response) {
            return response.json()
        })
        .then(function(jsonData) {
            spinner.classList.add("d-none");
            console.log(jsonData.value)
            jokeText.textContent = jsonData.value
        })
}
