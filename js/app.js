const containerCard = document.querySelector('.container-card')

const produtos = [
    {
        image: 'assets/ft1.jpg',
        descricao: 'Descrição do produto',
        preco: 23.99
    },
    {
        image: 'assets/ft2.jpg',
        descricao: 'Descrição do produto',
        preco: 23.99
    },
    {
        image: 'assets/ft3.jpg',
        descricao: 'Descrição do produto',
        preco: 23.99
    },
    {
        image: 'assets/ft4.jpg',
        descricao: 'Descrição do produto',
        preco: 23.99
    },
    {
        image: 'assets/ft5.jpg',
        descricao: 'Descrição do produto',
        preco: 23.99
    },
    {
        image: 'assets/ft6.jpg',
        descricao: 'Descrição do produto',
        preco: 23.99
    },
    {
        image: 'assets/ft7.jpg',
        descricao: 'Descrição do produto',
        preco: 23.99
    },
    {
        image: 'assets/ft8.jpg',
        descricao: 'Descrição do produto',
        preco: 23.99
    },
    {
        image: 'assets/ft9.jpg',
        descricao: 'Descrição do produto',
        preco: 23.99
    }
]

const newElement = ( tagName, className ) => {
    let elem = document.createElement( tagName )
    elem.classList.add(className)

    return elem
}

const buildCards = ( image, descricao, preco ) => {
    let card = newElement('div', 'card')

    let cardImg = newElement('div', 'card__img')
    cardImg.style.backgroundImage = `url(${image})`
    card.append(cardImg)

    let cardDescricao = newElement('span', 'card__descricao')
    cardDescricao.textContent = descricao
    card.append(cardDescricao)

    let cardPreco = newElement('div', 'card__preco')
    let cardPrecoSimbolo = newElement('span', 'card__preco-simbolo')
    cardPrecoSimbolo.textContent = 'R$'
    let cardPrecoValor = newElement('span', 'card__preco-valor')
    cardPrecoValor.textContent = preco
    cardPreco.appendChild(cardPrecoSimbolo)
    cardPreco.appendChild(cardPrecoValor)
    card.appendChild(cardPreco)

    containerCard.appendChild(card)
}

produtos.forEach(produto => {
    let { image, descricao, preco } = produto
    buildCards( image, descricao, preco )
});

