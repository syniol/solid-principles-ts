import { SatelliteUnit } from './unit'

export class SatelliteLocation extends SatelliteUnit {
    public constructor() {
        super()
    }

    public get longitude(): string {
        return '-0.127758';
    }

    public get latitude(): string {
        return '51.507351';
    }
}
