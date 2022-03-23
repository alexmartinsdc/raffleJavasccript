function sortear() {

    let pessoas = ["Alex", "Marcos", "Joana", "Maria", "Paula"]

    let np = pessoas.length
    let ns = Math.floor(Math.random() * np)

    document.getElementById("display").innerHTML = pessoas[ns]

}