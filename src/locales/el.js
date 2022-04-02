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
const locale = 'el'

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
    return `Παρακαλώ επιλέξτε το πεδίο ${name}.`
  },

  /**
   * The date is not after.
   */
  after: function ({ name, args }) {
    if (Array.isArray(args) && args.length) {
      return `Η τιμή του πεδίου ${s(name)} πρέπει να είναι μεταγενέστερη της ${args[0]}.`
    }
    return `Η τιμή του πεδίου ${s(name)} πρέπει να είναι μια μεταγενέστερη ημερομηνία.`
  },

  /**
   * The value is not a letter.
   */
  alpha: function ({ name }) {
    return `Το πεδίο ${s(name)} μπορεί να περιέχει μόνο αλφαριθμητικούς χαρακτήρες.`
  },

  /**
   * Rule: checks if the value is alpha numeric
   */
  alphanumeric: function ({ name }) {
    return `Το πεδίο ${s(name)} μπορεί να περιέχει μόνο γράμματα και αριθμούς.`
  },

  /**
   * The date is not before.
   */
  before: function ({ name, args }) {
    if (Array.isArray(args) && args.length) {
      return `Η τιμή του πεδίου ${s(name)} πρέπει να είναι προγενέστερη της ${args[0]}.`
    }
    return `Η τιμή του πεδίου ${s(name)} πρέπει να είναι μια προγενέστερη ημερομηνία.`
  },

  /**
   * The value is not between two numbers or lengths
   */
  between: function ({ name, value, args }) {
    const force = Array.isArray(args) && args[2] ? args[2] : false
    if ((!isNaN(value) && force !== 'length') || force === 'value') {
      return `Η τιμή του πεδίου ${s(name)} πρέπει να είναι μεταξύ ${args[0]} και ${args[1]}.`
    }
    return `Το μήκος της τιμής του πεδίου ${s(name)} πρέπει να είναι μεταξύ ${args[0]} και ${args[1]} χαρακτήρων.`
  },

  /**
   * The confirmation field does not match
   */
  confirm: function ({ name, args }) {
    return `Το πεδίο ${s(name)} δεν ταιριάζει.`
  },

  /**
   * Is not a valid date.
   */
  date: function ({ name, args }) {
    if (Array.isArray(args) && args.length) {
      return `Η ημερομηνία του πεδίου ${s(name)} δεν έχει έγκυρη μορφή, παρακαλώ χρησιμοποιήστε τη μορφή ${args[0]}`
    }
    return `Η ημερομηνία του πεδίου ${s(name)} δεν έχει έγκυρη μορφή.`
  },

  /**
   * The default render method for error messages.
   */
  default: function ({ name }) {
    return `Αυτό το πεδίο δεν είναι έγκυρο.`
  },

  /**
   * Is not a valid email address.
   */
  email: function ({ name, value }) {
    if (!value) {
      return 'Παρακαλώ εισάγετε μια έγκυρη διεύθυνση email.'
    }
    return `Η τιμή του πεδίου “${value}” δεν είναι μια έγκυρη διεύθυνση email.`
  },

  /**
   * Ends with specified value
   */
  endsWith: function ({ name, value }) {
    if (!value) {
      return `Αυτό το πεδίο δεν τελειώνει με μια έγκυρη τιμή.`
    }
    return `“Η τιμή του πεδίου ${value}” δεν τελειώνει με μια έγκυρη τιμή.`
  },

  /**
   * Value is an allowed value.
   */
  in: function ({ name, value }) {
    if (typeof value === 'string' && value) {
      return `Η τιμή “${s(value)}” δεν είναι επιτρεπτή τιμή για το πεδίο ${name}.`
    }
    return `Αυτή δεν είναι μια επιτρεπτή τιμή για το πεδίο ${name}.`
  },

  /**
   * Value is not a match.
   */
  matches: function ({ name }) {
    return `Η τιμή του πεδίου ${s(name)} δεν είναι αποδεκτή.`
  },

  /**
   * The maximum value allowed.
   */
  max: function ({ name, value, args }) {
    if (Array.isArray(value)) {
      return `Επιτρέπετε να επιλέξετε το πολύ ${args[0]} ${name}.`
    }
    const force = Array.isArray(args) && args[1] ? args[1] : false
    if ((!isNaN(value) && force !== 'length') || force === 'value') {
      return `Η τιμή του πεδίου ${s(name)} πρέπει να είναι λιγότερο ή ίσο με ${args[0]}.`
    }
    return `Το μήκος της τιμής του πεδίου ${s(name)} πρέπει να είναι λιγότερο ή ίσο με ${args[0]} χαρακτήρες.`
  },

  /**
   * The (field-level) error message for mime errors.
   */
  mime: function ({ name, args }) {
    return `Ο τύπος του αρχείου για το πεδίο ${s(name)} πρέπει να είναι: ${args[0] || 'Μη επιτρεπτές μορφές αρχείων.'}`
  },

  /**
   * The maximum value allowed.
   */
  min: function ({ name, value, args }) {
    if (Array.isArray(value)) {
      return `Πρέπει να επιλέξετε τουλάχιστον ${args[0]} ${name}.`
    }
    const force = Array.isArray(args) && args[1] ? args[1] : false
    if ((!isNaN(value) && force !== 'length') || force === 'value') {
      return `Η τιμή του πεδίου ${s(name)} πρέπει να είναι τουλάχιστον ${args[0]}.`
    }
    return `Το μήκος της τιμής του πεδίου ${s(name)} πρέπει να είναι τουλάχιστον ${args[0]} χαρακτήρες.`
  },

  /**
   * The field is not an allowed value
   */
  not: function ({ name, value }) {
    return `Η τιμή “${value}” δεν επιτρέπετε στο πεδίο ${name}.`
  },

  /**
   * The field is not a number
   */
  number: function ({ name }) {
    return `Η τιμή του πεδίου ${s(name)} πρέπει να είναι αριθμός.`
  },

  /**
   * Required field.
   */
  required: function ({ name }) {
    return `Το πεδίο ${s(name)} είναι απαραίτητο.`
  },

  /**
   * Starts with specified value
   */
  startsWith: function ({ name, value }) {
    if (!value) {
      return `Αυτό το πεδίο δεν αρχίζει με μια έγκυρη τιμή.`
    }
    return `Η τιμή “${value}” δεν αρχίζει με μια έγκυρη τιμή.`
  },

  /**
   * Value is not a url.
   */
  url: function ({ name }) {
    return `Παρακαλώ εισάγετε μια έγκυρη τιμή URL.`
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
