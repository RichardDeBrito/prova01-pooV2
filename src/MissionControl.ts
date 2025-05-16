import { Spacecraft } from "./Spacecraft";
import { Cargo } from "./Cargo";
import { Planet } from "./Planet";
import { random } from "./utils";

export class MissionControl {
    constructor(
        protected spacecraft: Spacecraft,
        protected cargoArray: Cargo[] = [],
        protected planetsArray: Planet[] = [],
        protected reportMission: string[] = []
    ){}

    public insertElements(spacecraft: Spacecraft, planets: Planet[], cargos: Cargo[]) {
        this.spacecraft = spacecraft;
        this.cargoArray = cargos;
        this.planetsArray = planets;
    }

    public executeMissions(): void {
        let drawn = random(this.cargoArray.length);        

        console.log(`Assigned spacecraft: ${this.spacecraft.name} | Fuel: ${this.spacecraft.fuel} | Capacity: ${this.spacecraft.cargo_capacity}`);

        console.log();

        for(let i = 0; i < 2; i++){
            let trip: string[] = [];
            const initialCargoCapacity = this.spacecraft.cargo_capacity; 
            while(this.spacecraft.cargoForTransport.length <= 0){
                this.spacecraft.pickUpCargo(this.cargoArray[random(drawn)]);
            }
            
            trip = this.spacecraft.travel(this.planetsArray[drawn]);
            this.reportMission = trip;
            this.report(this.spacecraft.name, this.planetsArray[drawn].name, this.spacecraft.fuel, this.spacecraft.cargo_capacity);
            this.planetsArray.splice(drawn, 1);
            this.cargoArray.splice(drawn, 1);
            this.spacecraft.cargoForTransport.pop()
            this.spacecraft.cargo_capacity = initialCargoCapacity;

            console.log();
        }
    }
 
    public report(spacecraftName: string, planetName:string, fuel: number, capacity: number): void {
        console.log(`Mission: ${spacecraftName} -> ${planetName}`);
        console.log(this.reportMission[0]);
        console.log(this.reportMission[1]);
        console.log(`Fuel remaining: ${fuel.toFixed(1)} | Capacity remaining: ${capacity}`);
    }
}