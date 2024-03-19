function fetchCodes(){
const mainCode = fetch("main-code.txt");
const madCode = fetch("mad-code.txt");
const cookieCode = fetch ("cookie-code.txt")

document.getElementById('main-code').innerText = "Main: " + mainCode;
document.getElementById('mad-code').innerText = "Drive mad: " + madCode;
document.getElementById('cookie-code').innerText = "Cookie Clicker: " + cookieCode;
}
