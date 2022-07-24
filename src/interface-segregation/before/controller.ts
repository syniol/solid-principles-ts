export abstract class Controller {
    public abstract batteryLevel(): number

    public abstract fuelLevel(): number

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

    public flyUp(): void {
        console.log('flying up')
    }

    public flyDown(): void {
        console.log('flying down')
    }
}
