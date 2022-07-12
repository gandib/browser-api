// alert('ma is coming');

const maComing = () => {
    alert('Ma Coming');
}
const askPicnic = () => {
    const response = confirm('Are you going to picnic?');
    console.log(response);
    if (response === true) {
        alert('fee ta bkash koro');
    }
    else {
        console.log('tumi picnic e jete parba na');
    }
}
const askName = () => {
    const name = prompt('Whats your name;');
    if (name) {
        console.log(name);
    }
}