import { Controller } from 'stimulus'; 
export default class extends Controller {
  connect() {
    this.themeChange
  }

  themeChange = (e) => {
    if (e.target.value === 'dark') {
      localStorage.theme = 'dark'
    } else if (e.target.value = 'light') {
      localStorage.theme = 'light'
    } else {
      localStorage.removeItem('theme')
    }
    
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }
}