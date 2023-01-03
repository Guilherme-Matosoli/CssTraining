const navigation = document.querySelector('.navigation');
const closes = document.querySelector('.close');

 function active(){
    navigation.classList.add('active')
}

function desactive(){
    navigation.classList.remove('active');

    console.log('desativou')
};