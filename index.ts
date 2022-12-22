import inquirer from 'inquirer';


interface UserType {
    person_id: string,
    person_pin: number,
}

const answers: UserType = await inquirer.prompt([
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
            return answers.cardType
        }
    },
    {
        type: 'list',
        name: 'paymentMethod',
        choices: [1000, 2000, 5000],
        message: 'Select Your Amount :',
        when(answers) {
            return answers.transaction === 'Fast Cash'
        }
    },
    {
        type: 'number',
        name: 'amount',
        message: 'Enter Your Amount',
        when(answers) {
            return answers.transaction === 'Withdraw'
        }

    }
])

console.log('Answers :', answers);