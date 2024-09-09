document.getElementById('emailForm').addEventListener('submit', function(e) {
    e.preventDefault();  // Prevent form submission for demo purposes

    // Allow form submission
    this.submit();
});