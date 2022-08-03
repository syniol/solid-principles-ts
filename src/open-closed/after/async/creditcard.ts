import { FundTransfer } from './fund-transfer'
import { FundRequest } from './type'

export class CreditCard implements FundTransfer {
    public static readonly Name = 'flat_money';

    /**
     * @deprecated please use standardTransfer(request: FundRequest) API method
     */
    public transfer<T>(accountInfo: T, amount: number) {
        console.log(accountInfo)
        console.log(amount)
        // implementation
    }

    public async standardTransfer(request: FundRequest): Promise<void> {
        if (request.type !== CreditCard.Name) {
            return
        }

        this.transfer(request['account'], request.amount)
    }
}
