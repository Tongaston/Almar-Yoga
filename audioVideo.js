// AUDIO VIDEO
let audioOn = document.querySelector('.audio-on')
let audioOff = document.querySelector('.audio-off')

export function audioVideo() {
  let video = document.querySelector('video')

  video.muted = true

  video.addEventListener('click', () => {
    video.muted = !video.muted

    if (!video.muted) {
      audioOn.style.display = 'block'
      audioOff.style.display = 'none'
    } else {
      audioOn.style.display = 'none'
      audioOff.style.display = 'block'
    }
  })
}
