'use strict';
// 5 object literal (build 1 and c+p)
// properties for the min/max custPerHour, and avg cookPerCust
// need a property for and custPerHour[16, 20, 35, 48, 56, 77, 93, 144, 119, 84, 61, 23, 42, 57, 29] and a method to calculate
// property to store and method to generate total cookies sold per hour
// cal/store/display total daily sales per location
//a property that holds the locations name


var Hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var firstAndPike = {
  locationName: 'First And Pike',
  minCustPerHour: 23,
  maxCustPerHour: 65,
  avgCookPerCust: 6.3,
  totalCookSoldDaily: 0,
  randCustPerHour: [],
  totalCookSoldPerHour: [],
  calcRandCustPerHour: function() {
    for(var i = 0; i < Hours.length; i++) {
      this.randCustPerHour.push(Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour);
    }
  },
  calcTotalCookSoldPerHour: function() {
    firstAndPike.calcRandCustPerHour();
    for (var i = 0; i < Hours.length; i++) {
      this.totalCookSoldPerHour.push(Math.ceil(this.randCustPerHour[i] * this.avgCookPerCust));
      this.totalCookSoldDaily += this.totalCookSoldPerHour[i];
    }
  },
  render: function() {
    this.calcTotalCookSoldPerHour();
    var firstAndPikeUL = document.getElementById('firstAndPikeUL');
    for (var i = 0; i < Hours.length; i++) {
      var firstAndPikeEL = document.createElement('li');
      firstAndPikeEL.textContent = Hours[i] + ': ' + this.totalCookSoldPerHour[i] + ' cookies to ' + this.randCustPerHour[i] + ' customers!';
      firstAndPikeUL.appendChild(firstAndPikeEL);
    }
  }
};

var seaCenter = {
  locationName: 'Seattle Center',
  minCustPerHour:11,
  maxCustPerHour:38,
  avgCookPerCust: 3.7,
  totalCookSoldDaily: 0,
  randCustPerHour: [],
  totalCookSoldPerHour: [],
  calcRandCustPerHour: function() {
    for(var i = 0; i < Hours.length; i++) {
      this.randCustPerHour.push(Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour);
    }
  },
  calcTotalCookSoldPerHour: function() {
    seaCenter.calcRandCustPerHour();
    for (var i = 0; i < Hours.length; i++) {
      this.totalCookSoldPerHour.push(Math.ceil(this.randCustPerHour[i] * this.avgCookPerCust));
      this.totalCookSoldDaily += this.totalCookSoldPerHour[i];
    }
  },
  render: function() {
    this.calcTotalCookSoldPerHour();
    var seaCenterUL = document.getElementById('seaCenterUL');
    for (var i = 0; i < Hours.length; i++) {
      var seaCenterEL = document.createElement('li');
      seaCenterEL.textContent = Hours[i] + ': ' + this.totalCookSoldPerHour[i] + ' cookies to ' + this.randCustPerHour[i] + ' customers!';
      seaCenterUL.appendChild(seaCenterEL);
    }
  }
};

var seaTac = {
  locationName: 'SeaTac Airport',
  minCustPerHour: 3,
  maxCustPerHour: 24,
  avgCookPerCust: 1.2,
  totalCookSoldDaily: 0,
  randCustPerHour: [],
  totalCookSoldPerHour: [],
  calcRandCustPerHour: function() {
    for(var i = 0; i < Hours.length; i++) {
      this.randCustPerHour.push(Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour);
    }
  },
  calcTotalCookSoldPerHour: function() {
    seaTac.calcRandCustPerHour();
    for (var i = 0; i < Hours.length; i++) {
      this.totalCookSoldPerHour.push(Math.ceil(this.randCustPerHour[i] * this.avgCookPerCust));
      this.totalCookSoldDaily += this.totalCookSoldPerHour[i];
    }
  },
  render: function() {
    this.calcTotalCookSoldPerHour();
    var seaTacUL = document.getElementById('seaTacUL');
    for (var i = 0; i < Hours.length; i++) {
      var seaTacEL = document.createElement('li');
      seaTacEL.textContent = Hours[i] + ': ' + this.totalCookSoldPerHour[i] + ' cookies to ' + this.randCustPerHour[i] + ' customers!';
      seaTacUL.appendChild(seaTacEL);
    }
  }
};

var capHill = {
  locationName: 'Capitol Hill',
  minCustPerHour: 20,
  maxCustPerHour: 38,
  avgCookPerCust: 2.3,
  totalCookSoldDaily: 0,
  randCustPerHour: [],
  totalCookSoldPerHour: [],
  calcRandCustPerHour: function() {
    for(var i = 0; i < Hours.length; i++) {
      this.randCustPerHour.push(Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour);
    }
  },
  calcTotalCookSoldPerHour: function() {
    capHill.calcRandCustPerHour();
    for (var i = 0; i < Hours.length; i++) {
      this.totalCookSoldPerHour.push(Math.ceil(this.randCustPerHour[i] * this.avgCookPerCust));
      this.totalCookSoldDaily += this.totalCookSoldPerHour[i];
    }
  },
  render: function() {
    this.calcTotalCookSoldPerHour();
    var capHillUL = document.getElementById('capHillUL');
    for (var i = 0; i < Hours.length; i++) {
      var capHillEL = document.createElement('li');
      capHillEL.textContent = Hours[i] + ': ' + this.totalCookSoldPerHour[i] + ' cookies to ' + this.randCustPerHour[i] + ' customers!';
      capHillUL.appendChild(capHillEL);
    }
  }
};

var Alki = {
  locationName: 'Alki',
  minCustPerHour: 2,
  maxCustPerHour: 16,
  avgCookPerCust: 4.6,
  totalCookSoldDaily: 0,
  randCustPerHour: [],
  totalCookSoldPerHour: [],
  calcRandCustPerHour: function() {
    for(var i = 0; i < Hours.length; i++) {
      this.randCustPerHour.push(Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour);
    }
  },
  calcTotalCookSoldPerHour: function() {
    Alki.calcRandCustPerHour();
    for (var i = 0; i < Hours.length; i++) {
      this.totalCookSoldPerHour.push(Math.ceil(this.randCustPerHour[i] * this.avgCookPerCust));
      this.totalCookSoldDaily += this.totalCookSoldPerHour[i];
    }
  },
  render: function() {
    this.calcTotalCookSoldPerHour();
    var alkiUL = document.getElementById('alkiUL');
    for (var i = 0; i < Hours.length; i++) {
      var alkiEL = document.createElement('li');
      alkiEL.textContent = Hours[i] + ': ' + this.totalCookSoldPerHour[i] + ' cookies to ' + this.randCustPerHour[i] + ' customers!';
      alkiUL.appendChild(alkiEL);
    }
  }
};

capHill.render();
Alki.render();
firstAndPike.render();
seaTac.render();
seaCenter.render();
