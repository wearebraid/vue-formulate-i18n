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
const locale = 'uk'

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
   * Valid accepted value
   */
  accepted: function ({ name }) {
    return `Будь ласка, підтвердіть ${name}.`
  },

  /**
   * The date is not after
   */
  after: function ({ name, args }) {
    if (Array.isArray(args) && args.length) {
      return `${s(name)} має бути після ${args[0]}.`
    }
    return `${s(name)} має бути пізніше.`
  },

  /**
   * The value is not a letter
   */
  alpha: function ({ name }) {
    return `${s(name)} може містити лише алфавітні символи.`
  },

  /**
   * Rule: checks if the value is alpha numeric
   */
  alphanumeric: function ({ name }) {
    return `${s(name)} може містити тільки букви і цифри.`
  },

  /**
   * The date is not before
   */
  before: function ({ name, args }) {
    if (Array.isArray(args) && args.length) {
      return `${s(name)} має бути раніше ${args[0]}.`
    }
    return `${s(name)} має бути раніше.`
  },

  /**
   * The value is not between two numbers or lengths
   */
  between: function ({ name, value, args }) {
    const force = Array.isArray(args) && args[2] ? args[2] : false
    if ((!isNaN(value) && force !== 'length') || force === 'value') {
      return `${s(name)} має бути між ${args[0]} та ${args[1]}.`
    }
    return `${s(name)} має бути між ${args[0]} та ${args[1]}.`
  },

  /**
   * The confirmation field does not match
   */
  confirm: function ({ name, args }) {
    return `${s(name)} не збігаються.`
  },

  /**
   * Is not a valid date
   */
  date: function ({ name, args }) {
    if (Array.isArray(args) && args.length) {
      return `${s(name)} не є допустимою датою, будь ласка, використовуйте формат ${args[0]}`
    }
    return `${s(name)} не є допустимою датою.`
  },

  /**
   * The default render method for error messages
   */
  default: function ({ name }) {
    return `Це поле не є допустимим.`
  },

  /**
   * Is not a valid email address
   */
  email: function ({ name, value }) {
    if (!value) {
      return 'Будь ласка, введіть дійсну адресу електронної пошти.'
    }
    return `“${value}” недійсний адрес електронної пошти.`
  },

  /**
   * Ends with specified value
   */
  endsWith: function ({ name, value }) {
    if (!value) {
      return `Це поле не закінчується допустимим значенням.`
    }
    return `“${value}” не закінчується допустимим значенням.`
  },

  /**
   * Value is an allowed value
   */
  in: function ({ name, value }) {
    if (typeof value === 'string' && value) {
      return `“${s(value)}” є помилковим для ${name}.`
    }
    return `Вибране значення для ${name} є помилковим.`
  },

  /**
   * Value is not a match 
   */
  matches: function ({ name }) {
    return `${s(name)} не збігається.`
  },

  /**
   * The maximum value allowed
   */
  max: function ({ name, value, args }) {
    if (Array.isArray(value)) {
      return `Ви можете вибрати тільки ${args[0]} ${name}.`
    }
    const force = Array.isArray(args) && args[1] ? args[1] : false
    if ((!isNaN(value) && force !== 'length') || force === 'value') {
      return `${s(name)} має бути менше або дорівнює ${args[0]}.`
    }
    return `Кількість символів ${s(name)} має бути менше або дорівнює ${args[0]}.`
  },

  /**
   * The (field-level) error message for mime errors.
   */
  mime: function ({ name, args }) {
    return `${s(name)} має бути файлом одного з наступних типів: ${args[0] || 'Недопустимі формати файлів.'}`
  },

  /**
   * The maximum value allowed
   */
  min: function ({ name, value, args }) {
    if (Array.isArray(value)) {
      return `Має бути не менш як ${args[0]} ${name}.`
    }
    const force = Array.isArray(args) && args[1] ? args[1] : false
    if ((!isNaN(value) && force !== 'length') || force === 'value') {
      return `${s(name)} має бути не менше як ${args[0]}.`
    }
    return `Кількість символів ${s(name)} має бути не менше як ${args[0]}.`
  },

  /**
   * The field is not an allowed value
   */
  not: function ({ name, value }) {
    return `“${value}” не є допустимим ${name}.`
  },

  /**
   * The field is not a number
   */
  number: function ({ name }) {
    return `${s(name)} повинні бути числом.`
  },

  /**
   * Required field
   */
  required: function ({ name }) {
    return `${s(name)} обов'язкове поле.`
  },

  /**
   * Starts with specified value
   */
  startsWith: function ({ name, value }) {
    if (!value) {
      return `Поле має починатися дійсним значенням.`
    }
    return `“${value}” має починатися дійсним значенням.`
  },

  /**
   * Value is not a url
   */
  url: function ({ name }) {
    return `Будь ласка, вкажіть дійсний URL.`
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
