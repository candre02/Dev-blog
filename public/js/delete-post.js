async function deleteFormHandler(event) {
  event.preventDefault();

  const id = this.getAttribute("data-id")
  alert(id)
  const response = await fetch(`/api/posts/${id}`, {
    method: 'DELETE'
  });

  if (response.ok) {
    document.location.replace('/dashboard/');
  } else {
    alert(response.statusText);
  }
}
var deleteBtn = document.querySelectorAll('.delete-post-btn')
for (let i = 0; i < deleteBtn.length; i++) {

 deleteBtn[i].addEventListener('click', deleteFormHandler); 
}

  