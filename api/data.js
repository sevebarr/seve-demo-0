
function isTransactionDateInSameMonthAndBeforeTargetDate(trxDatStr, targetDateStr) {
    /* Utility function to test if a transaction is in the same month and before target date  */

    const transactionDate = new Date(trxDatStr);
    const targetDate = new Date(targetDateStr);

    const isSameYear = transactionDate.getFullYear() === targetDate.getFullYear();
    const isSameMonth = transactionDate.getMonth() === targetDate.getMonth();
    const isBeforeDate = transactionDate.getDate() < targetDate.getDate();

    return isSameYear && isSameMonth && isBeforeDate;
}


function analyzeTransactions(transactions, budget, currDate) {
    /* Takes in a budget and transactions and prints to console suggestions on how to continue spending on each category */
    let budgetStatus = budget.map(b => ({
        ...b,
        spent: 0,
        remaining: b.budget,
    }));


    transactions.forEach(transaction => {
        if (isTransactionDateInSameMonthAndBeforeTargetDate(transaction.date, currDate)) {
            let budgetItem = budgetStatus.find(b => b.category === transaction.category);

            if (budgetItem) {
                budgetItem.spent += transaction.amount;
                budgetItem.remaining = budgetItem.budget - budgetItem.spent;
            } else {
                console.log(`Transaction detected in category '${transaction.category}' which is not present in budget.`);
            }
        }
    });

    day = new Date(currDate).getDate()

    budgetStatus.forEach(b => {
        if (b.spent > b.budget) {
            console.log(`You have exceeded your '${b.category}' budget by ${Math.abs(b.remaining)}! I would suggest you refrain from spending in the category any further this month. If this is a fixed expense, please update your budget to reflect this.`);
        } else if ((b.spent / b.budget) > day / 31) {
            console.log(`It looks like you're spending at a rate which might have you going over your '${b.category}' budget. Consider spending less in this category for the remainder of the month`);
        } else {
            console.log(`Great job! Your currently on track with your '${b.category}' budget. You've spent ${b.spend} and have ${b.remaining}`);
        }
    });
}

let mockTransactions = [
    { category: 'groceries', amount: 150, date: '2023-06-01' },
    { category: 'groceries', amount: 350, date: '2023-06-15' },
    { category: 'groceries', amount: 150, date: '2023-07-01' },
    { category: 'groceries', amount: 150, date: '2023-07-11' },
    { category: 'groceries', amount: 150, date: '2023-07-12' },
    { category: 'rent', amount: 5000, date: '2023-07-02' },
    { category: 'entertainment', amount: 80, date: '2023-07-05' },
    { category: 'utilities', amount: 100, date: '2023-07-06' },
    { category: 'groceries', amount: 200, date: '2023-07-10' },
];

let mockBudget = [
    { category: 'groceries', budget: 500 },
    { category: 'rent', budget: 500 },
    { category: 'entertainment', budget: 200 },
    { category: 'utilities', budget: 150 },
];

analyzeTransactions(mockTransactions, mockBudget, '2023-06-30')
analyzeTransactions(mockTransactions, mockBudget, '2023-07-24')
