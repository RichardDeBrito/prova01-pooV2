"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MiningShip = exports.ExplorationShip = exports.CargoShip = exports.Spacecraft = void 0;
class Spacecraft {
    constructor(name, cargo_capacity, distancePerLiter, speed, fuel, fuelMaxCapacity) {
        this.cargoForTransport = [];
        this.name = name;
        this.cargo_capacity = cargo_capacity;
        this.distancePerLiter = distancePerLiter;
        this.speed = speed;
        this.fuel = fuel;
        this.fuelMaxCapacity = fuelMaxCapacity;
        this.autonomy = distancePerLiter * fuelMaxCapacity;
    }
    pickUpCargo(cargo) {
        if (cargo.weightCargo > this.cargo_capacity) {
            return false;
        }
        else {
            this.cargoForTransport.push(cargo);
            return true;
        }
    }
    travel(destination) {
        const report_travel = [];
        let consumption = destination.distanceFromEarth / this.distancePerLiter;
        if (consumption >= this.fuel) {
            report_travel.push('Insufficient fuel.');
            report_travel.push(`${this.name} failed to deliver "${this.cargoForTransport[0].typeCargo}": It was not possible to make the trip.`);
        }
        else {
            this.fuel -= destination.distanceFromEarth / this.distancePerLiter;
            this.cargo_capacity -= this.cargoForTransport[0].weightCargo;
            report_travel.push(`${this.name} traveled to ${destination.name} (${destination.distanceFromEarth}M k).`);
            if (this.cargoForTransport[0].weightCargo > this.cargo_capacity) {
                report_travel.push(`${this.name} failed to deliver "${this.cargoForTransport[0].typeCargo}": exceeds capacity.`);
            }
            else {
                report_travel.push(`${this.name} delivered "${this.cargoForTransport[0].typeCargo}" to ${destination.name}.`);
            }
        }
        return report_travel;
    }
}
exports.Spacecraft = Spacecraft;
class CargoShip extends Spacecraft {
    constructor(name) {
        super(name, CargoShip.initialCargoCapacity, CargoShip.initialDistancePerLiter, CargoShip.initialSpeed, CargoShip.initialFuel, CargoShip.initialFuelMaxCapacity);
    }
}
exports.CargoShip = CargoShip;
CargoShip.initialCargoCapacity = 80;
CargoShip.initialDistancePerLiter = 22.5;
CargoShip.initialSpeed = 100;
CargoShip.initialFuel = 40;
CargoShip.initialFuelMaxCapacity = 50;
class ExplorationShip extends Spacecraft {
    constructor(name) {
        super(name, ExplorationShip.initialCargoCapacity, ExplorationShip.initialDistancePerLiter, ExplorationShip.initialSpeed, ExplorationShip.initialFuel, ExplorationShip.initialFuelMaxCapacity);
    }
}
exports.ExplorationShip = ExplorationShip;
ExplorationShip.initialCargoCapacity = 20;
ExplorationShip.initialDistancePerLiter = 30;
ExplorationShip.initialSpeed = 300;
ExplorationShip.initialFuel = 70;
ExplorationShip.initialFuelMaxCapacity = 50;
class MiningShip extends Spacecraft {
    constructor(name) {
        super(name, MiningShip.initialCargoCapacity, MiningShip.initialDistancePerLiter, MiningShip.initialSpeed, MiningShip.initialFuel, MiningShip.initialFuelMaxCapacity);
    }
}
exports.MiningShip = MiningShip;
MiningShip.initialCargoCapacity = 40;
MiningShip.initialDistancePerLiter = 26;
MiningShip.initialSpeed = 75;
MiningShip.initialFuel = 50;
MiningShip.initialFuelMaxCapacity = 15;
