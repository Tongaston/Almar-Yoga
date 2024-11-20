// AUDIO VIDEO

export function audioVideo() {
  const video = document.getElementById('video')
  const audioOn = document.querySelector('.audio-on')
  const audioOff = document.querySelector('.audio-off')

  video.muted = true

  audioOff.addEventListener('click', () => {
    video.muted = !video.muted
    audioOn.style.display = 'block'
    audioOff.style.display = 'none'
  })

  audioOn.addEventListener('click', () => {
    video.muted = !video.muted
    audioOn.style.display = 'none'
    audioOff.style.display = 'block'
  })
}
