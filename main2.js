// 1. Array di partenza (Database)
let contacts = [
    { name: "Mario Rossi", phone: "333123456" },
    { name: "Luca Bianchi", phone: "333987654" }
];

const contactList = document.querySelector('#contactList');
const btnShowHide = document.querySelector('#btnShowHide');
const btnAdd = document.querySelector('#btnAdd');
const table = document.querySelector('#contactTable');

function showContacts() {
    contactList.innerHTML = "";
    contacts.forEach((contact, index) => {
        let tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${contact.name}</td>
            <td>${contact.phone}</td>
            <td>
                <button class="btnDelete" onclick="deleteContact(${index})">Elimina</button>
                <button class="btnEdit" onclick="editContact(${index})">Modifica</button>
            </td>
        `;
        contactList.appendChild(tr);
    });
}

btnShowHide.addEventListener('click', () => {
    if (table.style.display === "none") {
        table.style.display = "table";
        btnShowHide.innerText = "Nascondi Lista";
    } else {
        table.style.display = "none";
        btnShowHide.innerText = "Mostra Lista";
    }
});

btnAdd.addEventListener('click', () => {
    const name = document.querySelector('#inputName').value;
    const phone = document.querySelector('#inputPhone').value;

    if (name && phone) {
        contacts.push({ name: name, phone: phone });
        document.querySelector('#inputName').value = "";
        document.querySelector('#inputPhone').value = "";
        showContacts();
    } else {
        alert("Inserisci tutti i campi!");
    }
});


function deleteContact(index) {
    contacts.splice(index, 1); 
    showContacts(); 
}

function editContact(index) {
    const newName = prompt("Inserisci il nuovo nome:", contacts[index].name);
    const newPhone = prompt("Inserisci il nuovo telefono:", contacts[index].phone);

    if (newName && newPhone) {
        contacts[index].name = newName;
        contacts[index].phone = newPhone;
        showContacts();
    }
}


showContacts();