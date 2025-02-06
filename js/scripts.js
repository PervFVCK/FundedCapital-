window.onload = function() {
    // Simulated data for investors
    const investors = [
        { id: 1, username: 'investor1', balance: 5000 },
        { id: 2, username: 'investor2', balance: 3000 },
        { id: 3, username: 'investor3', balance: 1500 },
    ];

    // Get the table body element where we'll insert the rows
    const investorTableBody = document.getElementById('investor-table').getElementsByTagName('tbody')[0];
    
    // Loop through the investors and populate the table
    investors.forEach(investor => {
        const row = investorTableBody.insertRow();
        row.innerHTML = `
            <td>${investor.id}</td>
            <td>${investor.username}</td>
            <td>$${investor.balance}</td>
            <td><button onclick="manageInvestor(${investor.id})">Manage</button></td>
        `;
    });

    // Simulated withdrawal data
    const withdrawals = [
        { id: 1, investorId: 1, amount: 500, status: 'pending' },
        { id: 2, investorId: 2, amount: 200, status: 'pending' },
    ];

    // Display withdrawal requests
    const withdrawalList = document.getElementById('withdrawal-list');
    
    withdrawals.forEach(request => {
        const li = document.createElement('li');
        li.innerHTML = `
            <p>Investor ID: ${request.investorId} | Amount: $${request.amount} | Status: ${request.status}</p>
            <button onclick="approveRequest(${request.id})">Approve</button>
            <button onclick="rejectRequest(${request.id})">Reject</button>
        `;
        withdrawalList.appendChild(li);
    });
};

// Function to manage an investor
function manageInvestor(investorId) {
    alert(`Managing investor with ID: ${investorId}`);
    // Implement further investor management logic here
}

// Function to approve a withdrawal request
function approveRequest(requestId) {
    alert(`Withdrawal request #${requestId} has been approved.`);
    // Implement logic to approve the request in a real-world scenario
}

// Function to reject a withdrawal request
function rejectRequest(requestId) {
    alert(`Withdrawal request #${requestId} has been rejected.`);
    // Implement logic to reject the request in a real-world scenario
}
