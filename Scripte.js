function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
} 

function searchFunction() {
  const searchQuery = document.getElementById('search').value.toLowerCase();
  const items = document.querySelectorAll('.item');
  items.forEach(item => {
    item.style.display = item.innerText.toLowerCase().includes(searchQuery) ? '' : 'none';
  });
}
