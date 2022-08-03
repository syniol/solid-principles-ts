import { SatelliteUnit } from './unit'

export class SatelliteFuel {
    public constructor(public readonly satellite: SatelliteUnit) {}

    public get level(): number {
        // implementation
        return 0;
    }
}
