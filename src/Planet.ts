import { readConfigFile } from "typescript";

type viability = 'high' | 'moderate' | 'low' | 'impossible';

export abstract class Planet {
    constructor(
        public readonly name: string,
        public distanceFromEarth: number,
        public viability: viability
    ){}
}

export class IcePlanet extends Planet {
    private static initialViability: viability = 'moderate';

    constructor(name: string, distanceFromEarth: number) {
        super(name, distanceFromEarth, IcePlanet.initialViability);
    }
}

export class RockyPlanet extends Planet {
    private static initialViability: viability = 'high';

    constructor(name: string, distanceFromEarth: number) {
        super(name, distanceFromEarth, RockyPlanet.initialViability);
    }
}

export class GasPlanet extends Planet {
    private static intialViability: viability = 'low';

    constructor(name: string, distanceFromEarth: number) {
        super(name, distanceFromEarth, GasPlanet.intialViability);
    }
}