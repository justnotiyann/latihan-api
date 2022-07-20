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

getButton.addEventListener('keyup', function () {
  if ('keyup' == 'Enter') {
  let value = getInput.value
  let data = value.toLowerCase()
    getFetch(data)
  }
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
  const stats = res.stats[0].base_stat
  const id = res.id
  console.log(namaPokemon, imgPokemon, ability)
  document.querySelector('#gambarPokemon').src = imgPokemon
  document.querySelector('#id').innerText = id
  document.querySelector('#nama').innerText = namaPokemon
  document.querySelector('#ability').innerText = ability
  document.querySelector('#skill').innerText = stats
}