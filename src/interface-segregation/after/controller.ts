import Cylon from 'cylon'

import { BasicController } from './type'


export abstract class Controller implements BasicController {
    protected constructor(protected readonly driver?: any) {
        if (!driver) {
            Cylon.robot({
                connections: {
                    arduino: { adaptor: 'firmata', port: '/dev/ttyACM0' }
                },
                devices: {
                    led: { driver: 'led', pin: 13 }
                },
            }).start();
        }
    }

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
