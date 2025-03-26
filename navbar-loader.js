document.addEventListener('DOMContentLoaded', function() {
    function loadNavbar() {
      if (document.querySelector('.custom-navbar')) return;
      const navbarContainer = document.createElement('div');
      navbarContainer.innerHTML = `
        <nav class="navbar navbar-expand-lg custom-navbar">
          <div class="container-fluid">
            <div class="logo">
              <div class="logo-square"></div>
              <div class="logo-text">Nasiphi Pukwana</div>
              <span class="title">/ AI Engineer</span>
            </div>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link" href="/index.html">ABOUT ME</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/resume.html">RESUME</a>
                </li>
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="/projects.html" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    PROJECTS
                  </a>
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="/ongoing.html">Ongoing</a></li>
                    <li><a class="dropdown-item" href="/completed.html">Completed</a></li>
                  </ul>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/timeline.html">TIMELINE</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/contact.html">CONTACT</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      `;
      document.body.insertBefore(navbarContainer.firstChild, document.body.firstChild);
      highlightCurrentPage();
    }
  
    function highlightCurrentPage() {
      const currentPage = window.location.pathname.split('/').pop() || 'index.html';
      const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '/' + currentPage) {
          link.classList.add('active');
        }
      });
      const dropdownItems = document.querySelectorAll('.dropdown-item');
      dropdownItems.forEach(item => {
        if (item.getAttribute('href') === '/' + currentPage) {
          const parentDropdown = item.closest('.dropdown').querySelector('.dropdown-toggle');
          if (parentDropdown) {
            parentDropdown.classList.add('active');
          }
          item.classList.add('active');
        }
      });
    }
  
    loadNavbar();
  });