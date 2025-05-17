import { IcePlanet, RockyPlanet, GasPlanet, Planet } from "./Planet";
import { CargoShip, ExplorationShip, MiningShip } from "./Spacecraft";
import { HeavyCargo, LightCargo, FragileCargo } from "./Cargo";
import { generateRandomCargos, generateRandomPlanets, generateRandomFleet, getRandomElement, random} from "./utils";
import { MissionControl } from "./MissionControl";

const planets = generateRandomPlanets(4);
const cargos = generateRandomCargos(7);
const fleet = generateRandomFleet(3);

const control = new MissionControl(fleet, cargos, planets);
control.executeMissions();