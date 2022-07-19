// Tangkap Elemen form lalu tampung kedalam variabel
let getInput  = document.querySelector('#input')
let getButton = document.querySelector('#search')


getButton.addEventListener('click', function () {
  // Tangkap value pada input
  let value = getInput.value
  // nilai value akan selalu huruf kecil
  let data = value.toLowerCase()
  // Eksekusi
  getFetch(data)
})

// Function Fetch
function getFetch(data) {
    let api = `https://pokeapi.co/api/v2/pokemon/${data}`
    fetch(api)
      .then(res => res.json())
      .then(res => {
        // Panggil function getDatas()
        getDatas(res)
      })
}

// getDatas
function getDatas(res) {
  const namaPokemon = res.name.toUpperCase()
  const imgPokemon = res.sprites.front_default
  const ability = res.abilities[0].ability.name
  console.log(namaPokemon, imgPokemon, ability)
  document.querySelector('#gambarPokemon').src = imgPokemon
  document.querySelector('.card-title').innerText = namaPokemon
  document.querySelector('.ability').innerText = ability
}