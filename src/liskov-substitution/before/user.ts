export class UserPackage {
    public packageDetails<T>(): T {
        return {} as T
    }

    public packageLevel(): number {
        // implementation
        return 0;
    }

    public async extendMembership(): Promise<void> {
        // implementation to call an API async
    }

    public isExpired(): boolean {
        return false
    }
}
