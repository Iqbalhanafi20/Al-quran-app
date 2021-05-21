const canvas = document.getElementById('root')

const judul = document.createElement('h1');
judul.textContent = "LIST SURAH ALQURAN"
judul.setAttribute('class','judul')

const container = document.createElement('div');
container.setAttribute('class','container float-left');
container.appendChild(judul)

// canvas.appendChild(logo);
canvas.appendChild(container);

var request = new XMLHttpRequest()
request.open('GET', 'https://al-quran-8d642.firebaseio.com/data.json', true)
request.onload = function () {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response)
  if (request.status >= 200 && request.status < 400) {
    data.forEach((alquran) => {
      const card = document.createElement('div')
      card.setAttribute('class', 'card')

      const cardbody = document.createElement('div')
      cardbody.setAttribute('class', 'card-body')
      card.appendChild(cardbody)

      const h1 = document.createElement('h1')
      h1.textContent = alquran.nama +" ( "+alquran.asma+" )"
      h1.setAttribute('class','card-title')

      const judulayat = document.createElement('p')
      judulayat.textContent = "Jumlah Ayat "+alquran.ayat

      const p = document.createElement('p')
      alquran.description = alquran.keterangan.substring(0, 500)
      p.textContent = `${alquran.keterangan}...`
      p.setAttribute('class','card-text')

      const audio = document.createElement('audio')
      audio.setAttribute('controls',true)

      const source = document.createElement('source')
      source.setAttribute('src',alquran.audio)
      source.setAttribute('type','audio/mpeg')

      audio.appendChild(source)

      container.appendChild(card)
      cardbody.appendChild(h1)
      cardbody.appendChild(judulayat)
      cardbody.appendChild(p)
      cardbody.appendChild(audio)
    })
  } else {
    const errorMessage = document.createElement('marquee')
    errorMessage.textContent = `Gah, it's not working!`
    app.appendChild(errorMessage)
  }
}


request.send()
