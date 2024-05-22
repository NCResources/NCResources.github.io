async function fetchCodes(){
const mainCode = await fetch("main-code.txt");
const madCode = await fetch("mad-code.txt");
const cookieCode = await fetch ("cookie-code.txt")

document.getElementById('main-code').innerText = `Main: ${mainCode}`;
document.getElementById('mad-code').innerText = `Drive Mad: ${madCode}`;
document.getElementById('cookie-code').innerText = `Cookie Clicker: ${cookieCode}`;
}
