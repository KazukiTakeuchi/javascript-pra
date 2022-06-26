'use strict';

const temperatures = [17, 21, 23];

const printForecast = temperatures.map(function (temperature, index) {
    return `${temperature}ºC in ${index+1} days`;
});

console.log(printForecast);
