/**
 * Here we can import additional helper functions to assist in formatting our
 * language. Feel free to add additional helper methods to libs/formats if it
 * assists in creating good validation messages for your locale.
 */
import { sentence as s } from '../libs/formats'

/**
 * This is the ISO 639-1 and (optionally) ISO 639-2 language "tag".
 * Some valid examples:
 * zh
 * zh-CN
 * zh-HK
 * en
 * en-GB
 */
const locale = 'fi'

/**
 * This is an object of functions that each produce valid responses. There's no
 * need for these to be 1-1 with english, feel free to change the wording or
 * use/not use any of the variables available in the object or the
 * arguments for the message to make the most sense in your language and culture.
 *
 * The validation context object includes the following properties:
 * {
 *   args        // Array of rule arguments: between:5,10 (args are ['5', '10'])
 *   name:       // The validation name to be used
 *   value:      // The value of the field (do not mutate!),
 *   vm: the     // FormulateInput instance this belongs to,
 *   formValues: // If wrapped in a FormulateForm, the value of other form fields.
 * }
 */
const localizedValidationMessages = {

  /**
   * Valid accepted value.
   */
  accepted: function ({ name }) {
    return `Please accept the ${name}.`
  },

  /**
   * The date is not after.
   */
  after: function ({ name, args }) {
    if (Array.isArray(args) && args.length) {
      return `${s(name)} kenttä tulee olla ajankohdan ${args[0]} jälkeen.`
    }
    return `${s(name)} tulee olla myöhäisempi ajankohta.`
  },

  /**
   * The value is not a letter.
   */
  alpha: function ({ name }) {
    return `${s(name)} kenttä voi sisältää vain kirjaimia.`
  },

  /**
   * Rule: checks if the value is alpha numeric
   */
  alphanumeric: function ({ name }) {
    return `${s(name)} kenttä voi sisältää vain kirjaimia tai numeroita.`
  },

  /**
   * The date is not before.
   */
  before: function ({ name, args }) {
    if (Array.isArray(args) && args.length) {
      return `${s(name)} kenttä tulee olla ajankohdan ${args[0]} jälkeen.`
    }
    return `${s(name)} tulee olla aikaisempi ajankohta.`
  },

  /**
   * The value is not between two numbers or lengths
   */
  between: function ({ name, value, args }) {
    const force = Array.isArray(args) && args[2] ? args[2] : false
    if ((!isNaN(value) && force !== 'length') || force === 'value') {
      return `${s(name)} kenttä tulisi ${args[0]} and ${args[1]}.`
    }
    return `${s(name)} must be between ${args[0]} and ${args[1]} characters long.`
  },

  /**
   * The confirmation field does not match
   */
  confirm: function ({ name, args }) {
    return `${s(name)} does not match.`
  },

  /**
   * Is not a valid date.
   */
  date: function ({ name, args }) {
    if (Array.isArray(args) && args.length) {
      return `${s(name)} on virheellinen päivämäärä, käytä seuraavaa formaattia ${args[0]}`
    }
    return `${s(name)} on virheellinen päivämäärä.`
  },

  /**
   * The default render method for error messages.
   */
  default: function ({ name }) {
    return `Kenttä on virheellinen.`
  },

  /**
   * Is not a valid email address.
   */
  email: function ({ name, value }) {
    if (!value) {
      return 'Kirjoita sähköpostiosoite.'
    }
    return `“${value}” on virheellinen sähköposti.`
  },

  /**
   * Ends with specified value
   */
  endsWith: function ({ name, value }) {
    if (!value) {
      return `Tämä kenttä päättyy virheellisellä arvolla.`
    }
    return `“${value}” arvo päättyy virheellisesti.`
  },

  /**
   * Value is an allowed value.
   */
  in: function ({ name, value }) {
    if (typeof value === 'string' && value) {
      return `“${s(value)}” arvo ei ole sallittu arvo kentälle ${name}.`
    }
    return `Tämä ei ole sallittu arvo kentälle ${name}.`
  },

  /**
   * Value is not a match.
   */
  matches: function ({ name }) {
    return `${s(name)} kentän arvo ei ole sallittu.`
  },

  /**
   * The maximum value allowed.
   */
  max: function ({ name, value, args }) {
    if (Array.isArray(value)) {
      return `Kentän ${name} valintojen määrän tulisi olla enintään ${args[0]}.`
    }
    const force = Array.isArray(args) && args[1] ? args[1] : false
    if ((!isNaN(value) && force !== 'length') || force === 'value') {
      return `${s(name)} kentän arvo tulee olla pienempi tai yhtä pieni kuin ${args[0]}.`
    }
    return `${s(name)} kentän arvo tulee olla enintään ${args[0]} merkkiä pitkä.`
  },

  /**
   * The (field-level) error message for mime errors.
   */
  mime: function ({ name, args }) {
    return `${s(name)} kenttä tulee olla tyyppiä: ${args[0] || 'Ei sallittuja tiedostomuotoja asetettu.'}`
  },

  /**
   * The maximum value allowed.
   */
  min: function ({ name, value, args }) {
    if (Array.isArray(value)) {
      return `Kentän ${name} valintojen määrän tulisi olla vähintään ${args[0]}.`
    }
    const force = Array.isArray(args) && args[1] ? args[1] : false
    if ((!isNaN(value) && force !== 'length') || force === 'value') {
      return `${s(name)} kentän arvo tulee olla vähintään ${args[0]}.`
    }
    return `${s(name)} kentän arvo tulee olla vähintään ${args[0]} merkkiä pitkä.`
  },

  /**
   * The field is not an allowed value
   */
  not: function ({ name, value }) {
    return `“${value}” ei ole sallittu arvo kentälle ${name}.`
  },

  /**
   * The field is not a number
   */
  number: function ({ name }) {
    return `Kenttä ${s(name)} tulee olla numero.`
  },

  /**
   * Required field.
   */
  required: function ({ name }) {
    return `Kenttä ${s(name)} on pakollinen.`
  },

  /**
   * Starts with specified value
   */
  startsWith: function ({ name, value }) {
    if (!value) {
      return `Tämä kenttä ei ala oikealla arvolla.`
    }
    return `Arvo “${value}” ei ala sallitusti.`
  },

  /**
   * Value is not a url.
   */
  url: function ({ name }) {
    return `Anna oikea URL-osoite.`
  }
}

/**
 * This creates a vue-formulate plugin that can be imported and used on each
 * project.
 */
export default function (instance) {
  instance.extend({
    locales: {
      [locale]: localizedValidationMessages
    }
  })
}
