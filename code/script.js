function fetchCodes(){
mainCode = fetch("main-code.txt");
madCode = fetch("mad-code.txt");
cookieCode = fetch ("cookie-code.txt")

document.getElementById('main-code').innerText = "Main: " + mainCode;
document.getElementById('mad-code').innerText = "Drive mad: " + madCode;
document.getElementById('cookie-code').innerText = "Cookie Clicker: " + cookieCode;
}
