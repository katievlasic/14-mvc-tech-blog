const commentFormHandler = async (event) => {
    event.preventDefault();
  
    const comment = document.querySelector('#comment-entry').value.trim();
    
      const response = await fetch('/api/comments', {
        method: 'POST',
        body: JSON.stringify({ comment }),
        headers: { 'Content-Type': 'application/json' },
      });
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert(response.statusText);
      }
  };

document
.querySelector('.comment-form')
.addEventListener('submit', commentFormHandler);
