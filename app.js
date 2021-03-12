document.addEventListener('DOMContentLoaded', () => {

    //card options
    const cardArray = [
        {
            name: 'andrey',
            img: 'images/andrey.png'
        },
        {
            name: 'andrey',
            img: 'images/andrey.png'
        },
        {
            name: 'anton',
            img: 'images/anton.png'
        },
        {
            name: 'anton',
            img: 'images/anton.png'
        },
        {
            name: 'kostya',
            img: 'images/kostya.png'
        },
        {
            name: 'kostya',
            img: 'images/kostya.png'
        },
        {
            name: 'maria',
            img: 'images/maria.png'
        },
        {
            name: 'maria',
            img: 'images/maria.png'
        },
        {
            name: 'nikita',
            img: 'images/nikita.png'
        },
        {
            name: 'nikita',
            img: 'images/nikita.png'
        },
        {
            name: 'sasha',
            img: 'images/sasha.png'
        },
        {
            name: 'sasha',
            img: 'images/sasha.png'
        }
       
    ];

    const grid = document.querySelector('.grid');

    //create your board
    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            var card = document.createElement('img');
            card.setAttribute('src', 'images/blank.png');
            card.setAttribute('data-id', i);
            // card.addEventListener('click', flipcard)
            grid.appendChild(card);
        }
    }

    createBoard();

    // check for matches

    // flip your card
    function flipCard() {
        
    }



});