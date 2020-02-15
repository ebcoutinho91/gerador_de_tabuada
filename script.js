function go() {
    var ent = document.querySelector('input#entrada')
    let tab = document.getElementById('seltab')
    
    if (ent.value.length == 0) {
        alert('ERRO! Por favor informe um número!')
    } else {
        let ent2 = Number(ent.value)
        let x = 1
        tab.innerHTML = '' // Adicionando um string vazia andes do loop se garante que o select estára vazio. (DEVE SER INNERHTML)
        while (x <= 10) {
            let item = document.createElement('option')
            item.text = `${ent2} X ${x} = ${ent2 * x}` // Para adicionar valores em texto dentro de um "option" que se encontra dentro de um "select"
            item.value = `tab${x}`  // Adicionando value para cada option que é adicionda no select usando concatenacão de string mais a variavel controladora do loop
            tab.appendChild(item) // É aqui que o link entre o conteudo criado e campo para onde ele vai acontece.
            x++
        }
        
    }
    

    

    
 
  
    

    
}

