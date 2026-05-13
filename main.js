
const paragraphs = document.querySelectorAll('p');
const btnColor = document.getElementById('btnColor');
const btnBold = document.getElementById('btnBold');
const btnToggle = document.getElementById('btnToggle');

function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}


btnColor.addEventListener('click', () => {
    paragraphs.forEach(p => {
        p.style.color = getRandomColor();
    });
});

btnBold.addEventListener('click', () => {
    paragraphs.forEach(p => {
        if (p.style.fontWeight === 'bold') {
            p.style.fontWeight = 'normal';
        } else {
            p.style.fontWeight = 'bold';
        }
    });
});

btnToggle.addEventListener('click', () => {
    paragraphs.forEach(p => {
        if (p.style.display === 'none') {
            p.style.display = 'block';
        } else {
            p.style.display = 'none';
        }
    });
});


console.log("Script collegato correttamente!");