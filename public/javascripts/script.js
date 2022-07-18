var button = document.querySelector('#search')
var input = document.querySelector('.value')
var result = document.querySelector('.result')
// const apiKey = "61b9ea19e0a07015d5486b04a7ae53a7"

// custom output 
function cek(m) {
    console.log(m)
}

button.addEventListener('click', function () {
    // Fetch Data
    fetch(`https://pokeapi.co/api/v2/pokemon/${input.value}`)
        .then(res => res.json())
        .then(res => {
            cek(input.value) // Belajar middleware, jadi setiap pada sebuah proses dapat kita akses
            console.log(res)
            result.innerHTML =
                `
                <div class="row d-flex justify-content-center align-items-center">
                <div class="col-6">
                  <img src="${res.sprites.front_default}" alt="" width="100%" class="image-thumbnail" />
                </div>
                <div class="col-6">
                  <p>Nama Pokemon : ${res.name}</p>
                  <p>Tinggi Pokemon : ${res.height}</p>
                  <p>Berat Pokemon : ${res.weight}</p>
                </div>
              </div>
              `
        })
})