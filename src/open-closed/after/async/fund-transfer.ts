import { FundRequest } from './type'
import { Bitcoin } from './bitcoin'
import { CreditCard } from './creditcard'


export interface FundTransfer {
    standardTransfer(request: FundRequest): void
}

export class FundTransferService {
    public async transfer(request: FundRequest): Promise<void> {
        await Promise.all([
            new Bitcoin().standardTransfer(request),
            new CreditCard().standardTransfer(request),
        ]);
    }
}
