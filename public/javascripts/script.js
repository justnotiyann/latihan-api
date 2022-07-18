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
                          <td>${res.height} cm</td>
                          <td>${res.weight} kg</td>
                        </tr>
                      </tbody>
                    </table>
              </div>
            </div>
              `
                
        })
})
