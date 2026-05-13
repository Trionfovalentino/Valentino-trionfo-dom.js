// Selezioniamo gli elementi
const inputTitle = document.querySelector('#inputTitle');
const inputContent = document.querySelector('#inputContent');
const btnCreate = document.querySelector('#btnCreate');
const articlesContainer = document.querySelector('#articlesContainer');

btnCreate.addEventListener('click', () => {

    const titleValue = inputTitle.value.trim(); 
    const contentValue = inputContent.value.trim();

    // EXTRA 1: Controllo campi vuoti
    if (titleValue === "" || contentValue === "") {
        alert("Attenzione: devi compilare sia il titolo che il paragrafo!");
        return; 
    }

    // Creazione dinamica dell'articolo
    let article = document.createElement('article');
    let h3 = document.createElement('h3');
    let p = document.createElement('p');


    h3.innerText = titleValue;
    p.innerText = contentValue;


    article.appendChild(h3);
    article.appendChild(p);
    articlesContainer.appendChild(article);


    inputTitle.value = "";
    inputContent.value = "";

    console.log("Articolo creato con successo!");
});