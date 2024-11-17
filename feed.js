const feedContainer = document.querySelector('.feed-container');

feedContainer.addEventListener('scroll', () => {
  if (feedContainer.scrollTop + feedContainer.clientHeight >= feedContainer.scrollHeight - 10) {
    loadMorePosts();
  }
});

function loadMorePosts() {
  const newPost = document.createElement('div');
  newPost.classList.add('feed-item');
  newPost.innerHTML = `<img src="image.jpg" alt="new post"><p>New Post</p>`;
  
  feedContainer.appendChild(newPost);
}
