addEventListener("DOMContentLoaded", ok()); 
function ok(){
    alert("Pagina a fost încarcată cu succes, apasă OK pentru a continua!")
}
const adauga = document.getElementById("adaug");
const scade = document.getElementById("scad");
const tcount = document.getElementById("count");
var nr = 0;
tcount.innerHTML = nr; 
const handleIncrement = () => {
    nr++;
    tcount.innerHTML = nr;
  };
const handleDecrement = () => {
    nr--;
    if (nr < 1) {
        nr = 1;
    }
    tcount.innerHTML = nr;
};
adauga.addEventListener("click", handleIncrement);
scade.addEventListener("click", handleDecrement);

const sfarsit = document.getElementById("calculat");

const calculateTip = () => {
    let nota = parseFloat(document.getElementById('Bill').value);
    let persons = parseInt(document.getElementById('count').textContent);
    let tips = parseFloat(document.getElementById('Tip').value);
    
    if (isNaN(nota) || isNaN(persons) || isNaN(tips)) {
        alert("Vă rugăm să introduceți valori valide pentru factură, număr de persoane și procentul de bacșiș.");
        return;
    }
    
    let catlasam = ((tips * nota) / 100) / persons;
    let total = (nota / persons) + catlasam;
    total = total.toFixed(2);
    
    document.getElementById('final').value = '$' + total;
};

sfarsit.addEventListener("click", calculateTip);
