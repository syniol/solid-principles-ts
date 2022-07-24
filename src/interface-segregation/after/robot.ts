import { Controller } from './controller'
import { ElectricPower } from './type'

export class Robot
    extends Controller
    implements ElectricPower
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
