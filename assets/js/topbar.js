//cursor blinking in top nav
var topnav = anime.timeline({
    delay: 200,
    duration: 500,
    direction: 'alternate',
    loop: true,
    easing: 'easeInOutQuad'
  })
  .add({ targets: '#cursor_box',  background: '	rgba(158,206,88,0)' }, 0)