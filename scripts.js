// Example script for handling withdrawal requests and admin actions

document.querySelectorAll('.withdraw button').forEach(button => {
    button.addEventListener('click', function() {
        const amount = document.getElementById('withdrawal-amount').value;
        if(amount && parseFloat(amount) > 0) {
            alert(`Withdrawal request for $${amount} has been submitted.`);
        } else {
            alert("Please enter a valid amount.");
        }
    });
});

document.querySelectorAll('.approve-btn').forEach(button => {
    button.addEventListener('click', function() {
        alert("Withdrawal approved!");
    });
});

document.querySelectorAll('.deny-btn').forEach(button => {
    button.addEventListener('click', function() {
        alert("Withdrawal denied.");
    });
});

document.querySelectorAll('.suspend-btn').forEach(button => {
    button.addEventListener('click', function() {
        alert("Account suspended.");
    });
});
