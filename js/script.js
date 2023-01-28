const trattementi = [
  'Manicure',
  'Pedicure',
  'Depilazione Laser',
  'Lampada',
  'Ceretta a caldo',
  'Ceretta a freddo',
  'Ceretta araba',
  'Ceretta nera',
  'Ceretta a rullo'
];

let text = '';
for (let i = 0; i < trattementi.length; i++){
  text += trattementi[i] + '<br>'
}
document.getElementById("demo").innerHTML = text;

const costi = [
  '5.00 €',
  '7.00 €',
  '25.00 €',
  '20.00 €',
  '7.00 €',
  '12.00 €',
  '8.00 €',
  '7.00 €',
  '5.00 €'
]

let costo = '';
for (let i = 0; i < costi.length; i++){
  costo += costi[i] + '<br>'
}
document.getElementById("demo1").innerHTML = costo;


// this.location.href è una proprietà dell'oggetto JavaScript location che rappresenta l'URL attuale della pagina web. Il valore di questa proprietà può essere letto o impostato per navigare verso una nuova pagina. Ad esempio, per reindirizzare l'utente verso una nuova pagina si può utilizzare il codice this.location.href = 'http://www.example.com'.

function cambiaSelect(param){
  this.location.href=param;
  }

  function toggleMenu() {
    var menu = document.getElementById("menu");
    if (menu.style.display === "none") {
        menu.style.display = "block";
    } else {
        menu.style.display = "none";
    }
}