
import { calculateSimpleInterest, calculateCompoundInterest } from './interestCalculator.js';
import readline from 'readline';
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const calculateAndPrintInterest = async () => {
    try {
        rl.question('Enter the principal amount: ', async (principal) => {
        rl.question('Enter the rate of interest: ', async (rate) => {
        rl.question('Enter the time in years: ', async (time) => {
                try {
                        principal = parseFloat(principal);
                        rate = parseFloat(rate);
                        time = parseFloat(time);
                        const simpleInterest = await calculateSimpleInterest(principal, rate, time);
                        console.log(`Simple Interest: ${simpleInterest}`); 
                        const compoundInterest = await calculateCompoundInterest(principal, rate, time);
                        console.log(`Compound Interest: ${compoundInterest}`);
                        rl.close();
                    } 
                catch (error) {
                        console.error(error.message);
                    }
                });
            });
        });
    } 
    catch (error) {
        console.error(error.message);
    }
};

calculateAndPrintInterest();
