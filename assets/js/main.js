let betragTxt = document.getElementById("betragTxt");
let ergebnis = document.getElementById("ergebnis");
let nettoZuBrutto = document.getElementById("nettoZuBrutto");
let bruttoZuNetto = document.getElementById("bruttoZuNetto");
let slide = document.getElementById("slide");
let betragInput = document.getElementById("betragInput");

if (nettoZuBrutto.checked) {
  betragTxt.innerHTML = "Nettobetrag (Preis ohne Mehrwehrtsteuer) in Euro*";
  ergebnis.innerHTML = "Bruttobetrag (Endpreis)";
} else if (BruttoZuNetto.checked) {
  betragTxt.innerHTML =
    "Bruttobetrag (Preis inklusive Mehrwehrtsteuer) in Euro*";
  ergebnis.innerHTML = "Nettobetrag ";
}

function checker() {
  if (satz19.checked) {
    (slide.checked = false) && (satz19.checked = true);
  } else if (satz7.checked) {
    (slide.checked = true) && (satz7.checked = true);
  } else if (!slide.checked) {
    (satz19.checked = true) && (satz7.checked = false);
  } else if (slide.checked) {
    (satz7.checked = true) && (satz19.checked = false);
  }
}

function innerChecker() {
  if (slide.checked) {
    satz19.checked = true;
  } else if (!slide.chekcked) {
    satz7.checked = true;
  }
}

function rechnen(event) {
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
    mehrwehrtSteuerBetrag.innerHTML = gmwSt + "€";
    gbEndPreis = gbEndPreis.toFixed(2);
    gbEndPreis = gbEndPreis.replace(".", ",");
    endPreis.innerHTML = gbEndPreis + "€";
  };

  const innerRechner2 = function (x) {
    let gbEndPreis = g / x;
    let gmwSt = g - gbEndPreis;
    gmwSt = gmwSt.toFixed(2);
    gmwSt = gmwSt.replace(".", ",");
    mehrwehrtSteuerBetrag.innerHTML = gmwSt + "€";
    gbEndPreis = gbEndPreis.toFixed(2);
    gbEndPreis = gbEndPreis.replace(".", ",");
    endPreis.innerHTML = gbEndPreis + "€";
  };

  if (nettoZuBrutto.checked && satz19.checked) {
    innerRechner(0.19);
  } else if (nettoZuBrutto.checked && satz7.checked) {
    innerRechner(0.07);
  } else if (bruttoZuNetto.checked && satz19.checked) {
    innerRechner2(1.19);
  } else if (bruttoZuNetto.checked && satz7.checked) {
    innerRechner2(1.07);
  }
}

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
