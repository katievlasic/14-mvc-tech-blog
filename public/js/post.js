const postFormHandler = async (event) => {
    event.preventDefault();
  
    const title = document.querySelector('#postTitle').value.trim();
    const text = document.querySelector('#postContent').value.trim();
    
    if (title && text) {
      const response = await fetch('/api/post/', {
        method: 'POST',
        body: JSON.stringify({ title, text }),
        headers: { 'Content-Type': 'application/json' },
      });
      console.log(response);
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert(response.statusText);
      }
    }
  };


document
  .querySelector('.post-form')
  .addEventListener('submit', postFormHandler);
