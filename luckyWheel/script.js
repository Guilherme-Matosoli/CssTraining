const wheel = document.querySelector('.wheel');
const spinButton = document.querySelector('.spinButton');
let degValue = Math.ceil(Math.random() * 3600);

function rotate(){
    wheel.style.transform = `rotate(${degValue}deg)`

    degValue += Math.ceil(Math.random() * 3600);
}