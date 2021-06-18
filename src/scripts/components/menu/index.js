export default function initializeMenu(listControls, target, openControl, closeControl, links) {
  const firstFocusableEl = closeControl
  const lastFocusableEl = links[links.length - 1]

  document.addEventListener('keydown', (e) => {
    const isFoldVisible = target.getAttribute('aria-expanded') === 'true'
    const KEYCODE_ESCAPE = 27
    const KEYCODE_TAB = 9

    if (isFoldVisible) {
      // On escape pressed, close the menu
      if (e.keyCode === KEYCODE_ESCAPE || e.key === KEYCODE_ESCAPE) {
        target.setAttribute('aria-expanded', 'false')
        openControl.focus()
      }

      // If tab or shift + tab is pressed
      if (e.key === 'Tab' || e.keyCode === KEYCODE_TAB) {
        if (e.shiftKey) {
          // 'Reverse' tab
          if (document.activeElement === firstFocusableEl) {
            // If the current focused element is the first element of the navigation,
            // Focus the last element of the nav
            lastFocusableEl.focus()
            e.preventDefault()
          }
        } else {
          // 'Regular' tab
          if (document.activeElement === lastFocusableEl) {
            // If the current focused element is the first element of the navigation,
            // Focus the first element of the nav (close button)
            firstFocusableEl.focus()
            e.preventDefault()
          }
        }
      }
    }
  })

  listControls.forEach((item) => {
    item.addEventListener('click', () => {
      const isFoldVisible = target.getAttribute('aria-expanded') === 'true'
      if (isFoldVisible) {
        target.setAttribute('aria-expanded', 'false')
        openControl.focus()
      } else {
        target.setAttribute('aria-expanded', 'true')
        closeControl.focus()
      }
    })
  })
}
