export interface FundRequest {
    [key: string]: any

    type: 'crypto' | 'flat_money'
    amount: number
}
