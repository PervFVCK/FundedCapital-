document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Hardcoded credentials (for demo purposes)
    const credentials = {
        investor: { username: 'investor', password: 'investor123' },
        admin: { username: 'admin', password: 'admin123' }
    };

    // Check login credentials
    if (username === credentials.investor.username && password === credentials.investor.password) {
        window.location.href = "investor/dashboard.html"; // Redirect to Investor Dashboard
    } else if (username === credentials.admin.username && password === credentials.admin.password) {
        window.location.href = "admin/dashboard.html"; // Redirect to Admin Dashboard
    } else {
        alert('Invalid username or password. Please try again.');
    }
});
