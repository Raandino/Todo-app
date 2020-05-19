const CACHE = 'todo_pwa_rar'

const urlsToCache = [
    './index.html',
    './js',
    ''
]

self.addEventListener('install', e => { 
    e.waitUntil(
        caches.open(CACHE)
        .then(cache => {
            return cache.addAll(urlsToCache)
        })
        
    )
})