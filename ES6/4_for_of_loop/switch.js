//switch statement

// writing switch old way
let text1;
switch (new Date().getDay()) {
  default:
    text1 = "Looking forward to the Weekend";
    break;
  case 6:
    text1 = "Today is Saturday";
    break;
  case 0:
    text1 = "Today is Sunday";
}
console.log(text1);
document.getElementById("demo1").innerHTML = text1;

// writing switch new way
const extention = `.js`;

const extentionObj = {
    '.css': 'text/css',
    '.js': 'text/javascript',
    '.json': 'application/json',
    '.jpg': 'image/jpeg',
    '.png': 'image/png',
    '.txt': 'text/plain'
}
console.log(`${extentionObj[extention]}`);
document.getElementById("demo2").innerHTML = `${extentionObj[extention]}`;