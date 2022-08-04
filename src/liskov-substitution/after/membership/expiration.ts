import { Expiration } from './type'


export class MembershipExpiration implements Expiration {
    public isExpired(): boolean {
        return false
    }
}
