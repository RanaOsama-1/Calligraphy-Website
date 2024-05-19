const reviewForm = document.getElementById('reviewForm');
const reviewsContainer = document.getElementById('reviews');

// Load reviews from local storage
document.addEventListener('DOMContentLoaded', () => {
  const reviews = JSON.parse(localStorage.getItem('reviews')) || [];
  reviews.forEach(review => addReviewToDOM(review));
});
function addReviewToDOM(review) {
  const reviewDiv = document.createElement('div');
  reviewDiv.classList.add('review');
  reviewDiv.innerHTML = `
    <p><strong>${review.username}</strong></p>
    <p>${review.text}</p>
  `;
  reviewsContainer.appendChild(reviewDiv);
}
reviewForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const username = document.getElementById('username').value;
  const reviewText = document.getElementById('review').value;

  if (username.trim() === '' || reviewText.trim() === '') {
    alert('Please enter your name and review text.');
    return;
  }

  const review = {
    username: username,
    text: reviewText
  };

  addReviewToDOM(review);
  saveReview(review);
  document.getElementById('username').value = '';
  document.getElementById('review').value = '';
});
function saveReview(review) {
  const reviews = JSON.parse(localStorage.getItem('reviews')) || [];
  reviews.push(review);
  localStorage.setItem('reviews', JSON.stringify(reviews));
}
