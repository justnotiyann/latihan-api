var button = document.querySelector('#search')
var input = document.querySelector('.value')
var result = document.querySelector('.result')

// Middleware haha
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
                <p class="">Informasi Pokemon</p>
                <div class="row d-flex justify-content-center align-items-center">
                  <div class="col-6">
                    <img src="${res.sprites.front_default}" alt="" width="80%" class="image-thumbnail rounded-circle border" />
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


// Testing
// const getInput = document.querySelector('#testing')
// const getButton = document.querySelector('#button-submit')

// getButton.addEventListener('click', function () {
//   fetch(`https://pokeapi.co/api/v2/pokemon/${getInput.value}`)
//     .then(res => res.json())
//     .then(res => {
//       console.log(getInput.value)
//       console.log(res)
//     })
// })