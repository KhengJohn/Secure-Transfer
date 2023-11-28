function toggleDropdown() {
    const dropdown = document.querySelector('.nsm-li');
    dropdown.classList.toggle('open');
  }
  
  // Close the dropdown when clicking outside of it
  document.addEventListener('click', function (event) {
    const dropdown = document.querySelector('.nsm-li');
    if (!dropdown.contains(event.target)) {
      dropdown.classList.remove('open');
    }
  });
  