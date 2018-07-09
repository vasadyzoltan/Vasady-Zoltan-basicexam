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


// 2.Feladat

function ConsumablesNull(modarray) {
  var jel = 0;
  for (var i = 0; i < modarray.length; i++) {
    for (var k in modarray[i]) {
      if (modarray[i][k] === null) {
        jel = 1
      }
    }
    if (jel == 1) {
      jel = 0;
      delete modarray[i]
    }
  }
}


// 3. Feladat

function ConsumablesNullrewriteUnknown(Unknownarray) {
  for (var i = 0; i < passnum.length; i++) {
    for (var k in passnum[i]) {
      if (passnum[i][k] === null) {
        passnum[i][k] = "unknown"
      }
    }
  }
}

// 4. Feladat

function Shipdatas() {

  console.log(ConsumablesNullrewriteUnknown(userDatas)
}

// 5. Feladat I.

function Count(statarr) {
  var x = 0;
  for (var i = 0; i < statarr.length; i++) {
    if (statarr[i].crew === "1") {
      x = x + 1;
    }
  }
  return x;
}


// 5. Feladat II.

function getMaximumCapacityShip(ship) {
  var biggestship = 0;
  var shipname = "";
  for (var i = 0; i < spaceship.length; i++) {
    if (parseInt(spaceship[i].cargo_capacity) > biggestship) {
      biggestship = parseInt(spaceship[i].cargo_capacity)
      shipname = spaceship[i].model
    }
  }
  return longestship;
}


// 5. Feladat III.

function allPassengers(passnum)
var fullpass = 0; {
  for (var i = 0; i < passnum.length; i++) {
    fullpass = fullpass + parseInt(passnum[i].passengers);
  }
}


// 5. Feladat IV.

function longest(spaceship) {
  var longestship = 0;
  var shipname = "";
  for (var i = 0; i < spaceship.length; i++) {
    if (parseInt(spaceship[i].lengthiness) > longestship) {
      longestship = parseInt(spaceship[i].lengthiness)
      shipname = spaceship[i].image
    }
    return longestship;
  }


  // 6. Feladat

  function searchforShipByModel(spaceobject, milkyway) {
    for (var i = 0; i < spaceobject.length; i++) {
      if (spaceobject[i].model.toUpperCase().indexOf(milkyway.toUpperCase()) > -1) {
        return spaceobject[i];
      }
    }

    function successAjax(xhttp) {
      // Innen lesz elérhető a JSON file tartalma, tehát az adatok amikkel dolgoznod kell
      var userDatas = JSON.parse(xhttp.responseText);
      // Innen lehet hívni.
      console.log(userDatas);
      bubbleSort(userDatas, 'cost_in_credits')
      ConsumablesNull(userDatas);
      ConsumablesNullrewriteUnknown(userDatas);
      Shipdatas(userDatas);
      Count(userDatas);
      getMaximumCapacityShip(userDatas);
      allPassengers(userDatas);
      longest(userDatas);
      searchforShipByModel(userDatas);

    }
    getData('/json/spaceships.json', successAjax);
