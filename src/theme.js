const refs = {
    body: document.querySelector('body'),
    switch: document.querySelector('.theme-switch__toggle'),
  };
  
const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };

const themeInLocalStorage = localStorage.getItem('theme');
  
if (themeInLocalStorage === Theme.DARK) {
   refs.switch.checked = true;
   refs.body.classList.add(Theme.DARK);
} else {
  refs.body.classList.add(Theme.LIGHT);
}

  
function changeTheme(e) {
      if (e.target.checked) {
      replaceTheme();
      localStorage.setItem('theme', Theme.DARK);

    } else {
      replaceTheme();
      localStorage.setItem('theme', Theme.LIGHT);
    }
  }
  const replaceTheme = () => {
    refs.body.classList.toggle(Theme.DARK);
    }
refs.switch.addEventListener('change', changeTheme);


  
  



  