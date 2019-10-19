import jsTPS_transaction from './src/jsTPS.js'

/**
 * AddToNum_Transaction.java
 * 
 * This class is a transaction that can be executed and undone. It
 * can be stored in the jTPS transaction stack and must be constructed
 * with all the data necessary to perform both do and undo.
 */
class AddToNum_Transaction extends jsTPS_Transaction {
    constructor(initNum, initAmountToAdd) {
        // THIS IS THE OBJECT IT WILL MANIPULATE
        this.num = initNum;
        this.amountToAdd = initAmountToAdd;
    }

    /**
     * This transaction simply adds the value to the num.
     */
    doTransaction() {
        let oldNum = num.getNum();
        let newNum = oldNum + amountToAdd;
        this.num = newNum;
    }

    /**
     * As the reverse of do, this method substracts from num.
     */
    undoTransaction() {
        let oldNum = num.getNum();
        let newNum = oldNum - amountToAdd;
        this.num = newNum;
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