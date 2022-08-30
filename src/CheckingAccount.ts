export default class CheckingAccount {
    idAccount: number;
    nameAccount: string;
    balance: number;

    constructor (initialId: number, initialName: string, initialBalance?: number) {
        this.idAccount = initialId;
        this.nameAccount = initialName;
        this.balance = initialBalance ? initialBalance : 0;         
    }

    setName(newName: string) {
        this.nameAccount = newName;
    }

    deposite(deposite: number) {
        
    }




    
}