import { Bitcoin } from './bitcoin'
import { CreditCard } from './creditcard'
import { FundRequest } from './type'

export class FundTransferService {
    public transfer(request: FundRequest): void {
        switch (request.type) {
            case Bitcoin.Name: {
                new Bitcoin().toWallet(request['walletId'], request.amount)
                break
            }

            case CreditCard.Name: {
                new CreditCard().transfer(request['account'], request.amount)
                break
            }

            default:
                throw new Error('account type is unrecognised')
        }
    }
}
