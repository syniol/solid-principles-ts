import { FundRequest } from './type'
import { Bitcoin } from './bitcoin'
import { CreditCard } from './creditcard'

export interface FundTransfer {
    standardTransfer(request: FundRequest): void
}

export class FundTransferService {
    public transfer(request: FundRequest): void {
        [
            Bitcoin,
            CreditCard,
        ].forEach((paymentTransferService =>
            new paymentTransferService().standardTransfer(request)
        ))
    }
}