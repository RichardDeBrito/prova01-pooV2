"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MissionControl = void 0;
const utils_1 = require("./utils");
class MissionControl {
    constructor(spacecraft, cargoArray = [], planetsArray = [], reportMission = []) {
        this.spacecraft = spacecraft;
        this.cargoArray = cargoArray;
        this.planetsArray = planetsArray;
        this.reportMission = reportMission;
    }
    insertElements(spacecraft, planets, cargos) {
        this.spacecraft = spacecraft;
        this.cargoArray = cargos;
        this.planetsArray = planets;
    }
    executeMissions() {
        let drawn = (0, utils_1.random)(this.cargoArray.length);
        console.log(`Assigned spacecraft: ${this.spacecraft.name} | Fuel: ${this.spacecraft.fuel} | Capacity: ${this.spacecraft.cargo_capacity}`);
        console.log();
        for (let i = 0; i < 2; i++) {
            let trip = [];
            const initialCargoCapacity = this.spacecraft.cargo_capacity;
            while (this.spacecraft.cargoForTransport.length <= 0) {
                this.spacecraft.pickUpCargo(this.cargoArray[(0, utils_1.random)(drawn)]);
            }
            trip = this.spacecraft.travel(this.planetsArray[drawn]);
            this.reportMission = trip;
            this.report(this.spacecraft.name, this.planetsArray[drawn].name, this.spacecraft.fuel, this.spacecraft.cargo_capacity);
            this.planetsArray.splice(drawn, 1);
            this.cargoArray.splice(drawn, 1);
            this.spacecraft.cargoForTransport.pop();
            this.spacecraft.cargo_capacity = initialCargoCapacity;
            console.log();
        }
    }
    report(spacecraftName, planetName, fuel, capacity) {
        console.log(`Mission: ${spacecraftName} -> ${planetName}`);
        console.log(this.reportMission[0]);
        console.log(this.reportMission[1]);
        console.log(`Fuel remaining: ${fuel.toFixed(1)} | Capacity remaining: ${capacity}`);
    }
}
exports.MissionControl = MissionControl;
