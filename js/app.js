// ide deklaráljátok a függvényeket.

function getData(url, callbackFunc) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      callbackFunc(this);
    }
  };
  xhttp.open('GET', url, true);
  xhttp.send();
}


// 1.feladat

function bubbleSort(a, par) {
  var swapped;
  do {
    swapped = false;
    for (var i = 0; i < a.length - 1; i++) {
      if (a[i][par] > a[i + 1][par]) {
        var temp = a[i];
        a[i] = a[i + 1];
        a[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
}
bubbleSort(successAjax(xhttp), 'cost_in_credits');

for (i = 0; i < JSON.parse(xhttp.responseText).length; i++) {
  console.log(JSON.parse(xhttp.responseText[i]))
}

// 2.Feladat

function ConsumablesNull(modarray) {
  var jel = 0;
  for (var i = 0; i < modarray.length; i++) {
    for (var k in modarray[i]) {
      if (modarray[i][k] === "null") {
        jel = 1
      }
    }
    if (jel == 1) {
      jel = 0;
      delete modarray[i]
    }
  }
  console.log(modarray);

}
ConsumablesNull(successAjax(xhttp));

// 3. Feladat

function ConsumablesNullrewriteUnknown(Unknownarray) {
  for (var i = 0; i < passnum.length; i++) {
    for (var k in passnum[i]) {
      if (passnum[i][k] === "null") {
        passnum[i][k] = "unknown"
      }
    }
  }
  console.log(passnum);
}
ConsumablesNullrewriteUnknown(successAjax(xhttp));

// 4. Feladat

function Shipdatas() {

  console.log(bubbleSort(successAjax(xhttp), 'cost_in_credits'));
  console.log(ConsumablesNull(successAjax(xhttp)))
  console.log(ConsumablesNullrewriteUnknown(successAjax(xhttp));
}

// 5. Feladat I.

function Count(statarr) {
  var x = 0;
  for (var i = 0; i < statarr.length; i++) {
    if (statarr[i].crew === 1) {
      x = x + 1;
    }
  }
  return x;
}
console.log(Count(successAjax(xhttp)))


// 5. Feladat II.

function getMaximumCapacityShip(ship) {
  if (ship === null) {
    return null;
  }
  var maxcargocapacity = ship[0];
  for (var i = 0; i < ship.length; i++) {
    if (ship[i].cargo_capacity < maxcargocapacity[i].cargo_capacity) {
      maxcargocapacity = ship[i];

    }
  } return maxcargocapacity;
}
console.log(getMaximumCapacityShip(successAjax(xhttp)))


// 5. Feladat III.

function allPassengers(passnum)
var fullpass = 0; {
  for (var i = 0; i < passnum.length; i++) {
    fullpass = fullpass + parseInt(passnum[i].passengers);
  }
}
console.log(fullpass)

console.log(allPassengers(successAjax(xhttp))))


// 5. Feladat IV.

function longest(spaceship) {
  var longestship = 0;
  var shipname = "";
  for (var i = 0; i < spaceship.length; i++) {
    if (parseInt(spaceship[i].lengthiness) > longestship) {
      longestship = parseInt(spaceship[i].lengthiness)
      shipname = spaceship[i].image
    }

  } return longestship;

  console.log(allPassengers(successAjax(xhttp)))



  function successAjax(xhttp) {
    // Innen lesz elérhető a JSON file tartalma, tehát az adatok amikkel dolgoznod kell
    var userDatas = JSON.parse(xhttp.responseText);
    // Innen lehet hívni.
    console.log(userDatas);
  }
  getData('/json/spaceships.json', successAjax);
