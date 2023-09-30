"use strict";
function createCar(manufacturer, modelName, ...properties) {
    const car = {
        manufacturer,
        modelName,
    };
    for (const [key, value] of properties) {
        car[key] = value;
    }
    return car;
}
const myCar = createCar("Toyotata", "Corrolla", ["color", "red"], ["optional featch", "sun roof"], ["speed", "300km/h"], ["Booster", "1000km/h"]);
console.log(myCar);
