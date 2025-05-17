import { IcePlanet, RockyPlanet, GasPlanet, Planet } from "./Planet";
import { HeavyCargo, LightCargo, FragileCargo, Cargo } from "./Cargo";
import { CargoShip, MiningShip, ExplorationShip, Spacecraft } from "./Spacecraft";

const namePlanets = ['Elarion', 'Nythera', 'Zairon', 'Velquor', 'Aurelya', 'Thalmyra', 'Noctyra', 'Khaldor'];


export function random(n:number) {
    return Math.floor(Math.random() * n);
}

export function generateNamePlanets() :string {
    return namePlanets[random(namePlanets.length)];
}

export function generateRandomPlanets(quant_planets: number): Planet[] {
    const PlanetsArray: Planet[] = [];
    const names: string[] = [];

    while (PlanetsArray.length < quant_planets) {
        let namePlanet = generateNamePlanets();

        if (!names.includes(namePlanet)) {
            names.push(namePlanet);
            let aleatory = random(3);

            if (aleatory === 0) {
                PlanetsArray.push(new IcePlanet(namePlanet, random(900)));
            } else if (aleatory === 1) {
                PlanetsArray.push(new RockyPlanet(namePlanet, random(900)));
            } else {
                PlanetsArray.push(new GasPlanet(namePlanet, random(900)));
            }
        }
    }

    return PlanetsArray;
}

export function generateRandomFleet(quant_spacecrafts: number) :Spacecraft[] {
    const SpacecraftsArray: Spacecraft[] = [];
    const names: String[] = [];

    let count_CargoShip = 1; 
    let count_MininigShip = 1; 
    let count_ExplorationShip = 1;

    for(let i = 0; i < quant_spacecrafts; i++) {

        let numSpacecraft = String(i+1);

            let aleatory = random(3);

        if (aleatory === 0) {
                let a = new CargoShip('CargoShip-'+count_CargoShip);
                SpacecraftsArray.push(a);
                count_CargoShip++;
            } else if (aleatory === 1) {
                let a = new MiningShip('MiningShip-'+count_MininigShip);
                SpacecraftsArray.push(a);
                count_MininigShip++;
            } else if (aleatory === 2) {
                let a = new ExplorationShip('ExplorationShip-'+count_ExplorationShip);
                count_ExplorationShip++;
                SpacecraftsArray.push(a);
            }
        }
            return SpacecraftsArray;  
    }
    

export function generateRandomCargos(quant_cargos: number) :Cargo[] {
    const CargosArray: Cargo[] = [];
    for(let i = 0; i < quant_cargos; i++) {
        let aleatory = random(3);

        if (aleatory === 0) {
            let a = new HeavyCargo();
            CargosArray.push(a);
        } else if (aleatory === 1) {
            let a = new LightCargo();
            CargosArray.push(a);
        } else if (aleatory === 2) {
            let a = new FragileCargo();
            CargosArray.push(a);
        }
    }

    return CargosArray;
}

export function getRandomElement(Element: Planet[] | Spacecraft[] | Cargo[]) :Planet | Cargo | Spacecraft {
    return Element[random(Element.length)];
}