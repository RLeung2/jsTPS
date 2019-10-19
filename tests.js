import jsTPS_Tester from './test/jsTPS_Tester.js';
import AddToNum_Transaction from './test/AddToNum_Transaction.js';

let jsTPS_test = new jsTPS_Tester();
let current_jstps = document.getElementById("current_jstps");
let num = document.getElementById("num");

current_jstps.innerHTML += jsTPS_test.getTPS();
num.innerHTML += jsTPS_test.getNum();

function addToNumTransaction() {
    let amountValue = document.getElementById("amount_input");
    jsTPS_test.addToNumTransaction(parseInt(amountValue.value));

    current_jstps.innerHTML = "CURRENT JSTPS: " + jsTPS_test.getTPS();
    num.innerHTML = "num is: " + jsTPS_test.getNum();
}

function undoTransaction() {
    jsTPS_test.undoTransaction();

    current_jstps.innerHTML = "CURRENT JSTPS: " + jsTPS_test.getTPS();
    num.innerHTML = "num is: " + jsTPS_test.getNum();
}

function redoTransaction() {
    jsTPS_test.redoTransaction();

    current_jstps.innerHTML = "CURRENT JSTPS: " + jsTPS_test.getTPS();
    num.innerHTML = "num is: " + jsTPS_test.getNum();
}

function clearTransactions() {
    jsTPS_test.clearTranscations();

    current_jstps.innerHTML = "CURRENT JSTPS: " + jsTPS_test.getTPS();
    num.innerHTML = "num is: " + jsTPS_test.getNum();
}

function reset() {
    jsTPS_test.reset();

    current_jstps.innerHTML = "CURRENT JSTPS: " + jsTPS_test.getTPS();
    num.innerHTML = "num is: " + jsTPS_test.getNum();
}

document.getElementById("addTransactionButton").onclick=addToNumTransaction;
document.getElementById("undoTransactionButton").onclick=undoTransaction;
document.getElementById("redoTransactionButton").onclick=redoTransaction;
document.getElementById("clearTransactionsButton").onclick=clearTransactions;
document.getElementById("resetButton").onclick=reset;
