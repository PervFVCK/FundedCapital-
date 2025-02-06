document.getElementById('withdrawal-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const withdrawalAmount = parseFloat(document.getElementById('amount').value);
    const currentBalance = 5000;  // Simulate the current balance from earlier data

    const responseDiv = document.getElementById('withdrawal-response');

    // Check if the withdrawal amount is valid
    if (withdrawalAmount <= 0) {
        responseDiv.innerHTML = "<p style='color: red;'>Please enter a valid amount.</p>";
    } else if (withdrawalAmount > currentBalance) {
        responseDiv.innerHTML = "<p style='color: red;'>Insufficient funds. Please enter a smaller amount.</p>";
    } else {
        responseDiv.innerHTML = `<p style='color: green;'>Your withdrawal request for $${withdrawalAmount} has been submitted. We'll process it shortly.</p>`;
    }
});
