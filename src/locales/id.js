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
const locale = 'id'

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
    return `Harap setujui ${name}.`
  },

  /**
   * The date is not after.
   */
  after: function ({ name, args }) {
    if (Array.isArray(args) && args.length) {
      return `${s(name)} harus setelah ${args[0]}.`
    }
    return `${s(name)} harus tanggal setelahnya.`
  },

  /**
   * The value is not a letter.
   */
  alpha: function ({ name }) {
    return `${s(name)} hanya boleh diisi karakter alfabet.`
  },

  /**
   * Rule: checks if the value is alpha numeric
   */
  alphanumeric: function ({ name }) {
    return `${s(name)} hanya boleh diisi huruf dan angka.`
  },

  /**
   * The date is not before.
   */
  before: function ({ name, args }) {
    if (Array.isArray(args) && args.length) {
      return `${s(name)} harus setelah ${args[0]}.`
    }
    return `${s(name)} harus tanggal sebelumnya.`
  },

  /**
   * The value is not between two numbers or lengths
   */
  between: function ({ name, value, args }) {
    const force = Array.isArray(args) && args[2] ? args[2] : false
    if ((!isNaN(value) && force !== 'length') || force === 'value') {
      return `${s(name)} harus antara ${args[0]} sampai ${args[1]}.`
    }
    return `${s(name)} harus antara ${args[0]} sampai ${args[1]} karakter.`
  },

  /**
   * The confirmation field does not match
   */
  confirm: function ({ name, args }) {
    return `${s(name)} tidak cocok.`
  },

  /**
   * Is not a valid date.
   */
  date: function ({ name, args }) {
    if (Array.isArray(args) && args.length) {
      return `${s(name)} bukan tanggal yang sah, harap gunakan format ${args[0]}`
    }
    return `${s(name)} bukan tanggal yang sah.`
  },

  /**
   * The default render method for error messages.
   */
  default: function ({ name }) {
    return `Bilah ini tidak sah.`
  },

  /**
   * Is not a valid email address.
   */
  email: function ({ name, value }) {
    if (!value) {
      return 'Harap masukkan alamat email yang sah.'
    }
    return `“${value}” bukan alamat email yang sah.`
  },

  /**
   * Ends with specified value
   */
  endsWith: function ({ name, value }) {
    if (!value) {
      return `Bilah ini tidak diakhiri dengan nilai yang sah.`
    }
    return `“${value}” tidak diakhiri dengan nilai yang sah.`
  },

  /**
   * Value is an allowed value.
   */
  in: function ({ name, value }) {
    if (typeof value === 'string' && value) {
      return `“${s(value)}” bukan merupakan ${name} yang diizinkan.`
    }
    return `Ini bukan merupakan ${name} yang diizinkan.`
  },

  /**
   * Value is not a match.
   */
  matches: function ({ name }) {
    return `${s(name)} bukan merupakan nilai yang diizinkan.`
  },

  /**
   * The maximum value allowed.
   */
  max: function ({ name, value, args }) {
    if (Array.isArray(value)) {
      return `Anda hanya boleh memilih ${args[0]} ${name}.`
    }
    const force = Array.isArray(args) && args[1] ? args[1] : false
    if ((!isNaN(value) && force !== 'length') || force === 'value') {
      return `${s(name)} harus kurang dari atau sama dengan ${args[0]}.`
    }
    return `${s(name)} harus kurang dari atau sama dengan ${args[0]} karakter.`
  },

  /**
   * The (field-level) error message for mime errors.
   */
  mime: function ({ name, args }) {
    return `${s(name)} harus bertipe: ${args[0] || 'Tidak ada format file yang diizinkan.'}`
  },

  /**
   * The maximum value allowed.
   */
  min: function ({ name, value, args }) {
    if (Array.isArray(value)) {
      return `Anda memerlukan setidaknya ${args[0]} ${name}.`
    }
    const force = Array.isArray(args) && args[1] ? args[1] : false
    if ((!isNaN(value) && force !== 'length') || force === 'value') {
      return `${s(name)} harus setidaknya ${args[0]}.`
    }
    return `${s(name)} harus setidaknya ${args[0]} karakter.`
  },

  /**
   * The field is not an allowed value
   */
  not: function ({ name, value }) {
    return `“${value}” bukan merupakan ${name} yang sah.`
  },

  /**
   * The field is not a number
   */
  number: function ({ name }) {
    return `${s(name)} harus berupa angka.`
  },

  /**
   * Required field.
   */
  required: function ({ name }) {
    return `${s(name)} wajib diisi.`
  },

  /**
   * Starts with specified value
   */
  startsWith: function ({ name, value }) {
    if (!value) {
      return `Bilah ini tidak diawali dengan nilai yang sah.`
    }
    return `“${value}” tidak diawali dengan nilai yang sah.`
  },

  /**
   * Value is not a url.
   */
  url: function ({ name }) {
    return `Harap masukkan url yang sah.`
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
