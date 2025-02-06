window.onload = function() {
    const investors = [
        { id: 1, username: 'investor1', balance: 5000 },
        { id: 2, username: 'investor2', balance: 3000 },
        { id: 3, username: 'investor3', balance: 1500 },
    ];

    const investorTable = document.getElementById('investor-table').getElementsByTagName('tbody')[0];
    
    investors.forEach(investor => {
        const row = investorTable.insertRow();
        row.innerHTML = `
            <td>${investor.id}</td>
            <td>${investor.username}</td>
            <td>$${investor.balance}</td>
            <td><button onclick="manageInvestor(${investor.id})">Manage</button></td>
        `;
    });
};

function manageInvestor(investorId) {
    alert(`Managing investor with ID: ${investorId}`);
    // Implement specific investor management logic here, such as viewing details or editing balances
}
window.onload = function() {
    // Simulated withdrawal data
    const withdrawals = [
        { id: 1, investorId: 1, amount: 500, status: 'pending' },
        { id: 2, investorId: 2, amount: 200, status: 'pending' },
    ];

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

function approveRequest(requestId) {
    alert(`Withdrawal request #${requestId} has been approved.`);
    // Implement actual withdrawal logic here, like updating the request status in a database
}

function rejectRequest(requestId) {
    alert(`Withdrawal request #${requestId} has been rejected.`);
    // Implement rejection logic here, like updating the request status in a database
}
