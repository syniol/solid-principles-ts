import { Controller } from './controller'

export class Robot extends Controller {
    public batteryLevel(): number {
        return 0
    }

    public fuelLevel(): number {
        throw new Error('There is no fuel for Robot')
    }

    public override flyUp(): void {
      throw new Error('Robot can not fly')
    }

    public override flyDown() {
      throw new Error('Robot can not fly')
    }
}
