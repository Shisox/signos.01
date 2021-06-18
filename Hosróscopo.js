function verificar() {
    var data = new Date()
    var dia = data.getDay()
    var fdia = document.getElementById('txtdia')
    var fmes = document.getElementById('txtmes')
    var res = document.getElementById('res')

    if(fdia.value.lenght == 0 || Number(fdia.value) > 31 || Number(fdia.value) < 1 && fmes.value.lenght == 0 || fmes.value > 12 || fmes.value < 1) {
        window.alert('[ERRO] Preencha corretamente os dados!')
    } else {
        window.alert('aoba')
    }
}