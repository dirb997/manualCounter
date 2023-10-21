let count = 0;

const value = document.querySelector('#value');

const plusBtn = document.querySelector('.btn-plus');
const resetBtn = document.querySelector('.btn-reset');
const minusBtn = document.querySelector('.btn-minus');

plusBtn.addEventListener('click', function(){
    count++;
    value.textContent = count;
    if(count > 0){
        value.style.color = "green";
    }
    else if(count < 0){
        value.style.color = "red";
    }
    else{
        value.style.color = "black";
    }
})
resetBtn.addEventListener('click', function(){
    count = 0;
    value.textContent = count;
    value.style.color = "black";
})
minusBtn.addEventListener('click', function(){
    count--;
    value.textContent = count;
    if(count > 0){
        value.style.color = "green";
    }
    else if(count < 0){
        value.style.color = "red";
    }
    else{
        value.style.color = "black";
    }
})