import { Cargo } from "./Cargo";
import { Planet } from "./Planet";

export abstract class Spacecraft {
    public readonly name: string;
    public cargo_capacity: number;
    public distancePerLiter: number;
    public fuel: number;
    public speed: number;
    public fuelMaxCapacity: number; 
    public autonomy: number;
    public cargoForTransport: Cargo[] = [];
    
    constructor(name: string, cargo_capacity: number, distancePerLiter: number, speed: number, fuel: number, fuelMaxCapacity: number){
        this.name = name;
        this.cargo_capacity = cargo_capacity;
        this.distancePerLiter = distancePerLiter;
        this.speed = speed;
        this.fuel = fuel;
        this.fuelMaxCapacity = fuelMaxCapacity;
        this.autonomy = distancePerLiter * fuelMaxCapacity;
    }

    public pickUpCargo(cargo: Cargo) :boolean {
        if(cargo.weightCargo > this.cargo_capacity) {
            return false;
        } else {
            this.cargoForTransport.push(cargo);
            return true;
        }
    }

    public travel(destination: Planet) :string[] {
        const report_travel: string[] = [];
        let consumption = destination.distanceFromEarth/this.distancePerLiter;
        if(consumption >= this.fuel) {
            report_travel.push('Insufficient fuel.');
            report_travel.push(`${this.name} failed to deliver "${this.cargoForTransport[0].typeCargo}": It was not possible to make the trip.`);
        } else {
            this.fuel -= destination.distanceFromEarth/this.distancePerLiter;
            this.cargo_capacity -= this.cargoForTransport[0].weightCargo
            report_travel.push(`${this.name} traveled to ${destination.name} (${destination.distanceFromEarth}M k).`)
        
            if(this.cargoForTransport[0].weightCargo > this.cargo_capacity) {
                report_travel.push(`${this.name} failed to deliver "${this.cargoForTransport[0].typeCargo}": exceeds capacity.`);
            } else {
                report_travel.push(`${this.name} delivered "${this.cargoForTransport[0].typeCargo}" to ${destination.name}.`);
            }
        }
        return report_travel;
    }
}

export class CargoShip extends Spacecraft {
    private static initialCargoCapacity = 80;
    private static initialDistancePerLiter = 22.5;
    private static initialSpeed = 100;
    private static initialFuel = 40;
    private static initialFuelMaxCapacity = 50;

    constructor(name: string) {
        super(name, CargoShip.initialCargoCapacity, CargoShip.initialDistancePerLiter, CargoShip.initialSpeed, CargoShip.initialFuel, CargoShip.initialFuelMaxCapacity)
    }
}

export class ExplorationShip extends Spacecraft {
    private static initialCargoCapacity = 20;
    private static initialDistancePerLiter = 30;
    private static initialSpeed = 300;
    private static initialFuel = 70;
    private static initialFuelMaxCapacity = 50;

    constructor(name: string) {
        super(name, ExplorationShip.initialCargoCapacity, ExplorationShip.initialDistancePerLiter, ExplorationShip.initialSpeed, ExplorationShip.initialFuel, ExplorationShip.initialFuelMaxCapacity);
    }
}

export class MiningShip extends Spacecraft {
    private static initialCargoCapacity = 40;
    private static initialDistancePerLiter = 26;
    private static initialSpeed = 75;
    private static initialFuel = 50;
    private static initialFuelMaxCapacity = 15;

    constructor(name: string) {
        super(name, MiningShip.initialCargoCapacity, MiningShip.initialDistancePerLiter, MiningShip.initialSpeed, MiningShip.initialFuel, MiningShip.initialFuelMaxCapacity);
    }
}