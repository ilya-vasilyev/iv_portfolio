const registerSW = () => {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register(location.origin + '/service-worker.js')
    })
  }
}

export default registerSW()
