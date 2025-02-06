window.onload = function() {
    // Simulated trading performance data
    const performanceData = {
        balance: 5000,  // Investor's total balance
        dailyProfit: 150, // Today's profit
        percentChange: 3,  // Today's percent change in performance
    };

    // Display the simulated data in the HTML
    const performanceDiv = document.getElementById('performance-data');
    
    performanceDiv.innerHTML = `
        <p><strong>Total Balance:</strong> $${performanceData.balance}</p>
        <p><strong>Today's Profit:</strong> $${performanceData.dailyProfit}</p>
        <p><strong>Percent Change:</strong> ${performanceData.percentChange}%</p>
    `;
};
