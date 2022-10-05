const hex = ['A', 'B', 'C', 'D', 'E', 'F', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const btn = document.querySelector('button');
const tittle = document.querySelector('h1');

btn.addEventListener('click', () => {
    let hexcolor = '#';
    for (let i = 0; i < 6; i++) {
        hexcolor += hex[random()]
    }
    document.body.style.backgroundColor = hexcolor
    const d = document.querySelector('span').innerHTML = hexcolor
});

function random() {
    return Math.floor(Math.random() * hex.length);

}