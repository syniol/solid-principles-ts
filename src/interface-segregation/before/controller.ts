import Cylon from 'cylon';


export abstract class Controller {
    public constructor(protected readonly driver?: any) {
        if (!driver) {
            Cylon.robot({
                connections: {
                    arduino: {
                        adaptor: 'firmata',
                        port: '/dev/ttyACM0'
                    }
                },
                devices: {
                    led: { driver: 'led', pin: 13 }
                },
            }).start();
        }
    }

    public abstract batteryLevel(): number

    public abstract fuelLevel(): number

    public up(): void {
        this.driver.moveUp();
        console.log('moving up')
    }

    public down(): void {
        this.driver.moveDown();
        console.log('moving down')
    }

    public left(): void {
        this.driver.moveLeft();
        console.log('moving left')
    }

    public right(): void {
        this.driver.moveRight();
        console.log('moving right')
    }

    public flyUp(): void {
        this.driver.flyUp();
        console.log('flying up')
    }

    public flyDown(): void {
        this.driver.flyDown();
        console.log('flying down')
    }
}
