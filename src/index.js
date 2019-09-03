import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Dont click this</h1>
<div>
 <a href="https://en.wikipedia.org/wiki/Nicolas_Cage"> haha </a>
</div>
`;
function listCookies() {
  var theCookies = document.cookie.split(";");
  var aString = "";
  for (var i = 1; i <= theCookies.length; i++) {
    aString += i + " " + theCookies[i - 1] + "\n";
  }
  return aString;
}
document.getElementById("app").addEventListener("click", function() {
  var i = 0;
  //user has to use 100 cliks to get out of the alert or close the browser
  while (i < 100) {
    alert("gotcha yo");
    listCookies();
    i++;
  }
});
