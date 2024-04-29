#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from 'chalk';
console.log(chalk.bgYellow.black('\n\t\tCLI Based Currency Converter'));
const exchange_rate = {
    'USD': 1, // base currency
    'AFN': 72,
    'AUD': 1.52,
    'BHD': 0.38,
    'BDT': 109.03,
    'CNY': 7.24,
    "IRR": 42075,
    "MYR": 4.77,
    "NZD": 1.67,
    "EUR": 0.9,
    'GBP': 0.7,
    'PKR': 278.72
};
let user_answer = await inquirer.prompt([
    {
        name: 'from_currency',
        type: 'list',
        message: (chalk.red('Please Enter Currency Do You Have')),
        choices: ['USD', 'EUR', 'GBP', 'PKR']
    },
    {
        name: 'to_currency',
        type: 'list',
        message: (chalk.green('Please Enter Currency To Convert')),
        choices: ['USD', 'EUR', 'GBP', 'PKR']
    },
    {
        name: 'amount',
        type: 'number',
        message: (chalk.blue('Enter Amount'))
    }
]);
let from_currency = exchange_rate[user_answer.from_currency];
let to_currency = exchange_rate[user_answer.to_currency];
let amount = user_answer.amount;
let base_currency = amount / from_currency;
let converted_amount = base_currency * to_currency;
console.log("your converted amount is", converted_amount);
