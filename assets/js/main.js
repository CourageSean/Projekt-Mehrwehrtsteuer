let betragTxt = document.getElementById("betragTxt");
let ergebnis = document.getElementById("ergebnis");
let nettoZuBrutto = document.getElementById("nettoZuBrutto");
let bruttoZuNetto = document.getElementById("bruttoZuNetto");

if (nettoZuBrutto.checked) {
  betragTxt.innerHTML = "Nettobetrag (Preis ohne Mehrwehrtsteuer) in Euro*";
  ergebnis.innerHTML = "Bruttobetrag (Endpreis)";
} else if (BruttoZuNetto.checked) {
  betragTxt.innerHTML =
    "Bruttobetrag (Preis inklusive Mehrwehrtsteuer) in Euro*";
  ergebnis.innerHTML = "Nettobetrag ";
}

const rechnen = function () {
  let bruttoZuNetto = document.getElementById("bruttoZuNetto");
  let satz7 = document.getElementById("satz7");
  let satz19 = document.getElementById("satz19");

  let betragInput = document.getElementById("betragInput");

  let endPreis = document.getElementById("endPreis");
  let mehrwehrtSteuerBetrag = document.getElementById("mehrwehrtsteuerbetrag");

  /*Ab hier modifiziere ich den eingegebenen Wert so dass wenn zb. 200.500,55 als Betrag 
  eingegeben wird das komma "," mit "." ausgetauscht wird und das erste "." entfernt wird,
  damit ich mit dem input rechnen kann */

  let a = betragInput.value;

  let c = a.slice(-4);
  let b = a.slice(0, -4);

  c = c.replace(",", ".");
  b = b.replace(".", "");
  g = Number(b + c);

  const innerRechner = function (y) {
    let gmwSt = g * y;
    let gbEndPreis = g + gmwSt;
    gmwSt = gmwSt.toFixed(2);
    gmwSt = gmwSt.replace(".", ",");
    mehrwehrtSteuerBetrag.innerHTML = gmwSt;
    gbEndPreis = gbEndPreis.toFixed(2);
    gbEndPreis = gbEndPreis.replace(".", ",");
    endPreis.innerHTML = gbEndPreis;
  };

  const innerRechner2 = function (x) {
    let gbEndPreis = g / x;
    let gmwSt = g - gbEndPreis;
    gmwSt = gmwSt.toFixed(2);
    gmwSt = gmwSt.replace(".", ",");
    mehrwehrtSteuerBetrag.innerHTML = gmwSt;
    gbEndPreis = gbEndPreis.toFixed(2);
    gbEndPreis = gbEndPreis.replace(".", ",");
    endPreis.innerHTML = gbEndPreis;
  };

  //Je nachdem was gechecked ist, was dann widerum angezeigt wird

  if (nettoZuBrutto.checked && satz19.checked) {
    innerRechner(0.19);
  } else if (nettoZuBrutto.checked && satz7.checked) {
    innerRechner(0.07);
  } else if (bruttoZuNetto.checked && satz19.checked) {
    innerRechner2(1.19);
  } else if (bruttoZuNetto.checked && satz7.checked) {
    innerRechner2(1.07);
  }

  g = g.toFixed(2);

  /* Ab hier füge ich wieder komma hinzu und replace das letzte "." mit "," um es als string 
  auszugeben*/
  g = g.replace(".", ",");

  let h = g.slice(0, -6);
  let i = g.slice(-6);

  g = h + "." + i;
  console.log(g);
};

function changeTxt() {
  if (nettoZuBrutto.checked) {
    betragTxt.innerHTML = "Nettobetrag (Preis ohne Mehrwehrtsteuer) in Euro*";
    ergebnis.innerHTML = "Bruttobetrag (Endpreis)";
  } else if (bruttoZuNetto.checked) {
    betragTxt.innerHTML =
      "Bruttobetrag (Preis inklusive Mehrwehrtsteuer) in Euro*";
    ergebnis.innerHTML = "Nettobetrag ";
  }
}

betragInput.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    rechnen();
    event.preventDefault();
  }
});
