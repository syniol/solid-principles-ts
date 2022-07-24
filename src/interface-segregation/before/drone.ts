import { Controller } from './controller'

export class Drone extends Controller {
    readonly #batteryLevel: number

    public constructor(batteryLevel: number) {
        super()

        this.#batteryLevel = batteryLevel
    }

    public batteryLevel(): number {
        return this.#batteryLevel
    }

    public fuelLevel(): number {
        throw new Error('Drone is not Fossil Fuel powered')
    }
}
