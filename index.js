import inquirer from 'inquirer';
import chalAnimation from 'chalk-animation';
const sleep = (time = 2000) => new Promise((resovle, reject) => setTimeout(resovle, time));
async function welcome() {
    const rainbowTitle = chalAnimation.rainbow('ATM Project');
    await sleep();
    rainbowTitle.stop();
}
// welcome();
async function atm() {
    await welcome();
    const answers = await inquirer.prompt([
        {
            type: 'input',
            name: 'person_id',
            message: 'Eneter Your Id :'
        },
        {
            type: 'number',
            name: 'person_pin',
            message: 'Enter Your Pin :'
        },
        {
            type: 'list',
            name: 'cardType',
            choices: ['Current', 'Saving'],
            message: 'Select Your Card Type :'
        },
        {
            type: 'list',
            name: 'transaction',
            choices: ['Fast Cash', 'Withdraw'],
            message: 'Select Your Transaction',
            when(answers) {
                return answers.cardType;
            }
        },
        {
            type: 'list',
            name: 'amount',
            choices: [1000, 2000, 5000],
            message: 'Select Your Amount :',
            when(answers) {
                return answers.transaction === 'Fast Cash';
            }
        },
        {
            type: 'number',
            name: 'amount',
            message: 'Enter Your Amount',
            when(answers) {
                return answers.transaction === 'Withdraw';
            }
        }
    ]);
    if (answers.person_id && answers.person_pin) {
        const balance = Math.floor(Math.random() * 10000000);
        console.log("balance ====>", balance);
        const enterAmount = answers.amount;
        if (balance >= enterAmount) {
            const currentAmount = balance - enterAmount;
            console.log('Current Amount ==>', currentAmount);
        }
        else {
            console.log('Insufficient Balance');
        }
    }
}
atm();
