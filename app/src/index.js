import App from './App.js'

window.app = new App
document.getElementById('app').innerHTML = app.render()
