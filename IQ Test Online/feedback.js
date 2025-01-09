document.getElementById('feedback-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = event.target.name.value;
    const feedback = event.target.feedback.value;
    
    // Retrieve existing feedback from local storage
    let feedbackList = JSON.parse(localStorage.getItem('feedbackList')) || [];
    
    // Add new feedback to the list
    feedbackList.push({ name, feedback });
    
    // Store the updated feedback list in local storage
    localStorage.setItem('feedbackList', JSON.stringify(feedbackList));
    
    alert('Thank you for your feedback!');
    event.target.reset(); // Clear the form after submission
});