const input = document.querySelector('#cpf')

input.addEventListener('keypress', () => {
    var inputlenght = input.value.length

    if (inputlenght === 0) {
        input.value += '('
    }else if (inputlenght === 4 || inputlenght === 8) {
        input.value += '.'
    } else if (inputlenght === 12) {
        input.value += '-'
    }else if (inputlenght === 15) {
        input.value += ')'
    }
})

var tel = document.querySelector('#telefone')

tel.addEventListener('keypress', () => {
    var inputlenght = tel.value.length

    if (inputlenght === 0) {
        tel.value += '('
    } else if (inputlenght === 3) {
        tel.value += ')'
    } else if (inputlenght === 9) {
        tel.value += '-'
    }
})