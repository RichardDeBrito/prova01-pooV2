"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.random = random;
exports.generateNamePlanets = generateNamePlanets;
exports.generateNameSpacecraft = generateNameSpacecraft;
exports.generateRandomPlanets = generateRandomPlanets;
exports.generateRandomFleet = generateRandomFleet;
exports.generateRandomCargos = generateRandomCargos;
exports.getRandomElement = getRandomElement;
const Planet_1 = require("./Planet");
const Cargo_1 = require("./Cargo");
const Spacecraft_1 = require("./Spacecraft");
const namePlanets = ['Elarion', 'Nythera', 'Zairon', 'Velquor', 'Aurelya', 'Thalmyra', 'Noctyra', 'Khaldor'];
const nameSpacecrafts = ['Stellarion', 'Nebula V', 'Galactrix', 'Orion Prime', 'Vanguard XI', 'Sentinela 7', 'Crucible', 'Argos Lanceiro'];
function random(n) {
    return Math.floor(Math.random() * n);
}
function generateNamePlanets() {
    return namePlanets[random(namePlanets.length)];
}
function generateNameSpacecraft() {
    return nameSpacecrafts[random(nameSpacecrafts.length)];
}
function generateRandomPlanets(quant_planets) {
    const PlanetsArray = [];
    const names = [];
    while (PlanetsArray.length < quant_planets) {
        let namePlanet = generateNamePlanets();
        if (!names.includes(namePlanet)) {
            names.push(namePlanet);
            let aleatory = random(3);
            if (aleatory === 0) {
                PlanetsArray.push(new Planet_1.IcePlanet(namePlanet, random(900)));
            }
            else if (aleatory === 1) {
                PlanetsArray.push(new Planet_1.RockyPlanet(namePlanet, random(900)));
            }
            else {
                PlanetsArray.push(new Planet_1.GasPlanet(namePlanet, random(900)));
            }
        }
    }
    return PlanetsArray;
}
function generateRandomFleet(quant_spacecrafts) {
    const SpacecraftsArray = [];
    const names = [];
    for (let i = 0; i < quant_spacecrafts; i++) {
        let nameSpacecraft = generateNameSpacecraft();
        while (nameSpacecraft in names) {
            nameSpacecraft = generateNameSpacecraft();
            if (nameSpacecraft in names === false) {
                break;
            }
        }
        let aleatory = random(3);
        if (aleatory === 0) {
            let a = new Spacecraft_1.CargoShip(nameSpacecraft);
            SpacecraftsArray.push(a);
        }
        else if (aleatory === 1) {
            let a = new Spacecraft_1.MiningShip(nameSpacecraft);
            SpacecraftsArray.push(a);
        }
        else if (aleatory === 2) {
            let a = new Spacecraft_1.ExplorationShip(nameSpacecraft);
            SpacecraftsArray.push(a);
        }
    }
    return SpacecraftsArray;
}
function generateRandomCargos(quant_cargos) {
    const CargosArray = [];
    for (let i = 0; i < quant_cargos; i++) {
        let aleatory = random(3);
        if (aleatory === 0) {
            let a = new Cargo_1.HeavyCargo();
            CargosArray.push(a);
        }
        else if (aleatory === 1) {
            let a = new Cargo_1.LightCargo();
            CargosArray.push(a);
        }
        else if (aleatory === 2) {
            let a = new Cargo_1.FragileCargo();
            CargosArray.push(a);
        }
    }
    return CargosArray;
}
function getRandomElement(Element) {
    return Element[random(Element.length)];
}
