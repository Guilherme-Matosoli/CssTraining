const navigation = document.querySelector('.navigation');
const menu_toggle = document.querySelector('.menu-toggle');
const list = document.querySelectorAll('.list');

function handleNavigationActive(){
    navigation.classList.toggle('active')
};

function activeOption(){
    list.forEach((option) => {
        option.classList.remove('active');
        this.classList.add('active')
    })
};

list.forEach((option) => {
    option.addEventListener('click', activeOption)
});