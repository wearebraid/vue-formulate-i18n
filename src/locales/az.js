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
const locale = 'az'

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
    return `Xahiş olunur, ${name} qəbul edin.`
  },

  /**
   * The date is not after.
   */
  after: function ({ name, args }) {
    if (Array.isArray(args) && args.length) {
      return `${s(name)} ${args[0]} tarixindən sonra olmalıdır.`
    }
    return `${s(name)} daha gec tarix olmalıdır.`
  },

  /**
   * The value is not a letter.
   */
  alpha: function ({ name }) {
    return `${s(name)} yalnız hərflərdən ibarət ola bilər.`
  },

  /**
   * Rule: checks if the value is alpha numeric
   */
  alphanumeric: function ({ name }) {
    return `${s(name)} yalnız hərf və rəqəmlərdən ibarət ola bilər.`
  },

  /**
   * The date is not before.
   */
  before: function ({ name, args }) {
    if (Array.isArray(args) && args.length) {
      return `${s(name)} tarixindən əvvəl olmalıdır ${args[0]}.`
    }
    return `${s(name)} daha erkən tarix olmalıdır.`
  },

  /**
   * The value is not between two numbers or lengths
   */
  between: function ({ name, value, args }) {
    const force = Array.isArray(args) && args[2] ? args[2] : false
    if ((!isNaN(value) && force !== 'length') || force === 'value') {
      return `${s(name)} ${args[0]} və ${args[1]} arasında olmalıdır.`
    }
    return `${s(name)} ${args[0]} və ${args[1]} simvol uzunluğu arasında olmalıdır.`
  },

  /**
   * The confirmation field does not match
   */
  confirm: function ({ name, args }) {
    return `${s(name)} uyğun gəlmir.`
  },

  /**
   * Is not a valid date.
   */
  date: function ({ name, args }) {
    if (Array.isArray(args) && args.length) {
      return `${s(name)} düzgün tarix deyil, xahiş olunur ${args[0]} formatını istifadə edin`
    }
    return `${s(name)} düzgün tarix deyil.`
  },

  /**
   * The default render method for error messages.
   */
  default: function ({ name }) {
    return `Xana düzgün deyil.`
  },

  /**
   * Is not a valid email address.
   */
  email: function ({ name, value }) {
    if (!value) {
      return 'Xahiş olunur, düzgün e-poçt ünvanı daxil edin.'
    }
    return `“${value}” düzgün e-poçt ünvanı deyil.`
  },

  /**
   * Ends with specified value
   */
  endsWith: function ({ name, value }) {
    if (!value) {
      return `Xana düzgün dəyərlə bitmir.`
    }
    return `“${value}” düzgün dəyərlə bitmir.`
  },

  /**
   * Value is an allowed value.
   */
  in: function ({ name, value }) {
    if (typeof value === 'string' && value) {
      return `“${s(value)}” icazə verilən ${name} deyil.`
    }
    return `Bu icazə verilən ${name} deyil.`
  },

  /**
   * Value is not a match.
   */
  matches: function ({ name }) {
    return `${s(name)} icazə verilən dəyər deyil.`
  },

  /**
   * The maximum value allowed.
   */
  max: function ({ name, value, args }) {
    if (Array.isArray(value)) {
      return `Maksimum ${args[0]} ${name} seçə bilərsiniz.`
    }
    const force = Array.isArray(args) && args[1] ? args[1] : false
    if ((!isNaN(value) && force !== 'length') || force === 'value') {
      return `${s(name)} maksimum ${args[0]} olmalıdır.`
    }
    return `${s(name)} maksimum ${args[0]} simvol olmalıdır.`
  },

  /**
   * The (field-level) error message for mime errors.
   */
  mime: function ({ name, args }) {
    return `${s(name)} ${args[0] || 'Heç bir fayl formatına icazə verilmir.'} tipində olmalıdır`
  },

  /**
   * The maximum value allowed.
   */
  min: function ({ name, value, args }) {
    if (Array.isArray(value)) {
      return `Ən azı ${args[0]} ${name} seçə bilərsiniz.`
    }
    const force = Array.isArray(args) && args[1] ? args[1] : false
    if ((!isNaN(value) && force !== 'length') || force === 'value') {
      return `${s(name)} minimum ${args[0]} olmalıdır.`
    }
    return `${s(name)} minimum ${args[0]} simvol olmalıdır.`
  },

  /**
   * The field is not an allowed value
   */
  not: function ({ name, value }) {
    return `“${value}” icazə verilən ${name} dəyəri deyil.`
  },

  /**
   * The field is not a number
   */
  number: function ({ name }) {
    return `${s(name)} rəqəm olmalıdır.`
  },

  /**
   * Required field.
   */
  required: function ({ name }) {
    return `${s(name)} tələb edilir.`
  },

  /**
   * Starts with specified value
   */
  startsWith: function ({ name, value }) {
    if (!value) {
      return `Xana düzgün dəyərlə başlamır.`
    }
    return `“${value}” düzgün dəyərlə başlamır.`
  },

  /**
   * Value is not a url.
   */
  url: function ({ name }) {
    return `Xahiş olunur, düzgün url daxil edin.`
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
