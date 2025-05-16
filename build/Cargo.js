"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FragileCargo = exports.LightCargo = exports.HeavyCargo = exports.Cargo = void 0;
class Cargo {
    constructor(weightCargo, typeCargo) {
        this.weightCargo = weightCargo;
        this.typeCargo = typeCargo;
    }
}
exports.Cargo = Cargo;
class HeavyCargo extends Cargo {
    constructor() {
        super(HeavyCargo.initialWeight, HeavyCargo.initialTypeCargo);
    }
}
exports.HeavyCargo = HeavyCargo;
HeavyCargo.initialWeight = 27;
HeavyCargo.initialTypeCargo = 'equipment';
class LightCargo extends Cargo {
    constructor() {
        super(LightCargo.initialWeight, LightCargo.initialTypeCargo);
    }
}
exports.LightCargo = LightCargo;
LightCargo.initialWeight = 16;
LightCargo.initialTypeCargo = 'supplies';
class FragileCargo extends Cargo {
    constructor() {
        super(FragileCargo.initialWeight, FragileCargo.initialTypeCargo);
    }
}
exports.FragileCargo = FragileCargo;
FragileCargo.initialWeight = 20;
FragileCargo.initialTypeCargo = 'scientific capsules';
