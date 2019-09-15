document.addEventListener('DOMContentLoaded', function() {
  let db = coDesConnect('https://jesus-maria-jose.firebaseio.com/')

  db.download('/', function(data) {
    context = data
    coDesReplace('.texto_sobre', context)
    coDesReplace('.sobre_image', context)
  })
})
