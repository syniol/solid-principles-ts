export interface Expiration {
    isExpired(): boolean
}

export class MembershipExpiration implements Expiration {
    public isExpired(): boolean {
        return false
    }
}
