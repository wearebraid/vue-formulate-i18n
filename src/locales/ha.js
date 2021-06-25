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
const locale = 'ha'

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
    return `Da fatan za a karɓa ${name}.`
  },

  /**
   * The date is not after.
   */
  after: function ({ name, args }) {
    if (Array.isArray(args) && args.length) {
      return `dole ne ${s(name)} ya kasance bayan ${args[0]}.`
    }
    return `${s(name)} dole ne ya zama kwanan wata a nan gaba.`
  },

  /**
   * The value is not a letter.
   */
  alpha: function ({ name }) {
    return `${s(name)} kan iya ƙunsar haruffa kawai.`
  },

  /**
   * Rule: checks if the value is alpha numeric
   */
  alphanumeric: function ({ name }) {
    return `${s(name)} kan iya ƙunsar haruffa da lamba kawai.`
  },

  /**
   * The date is not before.
   */
  before: function ({ name, args }) {
    if (Array.isArray(args) && args.length) {
      return `dole ne ${s(name)} ya kasance kafin ${args[0]}.`
    }
    return `${s(name)} dole ne ya zama kwanan wata na baya.`
  },

  /**
   * The value is not between two numbers or lengths
   */
  between: function ({ name, value, args }) {
    const force = Array.isArray(args) && args[2] ? args[2] : false
    if ((!isNaN(value) && force !== 'length') || force === 'value') {
      return `dole ne ${s(name)} ya kasance tsakanin ${args[0]} da ${args[1]}.`
    }
    return `dole ne tsawon haruffan ${s(name)} ya kasance tsakanin ${args[0]} da ${args[1]}.`
  },

  /**
   * The confirmation field does not match
   */
  confirm: function ({ name, args }) {
    return `${s(name)} bai daidaita ba.`
  },

  /**
   * Is not a valid date.
   */
  date: function ({ name, args }) {
    if (Array.isArray(args) && args.length) {
      return `${s(name)} ba ingantaccen kwanan wata bane, da fatan za ayi amfani da tsari ${args[0]}`
    }
    return `${s(name)} ba ingantaccen kwanan wata bane.`
  },

  /**
   * The default render method for error messages.
   */
  default: function ({ name }) {
    return `Wannan filin bashi da inganci.`
  },

  /**
   * Is not a valid email address.
   */
  email: function ({ name, value }) {
    if (!value) {
      return 'A shigar da adireshin i-mel mai inganci.'
    }
    return `“${value}” ba adireshin imel bane mai inganci.`
  },

  /**
   * Ends with specified value
   */
  endsWith: function ({ name, value }) {
    if (!value) {
      return `Wannan filin bai ƙare da adadi mai inganci ba.`
    }
    return `“${value}” bai ƙare da adadi mai inganci ba.`
  },

  /**
   * Value is an allowed value.
   */
  in: function ({ name, value }) {
    if (typeof value === 'string' && value) {
      return `“${s(value)}” ba ${name} mai amsuwa bane.`
    }
    return `Ba ${name} mai amsuwa bane.`
  },

  /**
   * Value is not a match.
   */
  matches: function ({ name }) {
    return `${s(name)} ba adadi mai amsuwa bane.`
  },

  /**
   * The maximum value allowed.
   */
  max: function ({ name, value, args }) {
    if (Array.isArray(value)) {
      return `Za ku iya zabar ${args[0]} ${name} kawai.`
    }
    const force = Array.isArray(args) && args[1] ? args[1] : false
    if ((!isNaN(value) && force !== 'length') || force === 'value') {
      return `${s(name)} must be less than or equal to ${args[0]}.`
    }
    return `dole ne ${s(name)} ya zama ƙasa da ko daidai da ${args[0]}.`
  },

  /**
   * The (field-level) error message for mime errors.
   */
  mime: function ({ name, args }) {
    return `Dole ne ${s(name)} ya kasance daga nau'in: ${args[0] || 'Babu izinin tsarin fayil.'}`
  },

  /**
   * The maximum value allowed.
   */
  min: function ({ name, value, args }) {
    if (Array.isArray(value)) {
      return `Kuna buƙatar aƙalla ${args[0]} ${name}.`
    }
    const force = Array.isArray(args) && args[1] ? args[1] : false
    if ((!isNaN(value) && force !== 'length') || force === 'value') {
      return `Dole ne ${s(name)} ya zama a kalla ${args[0]}.`
    }
    return `Dole ne ${s(name)} ya zama mai haruffa a kalla ${args[0]}.`
  },

  /**
   * The field is not an allowed value
   */
  not: function ({ name, value }) {
    return `“${value}” ba mai amsuwa ba ne ${name}.`
  },

  /**
   * The field is not a number
   */
  number: function ({ name }) {
    return `Dole ${s(name)} ya zama lamba.`
  },

  /**
   * Required field.
   */
  required: function ({ name }) {
    return `Ana bukatar ${s(name)}.`
  },

  /**
   * Starts with specified value
   */
  startsWith: function ({ name, value }) {
    if (!value) {
      return `Wannan filin bai fara da adadi mai inganci ba.`
    }
    return `“${value}” bai fara da adadi mai inganci ba.`
  },

  /**
   * Value is not a url.
   */
  url: function ({ name }) {
    return `Da fatan za a hada da ingantaccen url.`
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
