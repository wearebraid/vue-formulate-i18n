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
const locale = 'fa'

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
    return `${name} باید پذیرفته شود`
  },

  /**
   * The date is not after.
   */
  after: function ({ name, args }) {
    if (Array.isArray(args) && args.length) {
      return `${name} باید تاریخی بعد از ${args[0]} باشد.`
    }
    return `${s(name)} باید یک تاریخ بعد باشد`
  },

  /**
   * The value is not a letter.
   */
  alpha: function ({ name }) {
    return `${name} باید شامل حروف الفبا باشد.`
  },

  /**
   * Rule: checks if the value is alpha numeric
   */
  alphanumeric: function ({ name }) {
    return `${s(name)} باید شامل حروف الفبا و عدد باشد.`
  },

  /**
   * The date is not before.
   */
  before: function ({ name, args }) {
    if (Array.isArray(args) && args.length) {
      return `${s(name)} باید تاریخی پیش از ${args[0]} باشد.`
    }
    return `${s(name)} باید یک تاریخ پیش باشد`
  },

  /**
   * The value is not between two numbers or lengths
   */
  between: function ({ name, value, args }) {
    const force = Array.isArray(args) && args[2] ? args[2] : false
    if ((!isNaN(value) && force !== 'length') || force === 'value') {
      return `${s(name)} باید بین ${args[0]} و ${args[1]} باشد.`
    }
    return  `${s(name)} باید بین ${args[0]} و ${args[1]} کاراکتر باشد.`
  },

  /**
   * The confirmation field does not match
   */
  confirm: function ({ name, args }) {
    return `${s(name)} مطابقت ندارد.`
  },

  /**
   * Is not a valid date.
   */
  date: function ({ name, args }) {
    if (Array.isArray(args) && args.length) {
      return `${s(name)} یک تاریخ معتبر نیست, لطفا از این فرمت استفاده کنید ${args[0]}`
    }
    return `${s(name)} یک تاریخ معتبر نیست.`
  },

  /**
   * The default render method for error messages.
   */
  default: function ({ name }) {
    return `این قسمت معتبر نیست.`
  },

  /**
   * Is not a valid email address.
   */
  email: function ({ name, value }) {
    if (!value) {
      return 'لطفا یک آدرس ایمیل معتبر وارد کنید.'
    }
    return `“${value}” یک آدرس ایمیل معتبر نیست.`
  },

  /**
   * Ends with specified value
   */
  endsWith: function ({ name, value }) {
    if (!value) {
      return `این قسمت با یک مقدار معتبر پایان نمی یابد.`
    }
    return `“${value}” با یک مقدار معتبر پایان نمی یابد.`
  },

  /**
   * Value is an allowed value.
   */
  in: function ({ name, value }) {
    if (typeof value === 'string' && value) {
      return `“${s(value)}” یک ${name} مجاز نیست.`
    }
    return `این یک ${name} مجاز نیست`
  },

  /**
   * Value is not a match.
   */
  matches: function ({ name }) {
    return `${s(name)} یک فرمت معتبر نیست.`
  },

  /**
   * The maximum value allowed.
   */
  max: function ({ name, value, args }) {
    if (Array.isArray(value)) {
      return `فقط ${args[0]} ${name} می توانند انتخاب شوند`
    }
    const force = Array.isArray(args) && args[1] ? args[1] : false
    if ((!isNaN(value) && force !== 'length') || force === 'value') {
      return `${s(name)} باید کمتر از یا برابر با ${args[0]} باشد.`
    }
    return `${s(name)} باید کمتر از یا برابر با ${args[0]} کاراکتر باشد.`
  },

  /**
   * The (field-level) error message for mime errors.
   */
  mime: function ({ name, args }) {
    return `${s(name)} باید یکی از این فرمت باشد: ${args[0] || 'هیچ پرونده ای مجاز نیست'}`
  },

  /**
   * The maximum value allowed.
   */
  min: function ({ name, value, args }) {
    if (Array.isArray(value)) {
      return `حداقل ${args[0]} ${name} باید انتخاب شود.`
    }
    const force = Array.isArray(args) && args[1] ? args[1] : false
    if ((!isNaN(value) && force !== 'length') || force === 'value') {
      return `${s(name)} باید بزرگتر از یا برابر با ${args[0]} باشد.`
    }
    return `${s(name)} باید بیشتر از یا برابر با ${args[0]} کاراکتر باشد.`
  },

  /**
   * The field is not an allowed value
   */
  not: function ({ name, value }) {
    return `“${value}” یک ${name} مجاز نیست.`
  },

  /**
   * The field is not a number
   */
  number: function ({ name }) {
    return `${s(name)} باید یک عدد باشد.`
  },

  /**
   * Required field.
   */
  required: function ({ name }) {
    return `${s(name)} لازم است.`
  },

  /**
   * Starts with specified value
   */
  startsWith: function ({ name, value }) {
    if (!value) {
      return `این قسمت با یک مقدار معتبر شروع نمی شود.`
    }
    return `“${value}” با یک مقدار معتبر شروع نمی شود.`
  },

  /**
   * Value is not a url.
   */
  url: function ({ name }) {
    return `لطفا یک نشانی وب معتبر وارد کنید.`
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
