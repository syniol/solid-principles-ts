import { FundTransfer } from './fund-transfer'
import { FundRequest } from './type'

export class Bitcoin implements FundTransfer {
    public static readonly Name = 'crypto'

    /**
     * @deprecated please use standardTransfer(request: FundRequest) API method
     */
    public toWallet(walletId: string, amount: number) {
        console.log(walletId)
        console.log(amount)
        // implementation
    }

    public async standardTransfer(request: FundRequest): Promise<void> {
        if (request.type !== Bitcoin.Name) {
            return
        }

        new Bitcoin().toWallet(request['walletId'], request.amount)
    }
}
