"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GasPlanet = exports.RockyPlanet = exports.IcePlanet = exports.Planet = void 0;
class Planet {
    constructor(name, distanceFromEarth, viability) {
        this.name = name;
        this.distanceFromEarth = distanceFromEarth;
        this.viability = viability;
    }
}
exports.Planet = Planet;
class IcePlanet extends Planet {
    constructor(name, distanceFromEarth) {
        super(name, distanceFromEarth, IcePlanet.initialViability);
    }
}
exports.IcePlanet = IcePlanet;
IcePlanet.initialViability = 'moderate';
class RockyPlanet extends Planet {
    constructor(name, distanceFromEarth) {
        super(name, distanceFromEarth, RockyPlanet.initialViability);
    }
}
exports.RockyPlanet = RockyPlanet;
RockyPlanet.initialViability = 'high';
class GasPlanet extends Planet {
    constructor(name, distanceFromEarth) {
        super(name, distanceFromEarth, GasPlanet.intialViability);
    }
}
exports.GasPlanet = GasPlanet;
GasPlanet.intialViability = 'low';
