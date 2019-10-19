import jsTPS_transaction from '../src/jsTPS.js';
import jsTPS from '../src/jsTPS.js';
import Num from 'Num.js'

class jsTPS_Tester {
    constructor() {
        this.tps = new jsTPS();
        this.num = new Num();
        this.input = new Scanner(System.in);
        this.out = System.out;
    }

    /**
     * This runs our demo program. Note that it presents a 
     * menu, retrieves the input, and executes the selected
     * behavior.
     * 
     * @param args Not used in this demo.
     */
    runTests() {
        // LOOP FLAG VARIABLE
        let keepGoing = true;
        while (keepGoing) {
            // DISPLAY THE CURRENT TPS
            document.getElementById("demo").innerHTML += "<br>CURRENT jTPS: ";
            document.getElementById("demo").innerHTML += tps;
            document.getElementById("demo").innerHTML += "<br>";
            
            // DISPLAY NUM
            document.getElementById("demo").innerHTML += "<br>num is " + this.num.getNum();
            document.getElementById("demo").innerHTML += "<br>";
            
            // DISPLAY THE MENU
            document.getElementById("demo").innerHTML += "<br>ENTER A SELECTION";
            document.getElementById("demo").innerHTML += "<br>1) Add a Transaction";
            document.getElementById("demo").innerHTML += "<br>2) Undo a Transaction";
            document.getElementById("demo").innerHTML += "<br>3) Redo a Transaction";
            document.getElementById("demo").innerHTML += "<br>4) Clear All Transactions";
            document.getElementById("demo").innerHTML += "<br>5) Reset Num and Transactions";
            document.getElementById("demo").innerHTML += "<br>-";

            // GET THE USER SELECTION
            let entry = input.nextLine();
            
            // ADD AND EXECUTE A TRANSACTION
            if (entry.startsWith("1")) {
                document.getElementById("demo").innerHTML += "<br>Enter an amount to add: ";
                entry = input.nextLine();
                let amountToAdd = Integer.parseInt(entry);
                let transaction = new AddToNum_Transaction(this.num, amountToAdd);
                this.tps.addTransaction(transaction);
            }            
            // UNDO A TRANSACTION
            else if (entry.startsWith("2")) {
                this.tps.undoTransaction();
            }
            // REDO A TRANSACTION
            else if (entry.startsWith("3")) {
                this.tps.doTransaction();
            }
            // CLEAR ALL TRANSACTIONS
            else if (entry.startsWith("4")) {
                this.tps.clearAllTransactions();
            }
            // CLEAR ALL TRANSACTIONS AND RESET NUM TO 0
            else if (entry.startsWith("5")) {
                this.tps.clearAllTransactions();
                this.num.setNum(0);
            }
            // QUIT
            else if (entry.startsWith("Q")) {
                keepGoing = false;
            }
        }
        document.getElementById("demo").innerHTML += "<br>GOODBYE";
    }
}
export default jsTPS_Tester;