function createCar(manufacturer: string, modelName: string, ...
    properties: [string, any][]):any {
        const car: any = {
            manufacturer,
            modelName,
        }

        for (const [key, value] of properties) {
            car[key] = value
        }
        return car
    } 
const myCar:string = createCar("Toyotata", "Corrolla", ["color", "red"], ["optional featch", "sun roof"], ["speed", "300km/h"], ["Booster", "1000km/h"])

console.log(myCar);