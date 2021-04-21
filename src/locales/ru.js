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
const locale = 'ru'

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
   * Valid accepted value | Корректное требуемое поле.
   */
  accepted: function ({ name }) {
    return `Пожалуйста, подтвердите ${name}.`
  },

  /**
   * The date is not after | Дата больше разрешенной.
   */
  after: function ({ name, args }) {
    if (Array.isArray(args) && args.length) {
      return `${s(name)} должна быть больше ${args[0]}.`
    }
    return `${s(name)} должна быть больше разрешенной.`
  },

  /**
   * The value is not a letter | Значение может содержать только буквы.
   */
  alpha: function ({ name }) {
    return `${s(name)} может содержать только буквы.`
  },

  /**
   * Rule: checks if the value is alpha numeric | Значение может содержать только буквы и цифры.
   */
  alphanumeric: function ({ name }) {
    return `${s(name)} может содержать только буквы и цифры.`
  },

  /**
   * The date is not before | Дата позже разрешенной.
   */
  before: function ({ name, args }) {
    if (Array.isArray(args) && args.length) {
      return `Дата в ${s(name)} должна быть меньше ${args[0]}.`
    }
    return `Дата в ${s(name)} должна быть меньше разрешенной.`
  },

  /**
   * The value is not between two numbers or lengths | Значение должно быть между.
   */
  between: function ({ name, value, args }) {
    const force = Array.isArray(args) && args[2] ? args[2] : false
    if ((!isNaN(value) && force !== 'length') || force === 'value') {
      return `${s(name)} должно быть между ${args[0]} и ${args[1]}.`
    }
    return `${s(name)} должно быть между ${args[0]} и ${args[1]}.`
  },

  /**
   * The confirmation field does not match | Поле подтверждения не совпадает.
   */
  confirm: function ({ name, args }) {
    return `${s(name)} не совпадает.`
  },

  /**
   * Is not a valid date | Не является допустимой датой.
   */
  date: function ({ name, args }) {
    if (Array.isArray(args) && args.length) {
      return `${s(name)} некорректный формат даты, пожалуйста, укажите дату в формате ${args[0]}`
    }
    return `${s(name)} некорректный формат даты.`
  },

  /**
   * The default render method for error messages | Это поле некорректно.
   */
  default: function ({ name }) {
    return `Поле заполнено некорректно.`
  },

  /**
   * Is not a valid email address | Некорректный адрес электронной почты.
   */
  email: function ({ name, value }) {
    if (!value) {
      return 'Пожалуйста, введите корректный адрес электронной почты.'
    }
    return `“${value}” некорректный адрес электронной почты.`
  },

  /**
   * Ends with specified value | Не заканчивается допустимым значением.
   */
  endsWith: function ({ name, value }) {
    if (!value) {
      return `Поле заканчивается не допустимым значением.`
    }
    return `“${value}” заканчивается не допустимым значением.`
  },

  /**
   * Value is an allowed value | Выбранное значение ошибочно.
   */
  in: function ({ name, value }) {
    if (typeof value === 'string' && value) {
      return `“${s(value)}” является некорректным для ${name}.`
    }
    return `Выбранное значение для ${name} некорректно.`
  },

  /**
   * Value is not a match | Значение не соответствует допустимым.
   */
  matches: function ({ name }) {
    return `${s(name)} не соответствует допустимым значениям.`
  },

  /**
   * The maximum value allowed | Максимально допустимое значение.
   */
  max: function ({ name, value, args }) {
    if (Array.isArray(value)) {
      return `Вы можете выбрать только ${args[0]} ${name}.`
    }
    const force = Array.isArray(args) && args[1] ? args[1] : false
    if ((!isNaN(value) && force !== 'length') || force === 'value') {
      return `${s(name)} должно быть меньше или равно ${args[0]}.`
    }
    return `Количество символов ${s(name)} должно быть меньше или равно ${args[0]}.`
  },

  /**
   * The (field-level) error message for mime errors.
   */
  mime: function ({ name, args }) {
    return `Формат ${s(name)} может быть следующих типов: ${args[0] || 'Недопустимый формат.'}`
  },

  /**
   * The maximum value allowed | Максимально допустимое значение.
   */
  min: function ({ name, value, args }) {
    if (Array.isArray(value)) {
      return `Должно быть больше ${args[0]} ${name}.`
    }
    const force = Array.isArray(args) && args[1] ? args[1] : false
    if ((!isNaN(value) && force !== 'length') || force === 'value') {
      return `${s(name)} должно быть больше или равно ${args[0]}.`
    }
    return `Количество символов ${s(name)} должно быть больше или равно ${args[0]}.`
  },

  /**
   * The field is not an allowed value | Поле не является допустимым значением.
   */
  not: function ({ name, value }) {
    return `“${value}” недопустимое значение ${name}.`
  },

  /**
   * The field is not a number | Поле не является числом.
   */
  number: function ({ name }) {
    return `${s(name)} должны быть числом.`
  },

  /**
   * Required field | Обязательное поле.
   */
  required: function ({ name }) {
    return `${s(name)} обязательное поле.`
  },

  /**
   * Starts with specified value | Поле должно начинаться действительным значением.
   */
  startsWith: function ({ name, value }) {
    if (!value) {
      return `Поле начинается с некорректного значения.`
    }
    return `“${value}” должно начинаться с корректного значения.`
  },

  /**
   * Value is not a url | Действительный URL.
   */
  url: function ({ name }) {
    return `Пожалуйста, укажите корректный URL.`
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
