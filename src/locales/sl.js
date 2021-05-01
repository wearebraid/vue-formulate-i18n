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
const locale = 'sl'

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
    return `Prosim sprejmite ${name}.`
  },

  /**
   * The date is not after.
   */
  after: function ({ name, args }) {
    if (Array.isArray(args) && args.length) {
      return `${s(name)} mora biti za ${args[0]}.`
    }
    return `${s(name)} mora biti poznejši datum.`
  },

  /**
   * The value is not a letter.
   */
  alpha: function ({ name }) {
    return `${s(name)} lahko vsebuje samo abecedne znake.`
  },

  /**
   * Rule: checks if the value is alpha numeric
   */
  alphanumeric: function ({ name }) {
    return `${s(name)} lahko vsebuje samo črke in številke.`
  },

  /**
   * The date is not before.
   */
  before: function ({ name, args }) {
    if (Array.isArray(args) && args.length) {
      return `${s(name)} mora biti pred ${args[0]}.`
    }
    return `${s(name)} mora biti zgodnejši datum.`
  },

  /**
   * The value is not between two numbers or lengths
   */
  between: function ({ name, value, args }) {
    const force = Array.isArray(args) && args[2] ? args[2] : false
    if ((!isNaN(value) && force !== 'length') || force === 'value') {
      return `${s(name)} more biti med ${args[0]} in ${args[1]}.`
    }
    return `${s(name)} more biti med ${args[0]} in ${args[1]} ${pluralizateCharacters(args[1])}.`
  },

  /**
   * The confirmation field does not match
   */
  confirm: function ({ name, args }) {
    return `${s(name)} se ne ujema.`
  },

  /**
   * Is not a valid date.
   */
  date: function ({ name, args }) {
    if (Array.isArray(args) && args.length) {
      return `${s(name)} ni veljaven datum, uporabite obliko ${args[0]}`
    }
    return `${s(name)} ni veljaven datum.`
  },

  /**
   * The default render method for error messages.
   */
  default: function ({ name }) {
    return `To polje ni veljavno.`
  },

  /**
   * Is not a valid email address.
   */
  email: function ({ name, value }) {
    if (!value) {
      return 'Vnesite veljaven elektronski naslov.'
    }
    return `“${value}” ni veljaven elektronski naslov.`
  },

  /**
   * Ends with specified value
   */
  endsWith: function ({ name, value }) {
    if (!value) {
      return `To polje se ne konča z veljavno vrednostjo.`
    }
    return `“${value}” se ne konča z veljavno vrednostjo.`
  },

  /**
   * Value is an allowed value.
   */
  in: function ({ name, value }) {
    if (typeof value === 'string' && value) {
      return `“${s(value)}” ni dovoljeno ${name}.`
    }
    return `To ni dovoljeno ${name}.`
  },

  /**
   * Value is not a match.
   */
  matches: function ({ name }) {
    return `${s(name)} ni dovoljena vrednost.`
  },

  /**
   * The maximum value allowed.
   */
  max: function ({ name, value, args }) {
    if (Array.isArray(value)) {
      return `Lahko izberete samo ${args[0]} ${name}.`
    }
    const force = Array.isArray(args) && args[1] ? args[1] : false
    if ((!isNaN(value) && force !== 'length') || force === 'value') {
      return `${s(name)} mora biti manj ali ${args[0]}.`
    }
    return `${s(name)} mora biti manj ali ${args[0]} ${pluralizateCharacters(args[0])}.`
  },

  /**
   * The (field-level) error message for mime errors.
   */
  mime: function ({ name, args }) {
    return `${s(name)} mora biti tipa: ${args[0] || 'Datoteke niso dovoljene.'}`
  },

  /**
   * The maximum value allowed.
   */
  min: function ({ name, value, args }) {
    if (Array.isArray(value)) {
      return `Potrebujete vsaj ${args[0]} ${name}.`
    }
    const force = Array.isArray(args) && args[1] ? args[1] : false
    if ((!isNaN(value) && force !== 'length') || force === 'value') {
      return `${s(name)} mora biti vsaj ${args[0]}.`
    }
    return `${s(name)} mora biti vsaj ${args[0]} ${pluralizateCharacters(args[0])}.`
  },

  /**
   * The field is not an allowed value
   */
  not: function ({ name, value }) {
    return `“${value}” ni dovoljeno ${name}.`
  },

  /**
   * The field is not a number
   */
  number: function ({ name }) {
    return `${s(name)} mora biti število.`
  },

  /**
   * Required field.
   */
  required: function ({ name }) {
    return `${s(name)} je obvezno.`
  },

  /**
   * Starts with specified value
   */
  startsWith: function ({ name, value }) {
    if (!value) {
      return `To polje se ne začne z veljavno vrednostjo.`
    }
    return `“${value}” se ne začne z veljavno vrednostjo.`
  },

  /**
   * Value is not a url.
   */
  url: function ({ name }) {
    return `Vnesite veljaven URL.`
  }
}

/**
 * This function pluralizes word "characters".
 */
function pluralizateCharacters (value) {
  switch (parseInt(value)) {
    case 1:
      return 'znak'
    case 2:
      return 'znaka'
    default:
      return 'znakov'
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
