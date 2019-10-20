import jsTPS_transaction from './jsTPS_transaction.js';
import AddToNum_Transaction from './AddToNum_Transaction.js';
import AndMask_Transaction from './AndMask_Transaction.js';
import OrMask_Transaction from './OrMask_Transaction.js';
import jsTPS from './jsTPS.js';
import Num from './Num.js'

class jsTPS_Tester {
    constructor() {
        this.tps = new jsTPS();
        this.num = new Num();
    }

    addToNumTransaction(amount) {
        let transaction = new AddToNum_Transaction(this.num, amount);
        this.tps.addTransaction(transaction);
    }

    andMaskTransaction(intNum, maskNum) {
        let transaction = new AndMask_Transaction(this.num, intNum, maskNum)
        this.tps.addTransaction(transaction);
    }

    orMaskTransaction(intNum, maskNum) {
        let transaction = new OrMask_Transaction(this.num, intNum, maskNum)
        this.tps.addTransaction(transaction);
    }

    undoTransaction() {
        this.tps.undoTransaction();
    }

    redoTransaction() {
        this.tps.doTransaction();
    }

    clearTranscations() {
        this.tps.clearAllTransactions();
    }

    reset() {
        this.tps.clearAllTransactions();
        this.num.setNum(0);
    }

    getTPS() {
        return this.tps;
    }

    getNum() {
        return this.num.getNum();
    }
}
export default jsTPS_Tester;