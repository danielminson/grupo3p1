document.addEventListener('DOMContentLoaded', function() {
  let db = coDesConnect('https://jesus-maria-jose.firebaseio.com/')

  db.download('/', function(data) {
    context = data
    coDesReplace('.nav', context)
	coDesReplace('.figura_index', context)
  })

  db.download('/', function(data) {
    context = data
    coDesReplace('.sub_menu', context)
  })
})
