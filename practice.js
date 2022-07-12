const displayFewSecondsLater = () => {
    setTimeout(() => {
        const display = document.getElementById('showSetTimeout');
        display.innerText = 'Showed output after 3.5 seconds.';
    }, 3500);
}
const add200 = () => {
    const getNumber = prompt('Give a number to add with 200');
    const number = parseFloat(getNumber);
    let currentValue = 200;
    const result = currentValue + number;
    alert(result);
}
const toSeeHref = () => {
    const href = confirm('Do you want to see href?');
    if (href === true) {
        alert(location.href);
    }
}