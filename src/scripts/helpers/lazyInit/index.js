export default function lazyInit(element, fn) {
  const observer = new IntersectionObserver((entries) => {
    if (entries.some(({ isIntersecting }) => isIntersecting)) {
      observer.disconnect()
      fn()
    }
  })
  observer.observe(element)
}
