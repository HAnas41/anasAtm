import inquirer from "inquirer";
let myBalance = 10000; //dollar
let myPin = 2306;
let pinAnswer = await inquirer.prompt([{
        name: "pin",
        message: "enter your pin",
        type: "number"
    }]);
if (pinAnswer.pin === myPin) {
    console.log("Correct pin code!!!");
    let operationAns = await inquirer.prompt([{
            name: "operation",
            message: "Please select option",
            type: "list",
            choices: ["withdraw", "check balance", "fast cash"]
        }]);
    console.log(operationAns);
    if (operationAns.operation === "withdraw") {
        let amountAns = await inquirer.prompt([{
                name: "amount",
                message: "enter your amount",
                type: "number"
            }]);
        let withdrawalamount = amountAns.amount;
        myBalance -= withdrawalamount;
        if (withdrawalamount > myBalance) {
            console.log("insufficient balance.");
        }
    }
    else if (operationAns.operation === "check balance")
        console.log("your balance is:" + myBalance);
    else if (operationAns.operation === "fast cash") {
        let fastcashamounts = [1000, 2000, 3000, 40000, 50000];
        let fastcashchoice = await inquirer.prompt([{
                name: "fastcashamount",
                message: "select the fast cash amount:",
                type: "list",
                choices: fastcashamounts.map(amount => `$${amount}`)
            }]);
        let selectedamount = parseInt(fastcashchoice.fastcashamount.substring(1));
        if (selectedamount > myBalance) {
            console.log("insufficient balance.");
        }
        else {
            myBalance -= selectedamount;
            console.log(`Successfully withdrawn $${selectedamount}. Your remaining balance is: $${myBalance}`);
        }
    }
}
else {
    console.log("incorrect pin number");
}
