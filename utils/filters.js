const { fr } = require('date-fns/locale')
const { format } = require('date-fns')

const supportedLocales = {
  fr: fr,
}

module.exports = {
  formatDate: (date, dateFormat, locale) => {
    return format(new Date(date), dateFormat, { locale: supportedLocales[locale] })
  },
}
