import inquirer from "inquirer";
async function blue() {
    const calculator = await inquirer.prompt([
        {
            type: "input",
            name: "num1",
            message: "Enter your First Number",
            validate: (value) => !isNaN(parseFloat(value)) || "Please Enter a Valid Number",
        },
        {
            type: "list",
            name: "operation",
            message: "Select an Operation",
            choices: ['+', '-', '*', '/'],
        },
        {
            type: "input",
            name: "num2",
            message: "Enter your Second Number",
            validate: (value) => !isNaN(parseFloat(value)) || "Please Enter a Valid Number",
        },
    ]);
    const num1 = parseFloat(calculator.num1);
    const num2 = parseFloat(calculator.num2);
    const operation = calculator.operation;
    let result;
    if (operation === '+') {
        result = num1 + num2;
    }
    else if (operation === '-') {
        result = num1 - num2;
    }
    else if (operation === '*') {
        result = num1 * num2;
    }
    else if (operation === '/') {
        result = num1 / num2;
    }
    else {
        console.log("Enter a valid operation");
        return;
    }
    console.log(result);
}
blue();
