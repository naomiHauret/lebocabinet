export default function initializeMenu(listControls, target) {
    listControls.forEach(item => {
        item.addEventListener('click', () => {
          const isFoldVisible = target.getAttribute("aria-expanded") === "true"
          if(isFoldVisible) {
            target.setAttribute("aria-expanded", "false")
          } else {
            target.setAttribute("aria-expanded", "true")
          }
        })
    })
}