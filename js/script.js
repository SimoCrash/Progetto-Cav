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



// const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];

// let text = "";
// for (let i = 0; i < cars.length; i++) {
//   text += cars[i] + "<br>";
// }

// document.getElementById("demo").innerHTML = text;