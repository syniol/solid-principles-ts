import { Controller } from './controller'
import { FossilFuelPower } from './type'

export class Tractor extends Controller implements FossilFuelPower {
    readonly #fuelLevel: number

    public constructor(fuelLevel: number) {
        super()

        this.#fuelLevel = fuelLevel
    }

    public fuelLevel(): number {
        return this.#fuelLevel
    }
}
