
let timer;
let timeLeft;
const display = document.querySelector('#timerDisplay');
const input = document.querySelector('#secondsInput');

document.querySelector('#startBtn').addEventListener('click', () => {

    if (!timeLeft) timeLeft = parseInt(input.value);

    if (isNaN(timeLeft) || timeLeft <= 0) return alert("Inserisci un tempo valido");

    clearInterval(timer);
    timer = setInterval(() => {
        timeLeft--;
        display.innerText = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(timer);
            timeLeft = null;
            alert("Tempo scaduto per le offerte speciali!");
        }
    }, 1000);
});

document.querySelector('#pauseBtn').addEventListener('click', () => clearInterval(timer));

document.querySelector('#resetBtn').addEventListener('click', () => {
    clearInterval(timer);
    timeLeft = null;
    input.value = "";
    display.innerText = "0";
});


const announcements = [
    { "id":1, "name": "Huawei X5", "category": "Elettronica", "price": "120.12", "type" : "sell" },
    { "id": 2, "name": "Fiat 500", "category": "Motori", "price": "2000.32", "type" : "search" },
    { "id": 3, "name": "Mazza da Baseball", "category": "Sport", "price": "20.15", "type" : "sell" },
    // ... (aggiungi qui tutti gli altri oggetti dell'array che hai postato)
    { "id": 49, "name": "Modem", "category": "Varie", "price": "2.99", "type" : "sell" }
];

const wrapper = document.querySelector('#announcementsWrapper');

function showAnnouncements(data) {
    wrapper.innerHTML = "";
    data.forEach(item => {
        let col = document.createElement('div');
        col.className = "col-12 col-md-4 col-lg-3";
        col.innerHTML = `
            <div class="card h-100 shadow-sm card-presto">
                <div class="card-body">
                    <div class="d-flex justify-content-between mb-2">
                        <span class="category-badge">${item.category}</span>
                        <span class="badge ${item.type === 'sell' ? 'bg-success' : 'bg-info'}">${item.type.toUpperCase()}</span>
                    </div>
                    <h5 class="card-title">${item.name}</h5>
                    <p class="card-text fw-bold text-primary">${item.price} €</p>
                </div>
                <div class="card-footer bg-transparent border-0 pb-3">
                    <button class="btn btn-outline-primary btn-sm w-100">Dettagli</button>
                </div>
            </div>
        `;
        wrapper.appendChild(col);
    });
}


showAnnouncements(announcements);

// Selettori per i filtri
const filterName = document.querySelector('#filterName');
const filterCategory = document.querySelector('#filterCategory');
const filterPrice = document.querySelector('#filterPrice');
const priceValue = document.querySelector('#priceValue');

// 1. Funzione per estrarre categorie uniche dall'array e popolare la Select
function setCategories() {
    let categories = announcements.map(item => item.category);
    let uniqueCategories = [];
    
    categories.forEach(category => {
        if (!uniqueCategories.includes(category)) {
            uniqueCategories.push(category);
        }
    });

    uniqueCategories.sort().forEach(category => {
        let option = document.createElement('option');
        option.value = category;
        option.innerText = category;
        filterCategory.appendChild(option);
    });
}


function globalFilter() {
    let nameValue = filterName.value.toLowerCase();
    let selectedCategory = filterCategory.value;
    let maxPrice = parseInt(filterPrice.value);

    priceValue.innerText = maxPrice;

    let filtered = announcements.filter(item => {
        let matchName = item.name.toLowerCase().includes(nameValue);
        let matchCategory = selectedCategory === "All" || item.category === selectedCategory;
        let matchPrice = parseFloat(item.price) <= maxPrice;

        return matchName && matchCategory && matchPrice;
    });

    showAnnouncements(filtered);
}


filterName.addEventListener('input', globalFilter);
filterCategory.addEventListener('change', globalFilter);
filterPrice.addEventListener('input', globalFilter);

// Inizializzazione
setCategories();
showAnnouncements(announcements);