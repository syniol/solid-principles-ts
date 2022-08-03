import {
    Expiration,
    Extension,
    MembershipExpiration,
    MembershipExtension,
} from './membership'


export class UserPackage implements Expiration, Extension {
    public constructor(
        private readonly membershipExpiration: Expiration,
        private readonly membershipExtension: Extension,
    ) {}

    public static create(): UserPackage {
        return new UserPackage(
            new MembershipExpiration(),
            new MembershipExtension(),
        )
    }

    public packageDetails<T>(): T {
        return {} as T
    }

    public packageLevel(): number {
        // implementation
        return 0
    }

    public isExpired(): boolean {
        return this.membershipExpiration.isExpired()
    }

    public async extendMembership(): Promise<void> {
        return this.membershipExtension.extendMembership()
    }
}
