import { Spacecraft } from "./Spacecraft";
import { Cargo } from "./Cargo";
import { Planet } from "./Planet";
import { generateRandomPlanets, random } from "./utils";

export class MissionControl {
    constructor(
        protected spacecraft: Spacecraft[] = [],
        protected cargoArray: Cargo[] = [],
        protected planetsArray: Planet[] = [],
        protected reportMission: string[] = []
    ){}

    public insertElements(spacecraft: Spacecraft[], planets: Planet[], cargos: Cargo[]) {
        this.spacecraft = spacecraft;
        this.cargoArray = cargos;
        this.planetsArray = planets;
    }

    public executeMissions(): void {
        // Mostrar todas as espaçonaves antes de iniciar as missões
        for (let i = 0; i < this.spacecraft.length; i++) {
            console.log(`Assigned spacecraft: ${this.spacecraft[i].name} | Fuel: ${this.spacecraft[i].fuel.toFixed(1)} | Capacity: ${this.spacecraft[i].cargo_capacity}`);
        }
        console.log();

        let cargoIndex = 0;

        for (let i = 0; i < this.spacecraft.length; i++) {
            const spacecraft = this.spacecraft[i];

            for (let mission = 0; mission < 2; mission++) {
                if (cargoIndex >= this.cargoArray.length) {
                    console.log("Sem mais cargas para transportar.");
                    return;
                }

                const cargo = this.cargoArray[cargoIndex];
                const initialCargoCapacity = spacecraft.cargo_capacity;
                const planetIndex = random(this.planetsArray.length);
                const planet = this.planetsArray[planetIndex];

                spacecraft.pickUpCargo(cargo);

                const trip = spacecraft.travel(planet);
                this.reportMission = trip;

                this.report(spacecraft.name, planet.name, spacecraft.fuel, spacecraft.cargo_capacity);

                // Remove o planeta da lista após visita
                this.planetsArray.splice(planetIndex, 1);

                // Restaura capacidade de carga
                spacecraft.cargo_capacity = initialCargoCapacity;

                // Remove carga transportada
                spacecraft.cargoForTransport.pop();

                console.log();

                cargoIndex++; // Passa para a próxima carga
            }
        }
    }
 
    public report(spacecraftName: string, planetName:string, fuel: number, capacity: number): void {
        console.log(`Mission: ${spacecraftName} -> ${planetName}`);
        console.log(this.reportMission[0]);
        console.log(this.reportMission[1]);
        console.log(`Fuel remaining: ${fuel.toFixed(1)} | Capacity remaining: ${capacity}`);
    }
}