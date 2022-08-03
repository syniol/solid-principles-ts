export class CreditCard {
    public static readonly Name = 'flat_money'

    public transfer<T>(accountInfo: T, amount: number) {
        console.log(accountInfo)
        console.log(amount)
        // implementation
    }
}
