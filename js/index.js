import {h , render } from 'preact'
import App from './app/App'

const root = document.getElementById('app')
render(<App></App>,root)

if('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js')
        .then( reg => {
            console.log('Registrated')
        })
} 