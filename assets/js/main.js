// funktion und variablen definieren
const rechnen = function () {
  let nettoZuBrutto = document.getElementById("nettoZuBrutto");
  let bruttoZuNetto = document.getElementById("bruttoZuNetto");
  let satz7 = document.getElementById("satz7");
  let satz19 = document.getElementById("satz19");
  let betragInput = document.getElementById("betragInput");
  let ergebnis = document.getElementById("ergebnis");
  let endPreis = document.getElementById("endPreis");

  //überprüfung ob ein ","  enthalten ist im input, wenn ja wirds mit "." ausgetauscht

  let a = betragInput.value;

  let c = a.slice(-4);
  let b = a.slice(0, -4);

  c = c.replace(",", ".");
  b = b.replace(".", "");
  g = Number(b + c);

  g = g / 2; //bsp. rechnung

  if (isNaN(g)) {
    document.write("contains letters");
  } else {
    document.write("only numbers");
  }

  g = g.toFixed(2);
  g = g.replace(".", ",");

  let h = g.slice(0, -6);
  let i = g.slice(-6);

  g = h + "." + i;
  console.log(g);

  //   let betragInputReplace = betragInput.value.replace(",", ".");
  //  console.log(betragInputReplace);

  if (nettoZuBrutto.checked && satz19.checked) {
  }
};
