export type typeCargo = 'equipment' | 'supplies' | 'scientific capsules'

export abstract class Cargo {
    constructor(
        public weightCargo: number,
        public typeCargo: typeCargo
    ){}
}

export class HeavyCargo extends Cargo {
    private static initialWeight = 40;
    private static initialTypeCargo: typeCargo = 'equipment';

    constructor(){
        super(HeavyCargo.initialWeight, HeavyCargo.initialTypeCargo);
    }
}

export class LightCargo extends Cargo {
    private static initialWeight = 16;
    private static initialTypeCargo: typeCargo = 'supplies';

    constructor(){
        super(LightCargo.initialWeight, LightCargo.initialTypeCargo);
    }
}

export class FragileCargo extends Cargo {
    private static initialWeight = 20;
    private static initialTypeCargo: typeCargo = 'scientific capsules';

    constructor(){
        super(FragileCargo.initialWeight, FragileCargo.initialTypeCargo);
    }
}