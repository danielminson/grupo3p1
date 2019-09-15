document.addEventListener('DOMContentLoaded', function() {
    let db = coDesConnect('https://jesus-maria-jose.firebaseio.com/')
    let params = coDesExtract()

    let value = params['key']
    let value2 = params["pai"]
    console.log(value2)

    db.download('/', function(data) {
    context = data["portfolio"][value2]["projetos"][value]
    console.log(context)
    coDesReplace("title", context)
    coDesReplace('.project-title', context)
    coDesReplace('.project-container', context)
    coDesReplace("Project-img", context)   
    })
})
