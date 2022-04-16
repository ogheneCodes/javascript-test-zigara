let participants = ["Max", "Tolu", "Ruth", "Mike", "Kode", "Vic", "james"];
document.getElementById("slice").innerHTML = participants.slice(0, 4);
// Replace
function myFunction() {
    let text = document.getElementById("replace").innerHTML; 
    document.getElementById("replace").innerHTML =
    text.replace(/BUHARI/i,"Oyedepo");
  }

//   Trim

let trimTxt = document.querySelector('#trimTxt');

let noTrimed = document.querySelector('#noTrimbtn');
let trimedbtn = document.querySelector('#trimedbtn');

noTrimed.addEventListener('click', ()=>{
    document.getElementById('notrim').innerText= trimTxt;
});

trimedbtn.addEventListener('click', ()=>{
    document.getElementById('trimed').innerHTML= `<h2>${trimTxt}</h2>`;
})