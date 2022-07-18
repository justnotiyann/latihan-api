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
              <div class="col-6">
                <img src="" alt="Pokemon" />
              </div>
              <div class="col-6">
                <table class="table">
                  <thead>
                    <tr>
                      <th scope="col">ID Pokemon</th>
                      <th scope="col">Nama</th>
                      <th scope="col">Tinggi</th>
                      <th scope="col">Berat</th>
                      <th scope="col">Generasi</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">${res.id}</th>
                      <td>${res.forms[0].name}</td>
                      <td>${res.height}</td>
                      <td>${res.weight}</td>
                      <td>${res.generation.name}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
              `
                
        })
})
