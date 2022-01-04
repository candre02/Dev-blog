async function blogFormHandler(event) {
    event.preventDefault();
  
    const blog_text = document.querySelector('textarea[name="blog-body"]').value.trim();
    const post_id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];
  
    if (blog_text) {
      const response = await fetch('/api/blogs', {
        method: 'POST',
        body: JSON.stringify({
          post_id,
          blog_text
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
  
      if (response.ok) {
        document.location.reload();
      } else {
        alert(response.statusText);
      }
    }
  }
  
  document.querySelector('.blog-form').addEventListener('submit', blogFormHandler);
  