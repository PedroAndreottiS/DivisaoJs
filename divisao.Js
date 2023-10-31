
let divisor = Number (prompt("Escreva o divisor:"))
let dividendo = Number (prompt("Escreva o dividendo"))



let resultado = (divisor/dividendo)



if (divisor == 0 || dividendo == 0)
    {
        alert("É impossível dividir por 0")
    }

    else{
        alert(`Esse é o resultado ${resultado}`)
    }