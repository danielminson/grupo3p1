document.addEventListener('DOMContentLoaded', function() {
    let db = coDesConnect('https://jesus-maria-jose.firebaseio.com/')
    let params = coDesExtract()

    let value = params['key']
    console.log(value)
    var strLink = "projeto.html?pai=" + value + "&key={{@key}}"
    let load = document.querySelector(".link1")
    load.href=strLink

    console.log(strLink)

    db.download('/', function(data) {
    context = data["portfolio"][value]
    console.log(context)
    coDesReplace('.lista', context)
    coDesReplace('.nome_categ', context)
    coDesReplace('.texto_categ', context)     
    })
})
