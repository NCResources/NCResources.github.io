async function fetchCodes(){
  const response1 = await fetch("main-code.txt");
  const mainCode = await response1.text();
  
  const response2 = await fetch("mad-code.txt");
  const madCode = await response2.text();
  
  const response3 = await fetch("cookie-code.txt");
  const cookieCode = await response3.text();
  
  document.getElementById('main-code').innerText = `Main: ${mainCode}`;
  document.getElementById('mad-code').innerText = `Drive Mad: ${madCode}`;
  document.getElementById('cookie-code').innerText = `Cookie Clicker: ${cookieCode}`;
}
