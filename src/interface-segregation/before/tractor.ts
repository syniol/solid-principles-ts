import { Controller } from './controller'

export class Tractor extends Controller {
    readonly #fuelLevel: number

    public constructor(fuelLevel: number) {
        super()

        this.#fuelLevel = fuelLevel
    }

    public fuelLevel(): number {
        return this.#fuelLevel
    }

    public flyDown() {
        throw new Error('Tractor can not fly')
    }

    public flyUp() {
        throw new Error('Tractor can not fly')
    }

    public batteryLevel(): number {
        throw new Error('Tractor is not battery powered')
    }
}
