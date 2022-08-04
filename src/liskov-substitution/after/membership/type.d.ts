export declare interface Expiration {
    isExpired(): boolean
}

export interface Extension {
    extendMembership(): Promise<void>
}
