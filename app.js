const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e","f"]

const button = document.querySelector('.btn');
const color = document.querySelector('.color');

button.addEventListener('click', () => {
    let hexColor  = '#';
    for(let i = 0; i < 6; i++) {
        hexColor += hex[randomClr()];
    }
    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
}) 

const randomClr = () => {

    return Math.floor(Math.random() * hex.length);

}
