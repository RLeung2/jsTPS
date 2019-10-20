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

let test_add = new jsTPS_Tester();
let test_add_form = document.getElementById("test_add");
test_add_form.innerHTML += "num is " + test_add.getNum() + "<br><br>";

test_add_form.innerHTML += "After add 5 transaction: <br>";
test_add.addToNumTransaction(5);
test_add_form.innerHTML += "num is " + test_add.getNum() + "<br>";
test_add_form.innerHTML += "size is " + test_add.getTPS().getSize() + "<br>";
test_add_form.innerHTML += "redo size is " + test_add.getTPS().getRedoSize() + "<br>";
test_add_form.innerHTML += "undo size is " + test_add.getTPS().getUndoSize() + "<br><br>";

test_add_form.innerHTML += "After add 10 transaction: <br>";
test_add.addToNumTransaction(10);
test_add_form.innerHTML += "num is " + test_add.getNum() + "<br>";
test_add_form.innerHTML += "size is " + test_add.getTPS().getSize() + "<br>";
test_add_form.innerHTML += "redo size is " + test_add.getTPS().getRedoSize() + "<br>";
test_add_form.innerHTML += "undo size is " + test_add.getTPS().getUndoSize() + "<br><br>";

test_add_form.innerHTML += "After add 20 transaction: <br>";
test_add.addToNumTransaction(20);
test_add_form.innerHTML += "num is " + test_add.getNum() + "<br>";
test_add_form.innerHTML += "size is " + test_add.getTPS().getSize() + "<br>";
test_add_form.innerHTML += "redo size is " + test_add.getTPS().getRedoSize() + "<br>";
test_add_form.innerHTML += "undo size is " + test_add.getTPS().getUndoSize() + "<br><br>";

let test_and_mask = new jsTPS_Tester();
let test_and_mask_form = document.getElementById("test_and_mask");
test_and_mask_form.innerHTML += "num is " + test_and_mask.getNum() + "<br><br>";

test_and_mask_form.innerHTML += "After add 12 and mask 4: <br>";
test_and_mask.addToNumTransaction(12);
test_and_mask.andMaskTransaction(test_and_mask.getNum(), 4);
test_and_mask_form.innerHTML += "num is " + test_and_mask.getNum() + "<br>";
test_and_mask_form.innerHTML += "size is " + test_and_mask.getTPS().getSize() + "<br><br>";

test_and_mask_form.innerHTML += "After undo: <br>";
test_and_mask.undoTransaction();
test_and_mask_form.innerHTML += "num is " + test_and_mask.getNum() + "<br>";
test_and_mask_form.innerHTML += "size is " + test_and_mask.getTPS().getSize() + "<br>";
test_and_mask_form.innerHTML += "redo size is " + test_and_mask.getTPS().getRedoSize() + "<br>";
test_and_mask_form.innerHTML += "undo size is " + test_and_mask.getTPS().getUndoSize() + "<br><br>";

let test_or_mask = new jsTPS_Tester();
let test_or_mask_form = document.getElementById("test_or_mask");
test_or_mask_form.innerHTML += "num is " + test_or_mask.getNum() + "<br><br>";

test_or_mask_form.innerHTML += "After add 10 or mask 4: <br>";
test_or_mask.addToNumTransaction(10);
test_or_mask.andMaskTransaction(test_or_mask.getNum(), 4);
test_or_mask_form.innerHTML += "num is " + test_or_mask.getNum() + "<br>";
test_or_mask_form.innerHTML += "size is " + test_or_mask.getTPS().getSize() + "<br><br>";

test_or_mask_form.innerHTML += "After undo: <br>";
test_or_mask.undoTransaction();
test_or_mask_form.innerHTML += "num is " + test_or_mask.getNum() + "<br>";
test_or_mask_form.innerHTML += "size is " + test_or_mask.getTPS().getSize() + "<br>";
test_or_mask_form.innerHTML += "redo size is " + test_or_mask.getTPS().getRedoSize() + "<br>";
test_or_mask_form.innerHTML += "undo size is " + test_or_mask.getTPS().getUndoSize() + "<br><br>";

let test_undo = new jsTPS_Tester();
let test_undo_form = document.getElementById("test_undo");
test_undo_form.innerHTML += "num is " + test_undo.getNum() + "<br>";
test_undo_form.innerHTML += "has transaction to undo: " + test_undo.getTPS().hasTransactionToUndo() + "<br>";
test_undo_form.innerHTML += "has transaction to redo: " + test_undo.getTPS().hasTransactionToRedo() + "<br><br>";

test_undo_form.innerHTML += "After add 3 transactions(5, 10, 20): <br>";
test_undo.addToNumTransaction(5);
test_undo.addToNumTransaction(10);
test_undo.addToNumTransaction(20);
test_undo_form.innerHTML += "has transaction to undo: " + test_undo.getTPS().hasTransactionToUndo() + "<br>";
test_undo_form.innerHTML += "has transaction to redo: " + test_undo.getTPS().hasTransactionToRedo() + "<br>";
test_undo_form.innerHTML += "num is " + test_undo.getNum() + "<br>";
test_undo_form.innerHTML += "size is " + test_undo.getTPS().getSize() + "<br>";
test_undo_form.innerHTML += "redo size is " + test_undo.getTPS().getRedoSize() + "<br>";
test_undo_form.innerHTML += "undo size is " + test_undo.getTPS().getUndoSize() + "<br><br>";

test_undo_form.innerHTML += "After undo: <br>";
test_undo.undoTransaction();
test_undo_form.innerHTML += "has transaction to undo: " + test_undo.getTPS().hasTransactionToUndo() + "<br>";
test_undo_form.innerHTML += "has transaction to redo: " + test_undo.getTPS().hasTransactionToRedo() + "<br>";
test_undo_form.innerHTML += "num is " + test_undo.getNum() + "<br>";
test_undo_form.innerHTML += "size is " + test_undo.getTPS().getSize() + "<br>";
test_undo_form.innerHTML += "redo size is " + test_undo.getTPS().getRedoSize() + "<br>";
test_undo_form.innerHTML += "undo size is " + test_undo.getTPS().getUndoSize() + "<br><br>";

test_undo_form.innerHTML += "After undo: <br>";
test_undo.undoTransaction();
test_undo_form.innerHTML += "has transaction to undo: " + test_undo.getTPS().hasTransactionToUndo() + "<br>";
test_undo_form.innerHTML += "has transaction to redo: " + test_undo.getTPS().hasTransactionToRedo() + "<br>";
test_undo_form.innerHTML += "num is " + test_undo.getNum() + "<br>";
test_undo_form.innerHTML += "size is " + test_undo.getTPS().getSize() + "<br>";
test_undo_form.innerHTML += "redo size is " + test_undo.getTPS().getRedoSize() + "<br>";
test_undo_form.innerHTML += "undo size is " + test_undo.getTPS().getUndoSize() + "<br><br>";

test_undo_form.innerHTML += "After undo: <br>";
test_undo.undoTransaction();
test_undo_form.innerHTML += "has transaction to undo: " + test_undo.getTPS().hasTransactionToUndo() + "<br>";
test_undo_form.innerHTML += "has transaction to redo: " + test_undo.getTPS().hasTransactionToRedo() + "<br>";
test_undo_form.innerHTML += "num is " + test_undo.getNum() + "<br>";
test_undo_form.innerHTML += "size is " + test_undo.getTPS().getSize() + "<br>";
test_undo_form.innerHTML += "redo size is " + test_undo.getTPS().getRedoSize() + "<br>";
test_undo_form.innerHTML += "undo size is " + test_undo.getTPS().getUndoSize() + "<br><br>";

test_undo_form.innerHTML += "After undo: <br>";
test_undo.undoTransaction();
test_undo_form.innerHTML += "has transaction to undo: " + test_undo.getTPS().hasTransactionToUndo() + "<br>";
test_undo_form.innerHTML += "has transaction to redo: " + test_undo.getTPS().hasTransactionToRedo() + "<br>";
test_undo_form.innerHTML += "num is " + test_undo.getNum() + "<br>";
test_undo_form.innerHTML += "size is " + test_undo.getTPS().getSize() + "<br>";
test_undo_form.innerHTML += "redo size is " + test_undo.getTPS().getRedoSize() + "<br>";
test_undo_form.innerHTML += "undo size is " + test_undo.getTPS().getUndoSize() + "<br><br>";

let test_redo = new jsTPS_Tester();
let test_redo_form = document.getElementById("test_redo");
test_redo_form.innerHTML += "num is " + test_redo.getNum() + "<br><br>";

test_redo_form.innerHTML += "After add 3 transactions(5, 10, 20): <br>";
test_redo.addToNumTransaction(5);
test_redo.addToNumTransaction(10);
test_redo.addToNumTransaction(20);
test_redo_form.innerHTML += "has transaction to undo: " + test_redo.getTPS().hasTransactionToUndo() + "<br>";
test_redo_form.innerHTML += "has transaction to redo: " + test_redo.getTPS().hasTransactionToRedo() + "<br>";
test_redo_form.innerHTML += "num is " + test_redo.getNum() + "<br>";
test_redo_form.innerHTML += "size is " + test_redo.getTPS().getSize() + "<br>";
test_redo_form.innerHTML += "redo size is " + test_redo.getTPS().getRedoSize() + "<br>";
test_redo_form.innerHTML += "undo size is " + test_redo.getTPS().getUndoSize() + "<br><br>";

test_redo_form.innerHTML += "After undo and redo: <br>";
test_redo.undoTransaction();
test_redo.redoTransaction();
test_redo_form.innerHTML += "has transaction to undo: " + test_redo.getTPS().hasTransactionToUndo() + "<br>";
test_redo_form.innerHTML += "has transaction to redo: " + test_redo.getTPS().hasTransactionToRedo() + "<br>";
test_redo_form.innerHTML += "num is " + test_redo.getNum() + "<br>";
test_redo_form.innerHTML += "size is " + test_redo.getTPS().getSize() + "<br>";
test_redo_form.innerHTML += "redo size is " + test_redo.getTPS().getRedoSize() + "<br>";
test_redo_form.innerHTML += "undo size is " + test_redo.getTPS().getUndoSize() + "<br><br>";

test_redo_form.innerHTML += "After 2 undo and 2 redo: <br>";
test_redo.undoTransaction();
test_redo.undoTransaction();
test_redo.redoTransaction();
test_redo.redoTransaction();
test_redo_form.innerHTML += "has transaction to undo: " + test_redo.getTPS().hasTransactionToUndo() + "<br>";
test_redo_form.innerHTML += "has transaction to redo: " + test_redo.getTPS().hasTransactionToRedo() + "<br>";
test_redo_form.innerHTML += "num is " + test_redo.getNum() + "<br>";
test_redo_form.innerHTML += "size is " + test_redo.getTPS().getSize() + "<br>";
test_redo_form.innerHTML += "redo size is " + test_redo.getTPS().getRedoSize() + "<br>";
test_redo_form.innerHTML += "undo size is " + test_redo.getTPS().getUndoSize() + "<br><br>";

test_redo_form.innerHTML += "After undo and redo all 3 transactions: <br>";
test_redo.undoTransaction();
test_redo.undoTransaction();
test_redo.undoTransaction();
test_redo.redoTransaction();
test_redo.redoTransaction();
test_redo.redoTransaction();
test_redo_form.innerHTML += "has transaction to undo: " + test_redo.getTPS().hasTransactionToUndo() + "<br>";
test_redo_form.innerHTML += "has transaction to redo: " + test_redo.getTPS().hasTransactionToRedo() + "<br>";
test_redo_form.innerHTML += "num is " + test_redo.getNum() + "<br>";
test_redo_form.innerHTML += "size is " + test_redo.getTPS().getSize() + "<br>";
test_redo_form.innerHTML += "redo size is " + test_redo.getTPS().getRedoSize() + "<br>";
test_redo_form.innerHTML += "undo size is " + test_redo.getTPS().getUndoSize() + "<br><br>";

test_redo_form.innerHTML += "After undo all 3 and redo 2 transactions: <br>";
test_redo.undoTransaction();
test_redo.undoTransaction();
test_redo.undoTransaction();
test_redo.redoTransaction();
test_redo.redoTransaction();
test_redo_form.innerHTML += "has transaction to undo: " + test_redo.getTPS().hasTransactionToUndo() + "<br>";
test_redo_form.innerHTML += "has transaction to redo: " + test_redo.getTPS().hasTransactionToRedo() + "<br>";
test_redo_form.innerHTML += "num is " + test_redo.getNum() + "<br>";
test_redo_form.innerHTML += "size is " + test_redo.getTPS().getSize() + "<br>";
test_redo_form.innerHTML += "redo size is " + test_redo.getTPS().getRedoSize() + "<br>";
test_redo_form.innerHTML += "undo size is " + test_redo.getTPS().getUndoSize() + "<br><br>";

test_redo_form.innerHTML += "After undo all 3 and redo 4 transactions: <br>";
test_redo.undoTransaction();
test_redo.undoTransaction();
test_redo.undoTransaction();
test_redo.redoTransaction();
test_redo.redoTransaction();
test_redo.redoTransaction();
test_redo.redoTransaction();
test_redo_form.innerHTML += "has transaction to undo: " + test_redo.getTPS().hasTransactionToUndo() + "<br>";
test_redo_form.innerHTML += "has transaction to redo: " + test_redo.getTPS().hasTransactionToRedo() + "<br>";
test_redo_form.innerHTML += "num is " + test_redo.getNum() + "<br>";
test_redo_form.innerHTML += "size is " + test_redo.getTPS().getSize() + "<br>";
test_redo_form.innerHTML += "redo size is " + test_redo.getTPS().getRedoSize() + "<br>";
test_redo_form.innerHTML += "undo size is " + test_redo.getTPS().getUndoSize() + "<br><br>";

let test_clear = new jsTPS_Tester();
let test_clear_form = document.getElementById("test_clear");
test_clear_form.innerHTML += "num is " + test_clear.getNum() + "<br><br>";

test_clear_form.innerHTML += "After add 3 transactions(5, 10, 20): <br>";
test_clear.addToNumTransaction(5);
test_clear.addToNumTransaction(10);
test_clear.addToNumTransaction(20);
test_clear_form.innerHTML += "has transaction to undo: " + test_clear.getTPS().hasTransactionToUndo() + "<br>";
test_clear_form.innerHTML += "has transaction to redo: " + test_clear.getTPS().hasTransactionToRedo() + "<br>";
test_clear_form.innerHTML += "num is " + test_clear.getNum() + "<br>";
test_clear_form.innerHTML += "size is " + test_clear.getTPS().getSize() + "<br>";
test_clear_form.innerHTML += "redo size is " + test_clear.getTPS().getRedoSize() + "<br>";
test_clear_form.innerHTML += "undo size is " + test_clear.getTPS().getUndoSize() + "<br><br>";

test_clear_form.innerHTML += "After clear all transactions: <br>";
test_clear.clearTranscations();
test_clear_form.innerHTML += "num is " + test_clear.getNum() + "<br>";
test_clear_form.innerHTML += "size is " + test_clear.getTPS().getSize() + "<br>";
test_clear_form.innerHTML += "redo size is " + test_clear.getTPS().getRedoSize() + "<br>";
test_clear_form.innerHTML += "undo size is " + test_clear.getTPS().getUndoSize() + "<br><br>";

test_clear_form.innerHTML += "After add 3 transactions(5, 10, 20): <br>";
test_clear.addToNumTransaction(5);
test_clear.addToNumTransaction(10);
test_clear.addToNumTransaction(20);
test_clear_form.innerHTML += "has transaction to undo: " + test_clear.getTPS().hasTransactionToUndo() + "<br>";
test_clear_form.innerHTML += "has transaction to redo: " + test_clear.getTPS().hasTransactionToRedo() + "<br>";
test_clear_form.innerHTML += "num is " + test_clear.getNum() + "<br>";
test_clear_form.innerHTML += "size is " + test_clear.getTPS().getSize() + "<br>";
test_clear_form.innerHTML += "redo size is " + test_clear.getTPS().getRedoSize() + "<br>";
test_clear_form.innerHTML += "undo size is " + test_clear.getTPS().getUndoSize() + "<br><br>";

test_clear_form.innerHTML += "After clear all transactions again: <br>";
test_clear.clearTranscations();
test_clear_form.innerHTML += "num is " + test_clear.getNum() + "<br>";
test_clear_form.innerHTML += "size is " + test_clear.getTPS().getSize() + "<br>";
test_clear_form.innerHTML += "redo size is " + test_clear.getTPS().getRedoSize() + "<br>";
test_clear_form.innerHTML += "undo size is " + test_clear.getTPS().getUndoSize() + "<br><br>";

test_clear_form.innerHTML += "After add 3 transactions(5, 10, 20): <br>";
test_clear.addToNumTransaction(5);
test_clear.addToNumTransaction(10);
test_clear.addToNumTransaction(20);
test_clear_form.innerHTML += "has transaction to undo: " + test_clear.getTPS().hasTransactionToUndo() + "<br>";
test_clear_form.innerHTML += "has transaction to redo: " + test_clear.getTPS().hasTransactionToRedo() + "<br>";
test_clear_form.innerHTML += "num is " + test_clear.getNum() + "<br>";
test_clear_form.innerHTML += "size is " + test_clear.getTPS().getSize() + "<br>";
test_clear_form.innerHTML += "redo size is " + test_clear.getTPS().getRedoSize() + "<br>";
test_clear_form.innerHTML += "undo size is " + test_clear.getTPS().getUndoSize() + "<br><br>";