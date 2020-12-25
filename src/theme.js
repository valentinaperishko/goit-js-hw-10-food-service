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
}
  
function changeTheme(e) {
      if (e.target.checked) {
      refs.body.classList.add(Theme.DARK);
      refs.body.classList.remove(Theme.LIGHT);
      localStorage.setItem('theme', Theme.DARK);

    } else {
      refs.body.classList.add(Theme.LIGHT);
      refs.body.classList.remove(Theme.DARK);
      localStorage.removeItem('theme');
      localStorage.setItem('theme', Theme.LIGHT);
    }
  }
refs.switch.addEventListener('change', changeTheme);


  
  



  