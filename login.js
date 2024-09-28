document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting normally

    // Retrieve form values
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Check credentials for both profiles
    if (username === 'mm2188@srmist.edu.in' && password === '12345') {
        // Redirect to Yahvi's dashboard
        window.location.href = 'madhav.html'; // Replace with your target page path
    } else if (username === 'ss0067@srmist.edu.in' && password === '12345') {
        // Redirect to Dhiraj's dashboard
        window.location.href = 'shashank.html'; // Replace with your target page path
    } else {
        // Display an error message for invalid credentials
        alert('Invalid username or password');
    }
});
