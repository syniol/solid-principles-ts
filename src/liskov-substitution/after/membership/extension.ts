export interface Extension {
    extendMembership(): Promise<void>
}

export class MembershipExtension implements Extension {
    public async extendMembership(): Promise<void> {
        // implementation to call an API async
    }
}
