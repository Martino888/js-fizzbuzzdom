const container = document.querySelector('.container');
for (let i = 1; i <= 100; i++){
    let item = document.createElement('div');
    item.classList.add('square');
    item.innerHTML = i;
    container.append(item);
    if(i%15==0){
        item.classList.add('red');
        item.innerHTML = 'fizzbuzz' ;
    }else if (i%3==0){
        item.classList.add('green');
        item.innerHTML = 'fizz';
    }else if (i%5==0){
        item.classList.add('orange');
        item.innerHTML = 'buzz';
    }
}
