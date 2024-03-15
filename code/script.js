function fetchCodes(){
main-code = fetch("main-code.txt");
mad-code = fetch("mad-code.txt");
cookie-code = fetch ("cookie-code.txt")

document.getElementById('main-code').innerText = "Main: " + main-code;
document.getElementById('mad-code').innerText = "Drive mad: " + mad-code;
document.getElementById('cookie-code').innerText = "Cookie Clicker: " + cookie-code;
}
