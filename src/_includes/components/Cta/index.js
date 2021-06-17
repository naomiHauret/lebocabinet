const styles =
  'cta outline-none border-1 border-solid focus:transition-all active:transition-all hover:transition-all relative text-11 leading-tight xs:leading-xloose py-1.5 px-2.5 xs:py-2 xs:px-5 xs:text-16 rounded-full'
module.exports = (text = '', extraStyles = '', href = false, isExternalLink = false, otherProps = {}) => {
  const extraPropsAnchor = isExternalLink ? 'rel="noopener noreferrer"' : ''
  let extraPropsAsHtmlAttributes = ''
  Object.keys(otherProps).map((prop) => {
    extraPropsAsHtmlAttributes = `${extraPropsAsHtmlAttributes} ${prop}="${otherProps[prop]}"`
  })
  if (href) {
    return `
        <a class="${styles} ${extraStyles}" href="${href}" ${extraPropsAnchor} ${extraPropsAsHtmlAttributes}>
          ${text}
        </a>
      `
  }

  return `
      <button class="${styles} ${extraStyles}" ${extraPropsAsHtmlAttributes}>
        ${text}
      </button>
    `
}
