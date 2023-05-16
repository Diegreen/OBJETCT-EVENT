
let produto = {
    nome: 'Camisa',
    valor: '100.00',
    liquidacao: true,
    distribuidor: 'lojadakenzie.com.br'
}

function productArray(produto) {
    
    const main = document.querySelector('.main')

    const ul = document.createElement('ul');

    const li = document.createElement('li');

    const span = document.createElement('span')
    span.innerHTML = produto.nome
    span.classList.add('name')

    const span2 = document.createElement('span')
    span2.innerHTML = produto.valor
    span2.classList.add('value')

    const button = document.createElement('button')
    button.innerText = 'Promoção'

    const promotion = document.createElement('span')
    promotion.classList.add('promocao')

    const a = document.createElement('a')
    a.innerText = 'Fabricante:' + ' ' + produto.distribuidor

    main.append(ul)
    ul.append(li)
    li.append(span, span2, button, promotion, a)

    let ispromotion = false

    button.addEventListener('click', function (event) {
        if (ispromotion) {
            promotion.innerText = ''
            ispromotion = false
            promotion.style.marginBottom = '0px'
            promotion.style.marginTop = '0px'
        } else {
            ispromotion = true
            promotion.innerText = `Hoje é apenas: R$${0.3 * Number(produto.valor)},00`
            promotion.style.marginTop = '20px'
            promotion.style.marginBottom = '20px'
            promotion.style.transition = '0.5s'
        }
    })
}

console.log(productArray(produto))

