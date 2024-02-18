let seznam = [
    { nazev: "Tužka", cenaZaKus: 10, pocetNaSklade: 100 },
    { nazev: "Sešit", cenaZaKus: 20, pocetNaSklade: 150 },
    { nazev: "Batoh", cenaZaKus: 500, pocetNaSklade: 50 },
    { nazev: "Pravítko", cenaZaKus: 30, pocetNaSklade: 75 },
    { nazev: "Pero", cenaZaKus: 40, pocetNaSklade: 200 },
    { nazev: "Kalkulačka", cenaZaKus: 200, pocetNaSklade: 30 },
    { nazev: "Barvy", cenaZaKus: 150, pocetNaSklade: 80 },
    { nazev: "Štětce", cenaZaKus: 60, pocetNaSklade: 120 },
    { nazev: "Ležidlo", cenaZaKus: 300, pocetNaSklade: 40 },
    { nazev: "Mapa světa", cenaZaKus: 180, pocetNaSklade: 60 }
];

let seznamDiv = document.querySelector('.seznam');
seznamDiv.style.display = 'flex';
seznamDiv.style.flexDirection = 'column';
seznamDiv.style.fontSize = '10px'; // Zmenšení velikosti písma

document.querySelector('#text').addEventListener('change', function() {
    if (this.value === 'less') {
        let hranicniHodnota = prompt('Zadejte hranicní hodnotu:');
        if (hranicniHodnota !== null && !isNaN(hranicniHodnota)) {
            let filteredItems = seznam.filter(item => item.pocetNaSklade < Number(hranicniHodnota));
            displayItems(filteredItems);
        } else {
            alert('Zadaná hodnota není platné číslo.');
        }
    } else if (this.value === 'sort') {
        seznam.sort((a, b) => b.cenaZaKus - a.cenaZaKus);
        displayItems(seznam);
    }
});

function displayItems(items) {
    seznamDiv.innerHTML = '';
    for (let i = 0; i < items.length; i++) {
        let item = items[i];
        seznamDiv.innerHTML += `<div style="display: flex; justify-content: space-between;"><p>Název: ${item.nazev}, Cena za kus: ${item.cenaZaKus}, Počet na skladě: ${item.pocetNaSklade}</p> <button style="font-size: 8px;" onclick="upravit('${item.nazev}')">Upravit</button></div>`;
    }
}

function upravit(nazev) {
    let item = seznam.find(item => item.nazev === nazev);
    let novyPocet = prompt(`Zadejte nový počet pro ${item.nazev}:`, item.pocetNaSklade);
    if (novyPocet !== null && !isNaN(novyPocet)) {
        item.pocetNaSklade = Number(novyPocet);
        displayItems(seznam);
    } else {
        alert('Zadaná hodnota není platné číslo.');
    }
}

document.querySelector('#text').addEventListener('change', function() {
    if (this.value === 'all') {
        let totalValue = 0;
        for (let item of seznam) {
            totalValue += item.cenaZaKus * item.pocetNaSklade;
        }
        alert('Celková hodnota zásob je: ' + totalValue);
    } else if (this.value === 'less') {
        let hranicniHodnota = prompt('Zadejte hranicní hodnotu:');
        if (hranicniHodnota !== null && !isNaN(hranicniHodnota)) {
            let filteredItems = seznam.filter(item => item.pocetNaSklade < Number(hranicniHodnota));
            displayItems(filteredItems);
        } else {
            alert('Zadaná hodnota není platné číslo.');
        }
    } else if (this.value === 'sort') {
        seznam.sort((a, b) => b.cenaZaKus - a.cenaZaKus);
        displayItems(seznam);
    }
});

function displayItems(items) {
    seznamDiv.innerHTML = '';
    for (let i = 0; i < items.length; i++) {
        let item = items[i];
        seznamDiv.innerHTML += `<div style="display: flex; justify-content: space-between;"><p>Název: ${item.nazev}, Cena za kus: ${item.cenaZaKus}, Počet na skladě: ${item.pocetNaSklade}</p> <button style="font-size: 7px;" onclick="upravit('${item.nazev}')">Upravit</button></div>`;
    }
}

function upravit(nazev) {
    let item = seznam.find(item => item.nazev === nazev);
    let novyPocet = prompt(`Zadejte nový počet pro ${item.nazev}:`, item.pocetNaSklade);
    if (novyPocet !== null && !isNaN(novyPocet)) {
        item.pocetNaSklade = Number(novyPocet);
        displayItems(seznam);
    } else {
        alert('Zadaná hodnota není platné číslo.');
    }
}

document.querySelector('button').addEventListener('click', function() {
    let selectValue = document.querySelector('#text').value;
    let userInput = document.querySelector('.userInput').value;

    if (selectValue === 'sort') {
        seznam.sort((a, b) => b.cenaZaKus - a.cenaZaKus);
        displayItems(seznam);
    } else if (selectValue === 'less') {
        let hranicniHodnota = prompt('Zadejte hranicní hodnotu:');
        if (hranicniHodnota !== null && !isNaN(hranicniHodnota)) {
            let filteredItems = seznam.filter(item => item.pocetNaSklade < Number(hranicniHodnota));
            displayItems(filteredItems);
        } else {
            alert('Zadaná hodnota není platné číslo.');
        }
    } else if (selectValue === 'all') {
        let totalValue = 0;
        for (let item of seznam) {
            totalValue += item.cenaZaKus * item.pocetNaSklade;
        }
        alert('Celková hodnota zásob je: ' + totalValue);
    } else if (userInput) {
        let searchedItems = seznam.filter(item => item.nazev.toLowerCase().includes(userInput.toLowerCase()));
        displayItems(searchedItems);
    }
});

function displayItems(items) {
    seznamDiv.innerHTML = '';
    for (let i = 0; i < items.length; i++) {
        let item = items[i];
        seznamDiv.innerHTML += `<div style="display: flex; justify-content: space-between;"><p>Název: ${item.nazev}, Cena za kus: ${item.cenaZaKus}, Počet na skladě: ${item.pocetNaSklade}</p> <button style="font-size: 8px;" onclick="upravit('${item.nazev}')">Upravit</button></div>`;
    }
}

function upravit(nazev) {
    let item = seznam.find(item => item.nazev === nazev);
    let novyPocet = prompt(`Zadejte nový počet pro ${item.nazev}:`, item.pocetNaSklade);
    if (novyPocet !== null && !isNaN(novyPocet)) {
        item.pocetNaSklade = Number(novyPocet);
        displayItems(seznam);
    } else {
        alert('Zadaná hodnota není platné číslo.');
    }
}

displayItems(seznam);

