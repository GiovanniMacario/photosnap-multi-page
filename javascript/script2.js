
const togglecards = document.getElementById('togglecard')
const cnum = document.getElementById('cardnum1');
const cnum2 = document.getElementById('cardnum2');
const cnum3 = document.getElementById('cardnum3');
const point = document.getElementById('point');
let n = 1;



togglecards.addEventListener('click',() => {
    switch(n){
        case 1:{
            point.classList.remove('animation2')
            point.classList.add('animation');
            cnum.innerHTML = '$190.00'
            cnum2.innerHTML = '$390.00'
            cnum3.innerHTML = '$990.00'
            togglecard.classList.toggle('toggle--black');
            point.classList.toggle('toggle__point--white');
            n = 2;
            break;
        }
        case 2:{
            point.classList.remove('animation')
            point.classList.add('animation2');
            cnum.innerHTML = '$19.00'
            cnum2.innerHTML = '$39.00'
            cnum3.innerHTML = '$99.00'
            togglecard.classList.toggle('toggle--black');
            point.classList.toggle('toggle__point--white');
            n = 1;
            break;
        }
        default:{}
    }
})