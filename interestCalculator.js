
const calculateSimpleInterest = (principal, rate, time) => {
    return new Promise((resolve, reject) => {
        if (principal <= 0 || rate <= 0 || time <= 0) {
            reject(new Error('Principal, rate, and time must be greater than zero.'));
        }
        const interest = (principal * rate * time) / 100;
        resolve(interest);
    });
};

const calculateCompoundInterest = (principal, rate, time) => {
    return new Promise((resolve, reject) => {
        if (principal <= 0 || rate <= 0 || time <= 0) {
            reject(new Error('Principal, rate, and time must be greater than zero.'));
        }
        const amount = principal * Math.pow((1 + rate / 100), time);
        const interest = amount - principal;
        resolve(interest);
    });
};

export { calculateSimpleInterest, calculateCompoundInterest };
