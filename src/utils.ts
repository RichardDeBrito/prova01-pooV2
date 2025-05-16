import { IcePlanet, RockyPlanet, GasPlanet, Planet } from "./Planet";
import { HeavyCargo, LightCargo, FragileCargo, Cargo } from "./Cargo";
import { CargoShip, MiningShip, ExplorationShip, Spacecraft } from "./Spacecraft";

const namePlanets = ['Elarion', 'Nythera', 'Zairon', 'Velquor', 'Aurelya', 'Thalmyra', 'Noctyra', 'Khaldor'];

const nameSpacecrafts = ['Stellarion', 'Nebula V', 'Galactrix', 'Orion Prime', 'Vanguard XI', 'Sentinela 7', 'Crucible', 'Argos Lanceiro'];

export function random(n:number) {
    return Math.floor(Math.random() * n);
}

export function generateNamePlanets() :string {
    return namePlanets[random(namePlanets.length)];
}

export function generateNameSpacecraft() :string {
    return nameSpacecrafts[random(nameSpacecrafts.length)];
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
    for(let i = 0; i < quant_spacecrafts; i++) { 
        let nameSpacecraft = generateNameSpacecraft();
        while (nameSpacecraft in names) {
            nameSpacecraft = generateNameSpacecraft();
            
            if (nameSpacecraft in names === false) {
                break;
            }
        }

        let aleatory = random(3);

        if (aleatory === 0) {
            let a = new CargoShip(nameSpacecraft);
            SpacecraftsArray.push(a);
        } else if (aleatory === 1) {
            let a = new MiningShip(nameSpacecraft);
            SpacecraftsArray.push(a);
        } else if (aleatory === 2) {
            let a = new ExplorationShip(nameSpacecraft);
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