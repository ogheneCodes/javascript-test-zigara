const displayObj1 = document.getElementById('#displayObj1')
// const displayObj1 = document.querySelector('#displayObj1')
const displayButtonObj1 = document.getElementById('displayButtonObj1');
// const displayButtonObj1 = document.querySelector('displayButtonObj1')
const displayObj2 = document.getElementById('#displayObj2')
// const displayObj2 = document.querySelector('#displayObj2');
const displayButtonObj2 = document.getElementById('displayButtonObj2');
// const displayButtonObj2 = document.querySelector('displayButtonObj2')


// displayButtonObj1.addEventListener('click', e=>{
//     e.preventDefault();
//     displayObj1.style.display='none';
// });

displayButtonObj1.addEventListener("click", myFunction);
function myFunction(){
    document.getElementById("displayObj1").style.display = "block";
   
}
displayButtonObj2.addEventListener("click", myFunction);
function myFunction(){
    document.getElementById("displayObj2").style.display = "block";
   
}





