const taxRates = {
    lowerLimit: 24000,
    upperLimit: 32000,
    rate: 0.1,
};

const nhifDeduction = 500;
const nssfDeductionPercentage = 0.06;

function calculatePayee(basicSalary) {
    if (basicSalary <= taxRates.lowerLimit) {
        return 0;
    } else if (basicSalary <= taxRates.upperLimit) {
        return (basicSalary - taxRates.lowerLimit) * taxRates.rate;
    } else {
        const taxableAmount = taxRates.upperLimit - taxRates.lowerLimit;
        return (taxableAmount * taxRates.rate) + calculatePayee(basicSalary - taxRates.upperLimit);
    }
}

function calculateNetSalary(basicSalary, benefits) {
    const grossSalary = basicSalary + benefits;
    const payee = calculatePayee(grossSalary);
    const nssfDeduction = grossSalary * nssfDeductionPercentage;
    const netSalary = grossSalary - payee - nhifDeduction - nssfDeduction;

    return {
        grossSalary,
        payee,
        nhifDeduction,
        nssfDeduction,
        netSalary,
    };
}

const basicSalary = parseFloat(prompt('Enter the basic salary:'));
const benefits = parseFloat(prompt('Enter the benefits:'));

if (!isNaN(basicSalary) && !isNaN(benefits)) {
    const result = calculateNetSalary(basicSalary, benefits);
    console.log('Gross Salary: ' + result.grossSalary.toFixed(2));
    console.log('Payee (Tax): ' + result.payee.toFixed(2));
    console.log('NHIF Deduction: ' + nhifDeduction.toFixed(2));
    console.log('NSSF Deduction: ' + result.nssfDeduction.toFixed(2));
    console.log('Net Salary: ' + result.netSalary.toFixed(2));
} else {
    console.log('Invalid input. Please enter valid numbers for basic salary and benefits.');
}
