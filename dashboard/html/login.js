document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting normally

    // Retrieve form values
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Check credentials
    if (username === 'ys7205@srmist.edu.in' && password === '12345') {
        // Redirect to dashboard.html
        window.location.href = 'index.html'; // Replace with your target page path
    } else {
        // Optionally, you can display an error message
        alert('Invalid username or password');
    }
});
