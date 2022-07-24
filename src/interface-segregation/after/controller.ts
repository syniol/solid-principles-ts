import { BasicController } from './type'

export abstract class Controller implements BasicController {
    public up(): void {
        console.log('moving up')
    }

    public down(): void {
        console.log('moving down')
    }

    public left(): void {
        console.log('moving left')
    }

    public right(): void {
        console.log('moving right')
    }
}
