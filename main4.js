// 1. Database Annunci
const announcements = [
    { "id": 1, "name": "Huawei X5", "category": "Elettronica", "price": "120.12", "type": "sell" },
    { "id": 2, "name": "Fiat 500", "category": "Motori", "price": "2000.32", "type": "search" },
    { "id": 3, "name": "Mazza da Baseball", "category": "Sport", "price": "20.15", "type": "sell" },
    { "id": 4, "name": "Bilocale", "category": "Immobili", "price": "30000.54", "type": "search" },
    { "id": 5, "name": "Felpa usata", "category": "Abbigliamento", "price": "10.42", "type": "sell" },
    { "id": 6, "name": "Divani due posti", "category": "Arredamento", "price": "400.64", "type": "search" },
    { "id": 7, "name": "Pala", "category": "Giardinaggio", "price": "30.45", "type": "sell" },
    { "id": 8, "name": "Master of Pupo", "category": "Musica", "price": "15.64", "type": "sell" },
    { "id": 9, "name": "TV Samsung", "category": "Elettronica", "price": "230.42", "type": "sell" },
    { "id": 10, "name": "Ford Puma", "category": "Motori", "price": "25000.02", "type": "sell" },
    { "id": 11, "name": "Pallone da calcio", "category": "Sport", "price": "30.12", "type": "search" },
    { "id": 12, "name": "Trilocale", "category": "Immobili", "price": "55000.54", "type": "sell" },
    { "id": 13, "name": "Sciarpa scolorita", "category": "Abbigliamento", "price": "5.23", "type": "sell" },
    { "id": 14, "name": "Lampada", "category": "Arredamento", "price": "70.65", "type": "sell" },
    { "id": 15, "name": "Concime", "category": "Giardinaggio", "price": "2.45", "type": "search" },
    { "id": 16, "name": "Basso nuovo", "category": "Musica", "price": "300.62", "type": "sell" },
    { "id": 17, "name": "Cuffie Sony", "category": "Elettronica", "price": "120.65", "type": "sell" },
    { "id": 18, "name": "Ducati Monster", "category": "Motori", "price": "12000.13", "type": "sell" },
    { "id": 19, "name": "Pattini", "category": "Sport", "price": "90.64", "type": "search" },
    { "id": 21, "name": "Guanti invernali", "category": "Abbigliamento", "price": "22.04", "type": "sell" },
    { "id": 22, "name": "Scrivania in vetro", "category": "Arredamento", "price": "600.63", "type": "search" },
    { "id": 23, "name": "Secchio", "category": "Giardinaggio", "price": "30.43", "type": "search" },
    { "id": 24, "name": "Compilation Pupo", "category": "Musica", "price": "9.93", "type": "search" },
    { "id": 25, "name": "Auricolari Sennheiser", "category": "Elettronica", "price": "120.93", "type": "sell" },
    { "id": 26, "name": "Fiat 300", "category": "Motori", "price": "2560.42", "type": "sell" },
    { "id": 27, "name": "Set mazze da golf", "category": "Sport", "price": "4320.43", "type": "search" },
    { "id": 28, "name": "Posto auto", "category": "Immobili", "price": "2200.63", "type": "search" },
    { "id": 29, "name": "Zaino Decathlon", "category": "Abbigliamento", "price": "55.55", "type": "sell" },
    { "id": 30, "name": "Comodino", "category": "Arredamento", "price": "210.12", "type": "sell" },
    { "id": 31, "name": "Rastrello", "category": "Giardinaggio", "price": "5.62", "type": "sell" },
    { "id": 32, "name": "Compilation Nino D'Angelo", "category": "Musica", "price": "1.91", "type": "sell" },
    { "id": 33, "name": "IPhone X", "category": "Elettronica", "price": "1300.41", "type": "search" },
    { "id": 34, "name": "Nissan Juke", "category": "Motori", "price": "25420.40", "type": "sell" },
    { "id": 35, "name": "Guanti da palestra", "category": "Sport", "price": "11.54", "type": "search" },
    { "id": 37, "name": "Scarpe Nike", "category": "Abbigliamento", "price": "240.33", "type": "sell" },
    { "id": 38, "name": "Poltrona", "category": "Arredamento", "price": "420.66", "type": "search" },
    { "id": 39, "name": "Semi", "category": "Giardinaggio", "price": "4.43", "type": "sell" },
    { "id": 40, "name": "Biglietto Gods Of Metal", "category": "Musica", "price": "150.65", "type": "search" },
    { "id": 41, "name": "Macbook Pro", "category": "Elettronica", "price": "2340.37", "type": "search" },
    { "id": 42, "name": "Dacia Duster", "category": "Motori", "price": "13350.73", "type": "sell" },
    { "id": 43, "name": "Canoa", "category": "Sport", "price": "520.03", "type": "search" },
    { "id": 44, "name": "Cantina", "category": "Immobili", "price": "20000.12", "type": "sell" },
    { "id": 45, "name": "Jeans", "category": "Abbigliamento", "price": "55.54", "type": "sell" },
    { "id": 46, "name": "Lampadario", "category": "Arredamento", "price": "280.54", "type": "sell" },
    { "id": 47, "name": "Trattore", "category": "Giardinaggio", "price": "12000.09", "type": "sell" },
    { "id": 48, "name": "Plettro", "category": "Musica", "price": "0.99", "type": "sell" },
    { "id": 49, "name": "Modem", "category": "Mimmo", "price": "2.99", "type": "sell" }
];

// 2. Selettori
const wrapper = document.querySelector('#announcementsWrapper');
const filterName = document.querySelector('#filterName');
const filterCategory = document.querySelector('#filterCategory');
const filterPrice = document.querySelector('#filterPrice');
const priceValue = document.querySelector('#priceValue');

// --- LOGICA VISUALIZZAZIONE ---
function showAnnouncements(data) {
    wrapper.innerHTML = "";
    data.forEach(item => {
        let col = document.createElement('div');
        col.className = "col-md-6 col-xl-4";
        col.innerHTML = `
            <div class="card card-presto shadow-sm p-3">
                <div class="card-body">
                    <span class="category-badge mb-2">${item.category}</span>
                    <h5 class="card-title text-truncate">${item.name}</h5>
                    <p class="price-tag mb-1">${item.price} €</p>
                    <p class="small text-muted mb-0">Modalità: ${item.type === 'sell' ? 'Vendita' : 'Ricerca'}</p>
                </div>
            </div>
        `;
        wrapper.appendChild(col);
    });
}

// --- LOGICA FILTRI ---

// Popola Categorie
function setCategories() {
    let categories = announcements.map(item => item.category);
    let unique = [...new Set(categories)]; 
    unique.sort().forEach(cat => {
        let opt = document.createElement('option');
        opt.value = cat;
        opt.innerText = cat;
        filterCategory.appendChild(opt);
    });
}

// Configura lo slider del prezzo in base al massimo disponibile
function setPriceFilter() {
    let prices = announcements.map(item => parseFloat(item.price));
    let max = Math.ceil(Math.max(...prices));
    
    filterPrice.max = max;
    filterPrice.value = max;
    priceValue.innerText = max;
}

// Funzione Filtro Globale
function globalFilter() {
    let searchedName = filterName.value.toLowerCase();
    let selectedCat = filterCategory.value;
    let selectedPrice = parseFloat(filterPrice.value);

    let filtered = announcements.filter(item => {
        let matchName = item.name.toLowerCase().includes(searchedName);
        let matchCat = selectedCat === "All" || item.category === selectedCat;
        let matchPrice = parseFloat(item.price) <= selectedPrice;
        return matchName && matchCat && matchPrice;
    });

    priceValue.innerText = selectedPrice;
    showAnnouncements(filtered);
}

// Event Listeners
filterName.addEventListener('input', globalFilter);
filterCategory.addEventListener('change', globalFilter);
filterPrice.addEventListener('input', globalFilter);

// --- AVVIO ---
showAnnouncements(announcements);
setCategories();
setPriceFilter();
