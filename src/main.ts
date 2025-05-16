import { IcePlanet, RockyPlanet, GasPlanet, Planet } from "./Planet";
import { CargoShip, ExplorationShip, MiningShip } from "./Spacecraft";
import { HeavyCargo, LightCargo, FragileCargo } from "./Cargo";
import { generateRandomCargos, generateRandomPlanets, generateRandomFleet, getRandomElement, generateNameSpacecraft} from "./utils";
import { MissionControl } from "./MissionControl";

const planets = generateRandomPlanets(4);
const cargos = generateRandomCargos(3);
const ship = new CargoShip(generateNameSpacecraft());

const control = new MissionControl(ship, cargos, planets);
control.executeMissions();