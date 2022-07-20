// Tangkap Elemen form lalu tampung kedalam variabel
let getInput  = document.querySelector('#input')
let getButton = document.querySelector('#search')


<<<<<<< HEAD
getButton.addEventListener('click', function () {
  // Tangkap value pada input
  let value = getInput.value
  // nilai value akan selalu huruf kecil
  let data = value.toLowerCase()
  // Eksekusi
  getFetch(data)
=======
button.addEventListener('click', function () {
    // Fetch Data
    fetch(`https://pokeapi.co/api/v2/pokemon/${input.value}`)
        .then(res => res.json())
        .then(res => {
            cek(input.value) // Belajar middleware, jadi setiap pada sebuah proses dapat kita akses
            result.innerHTML =
              `
              <div class="row">
                <div class="col-12">
                  <table class="table">
                  <p class="fw-bold text-center">Tabel Data Pokemon</p>
                      <thead>
                        <tr>
                          <th scope='col'>Gambar</th>
                          <th scope="col">ID Pokemon</th>
                          <th scope="col">Nama</th>
                          <th scope="col">Tinggi</th>
                          <th scope="col">Berat</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td><img src="${res.sprites.front_default}" alt="Pokemon" class="text-center img-thumbnail rounded-circle" /></td>
                          <td>${res.id}</td>
                          <td>${res.name}</td>
                          <td>${res.height} feet</td>
                          <td>${res.weight} ponds</td>
                        </tr>
                      </tbody>
                    </table>
              </div>
            </div>
              `
                
        })
>>>>>>> 9ed3847dba504049492b9272b82ac9551a3ccc8a
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