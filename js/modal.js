document.addEventListener('DOMContentLoaded', function () {
    const openModalBtn = document.getElementById('openModalBtn');
    const closeModalBtn = document.getElementById('closeModalBtn');
    const modal = document.getElementById('myModal');
  
    openModalBtn.addEventListener('click', function () {
      modal.style.display = 'block';
    });
  
    closeModalBtn.addEventListener('click', function () {
      modal.style.display = 'none';
    });
  
    window.addEventListener('click', function (event) {
      if (event.target === modal) {
        modal.style.display = 'none';
      }
    });
  });
  
// TOGGLE CHECKBOX IN TRANSACTION REQUEST PAGE
  document.addEventListener('DOMContentLoaded', function () {
    const toggleCheckbox = document.getElementById('toggleCheckbox');
    const contentToToggle = document.getElementById('contentToToggle');
  
    toggleCheckbox.addEventListener('change', function () {
      contentToToggle.style.display = toggleCheckbox.checked ? 'block' : 'none';
    });
  });

  document.addEventListener('DOMContentLoaded', function () {
    const approveCheckbox = document.getElementById('approveCheckbox');
    const cancelCheckbox = document.getElementById('cancelCheckbox');
    const contentToToggle = document.getElementById('contentToToggle');
    const contentToToggleII = document.getElementById('contentToToggleII');
  
    approveCheckbox.addEventListener('change', function () {
      if (approveCheckbox.checked) {
        cancelCheckbox.checked = false;
        // Additional logic or actions if needed
        contentToToggle.style.display = 'block';
        contentToToggleII.style.display = 'none';
      }
    });
  
    cancelCheckbox.addEventListener('change', function () {
      if (cancelCheckbox.checked) {
        approveCheckbox.checked = false;
        // Additional logic or actions if needed
        contentToToggle.style.display = 'none';
        contentToToggleII.style.display = 'block';
      }
    });
  });
