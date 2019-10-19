import jsTPS_transaction from './jsTPS_transaction.js';

/**
 * AddToNum_Transaction.java
 * 
 * This class is a transaction that can be executed and undone. It
 * can be stored in the jTPS transaction stack and must be constructed
 * with all the data necessary to perform both do and undo.
 */
class AddToNum_Transaction extends jsTPS_transaction {
    constructor(initNum, initAmountToAdd) {
        super()
        // THIS IS THE OBJECT IT WILL MANIPULATE
        this.num = initNum;
        this.amountToAdd = initAmountToAdd;
    }

    /**
     * This transaction simply adds the value to the num.
     */
    doTransaction() {
        let oldNum = this.num.getNum();
        let newNum = oldNum + this.amountToAdd;
        this.num.setNum(newNum);
    }

    /**
     * As the reverse of do, this method substracts from num.
     */
    undoTransaction() {
        this.num.setNum(this.num.getNum() - this.amountToAdd);
        //let oldNum = this.num
        //let newNum = oldNum - this.amountToAdd;
        //this.num = newNum;
    }

    /**
     * Provides a textual summary of this transaction.
     * 
     * @return A string storing a textual summary of this object.
     */
    toString() {
        return "Add " + this.amountToAdd;
    }
}
export default AddToNum_Transaction;