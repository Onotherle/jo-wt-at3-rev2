  
  const buttonMobileNav = document.getElementById('buttonMobileDropdown');
  const mobileDropdown = document.getElementById('groupMobileDropdown');

  // visibility controls for mobile menu

  function mobileHamburgerDisplay() {
    mobileDropdown.classList.toggle('hidden');    
  }

  buttonMobileNav.addEventListener('click', mobileHamburgerDisplay);
