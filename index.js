import inquirer from 'inquirer';
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
    }
]);
console.log('Answers :', answers);
