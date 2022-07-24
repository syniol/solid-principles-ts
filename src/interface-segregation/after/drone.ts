import {
    FlyController,
    ElectricPower,
} from './type'
import { Controller } from './controller'

export class Drone
    extends Controller
    implements FlyController, ElectricPower
{
    readonly #batteryLevel: number

    public constructor(batteryLevel: number) {
        super()

        this.#batteryLevel = batteryLevel
    }

    public batteryLevel(): number {
        return this.#batteryLevel
    }
}
