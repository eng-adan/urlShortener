import { Controller } from 'stimulus'; 
import Rails from "@rails/ujs";

export default class extends Controller {
  static targets = ['url', 'shortLink', 'hideable'];

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

  createLink = () => {
    const params = `link[actual_url]=${this.urlTarget.value}`

    Rails.ajax({
      url: '/links',
      type: 'POST',
      data: params,
      success: (res) => {
        let short_url = window.location.origin + '/' + res.data.lookup_code
        this.shortLinkTarget.innerHTML = short_url
        this.shortLinkTarget.href = short_url
        this.hideableTargets.forEach(el => {
          el.hidden = false
        });
      },
    });
  }

  copy = (event) => {
    event.preventDefault()
    navigator.clipboard.writeText(this.shortLinkTarget.href)
  }
}
