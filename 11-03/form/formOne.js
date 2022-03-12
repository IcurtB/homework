let form1 = document.getElementById('formOne');

form1.onsubmit = (event) =>{
    event.preventDefault();

    let second    = document.getElementById('secondName');
    let name      = document.getElementById('name');
    let middle    = document.getElementById('middleName');
    let birth     = document.getElementById('date');
    let livePlace = document.getElementById('livePlace');
    let inn       = document.getElementById('inn');
    let date      = document.getElementById('date');
    let contNum   = document.getElementById('contactNumber');
    let eloAdd    = document.getElementById('electroAdres');
    let bank      = document.getElementById('bankName');
    let fact      = document.getElementById('fact');

    let massive = [
        second, name, middle, birth,
        livePlace, inn, date, contNum,
        eloAdd, bank, fact];
    for (let i = 0; i < massive.length; i++) {
        console.log(massive[i].values)
    }
}