const container = document.querySelector('.container');
for (let i = 1; i <= 100; i++){
    let item = document.createElement('div');
    item.classList.add('square');
    item.innerHTML = i;
    container.append(item);
}
