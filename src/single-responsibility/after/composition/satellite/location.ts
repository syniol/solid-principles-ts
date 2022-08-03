import { SatelliteUnit } from './unit'

export class SatelliteLocation {
    public constructor(public readonly satellite: SatelliteUnit) {}

    public get longitude(): string {
        return '-0.127758';
    }

    public get latitude(): string {
        return '51.507351';
    }
}
