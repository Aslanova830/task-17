const container = document.getElementById('numbers');

for (let i = 2; i <= 100; i++) {
    const div = document.createElement('div');
    div.textContent = i;

    if (i % 2 === 0) {
        div.style.backgroundColor = 'green';
    } else if (isPrime(i)) {
        div.style.backgroundColor = 'red';
    } else {
        div.style.backgroundColor = 'yellow';
    }

    container.appendChild(div);
}

function isPrime(b) {
    for (let i = 2; i < b; i++) {
        if (b % i === 0) {
            return false;
        }
    }

    return b > 1;
}