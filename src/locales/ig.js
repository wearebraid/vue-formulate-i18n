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
 const locale = 'ig'
 
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
     return `Biko nabata ${name}.`
   },
 
   /**
    * The date is not after.
    */
   after: function ({ name, args }) {
     if (Array.isArray(args) && args.length) {
       return `${s(name)} ga-enwerịrị mgbe ${args[0]}.`
     }
     return `${s(name)} ga-abụ ụbọchị na-esote.`
   },
 
   /**
    * The value is not a letter.
    */
   alpha: function ({ name }) {
     return `${s(name)} nwere ike ịnwe mkpụrụedemede naanị.`
   },
 
   /**
    * Rule: checks if the value is alpha numeric
    */
   alphanumeric: function ({ name }) {
     return `${s(name)} nwere ike ibu naanị leta na nọmba.`
   },
 
   /**
    * The date is not before.
    */
   before: function ({ name, args }) {
     if (Array.isArray(args) && args.length) {
       return `${s(name)} ga-anọru ${args[0]}.`
     }
     return `${s(name)} ga-abụrịrị ụbọchị gara aga.`
   },
 
   /**
    * The value is not between two numbers or lengths
    */
   between: function ({ name, value, args }) {
     const force = Array.isArray(args) && args[2] ? args[2] : false
     if ((!isNaN(value) && force !== 'length') || force === 'value') {
       return `${s(name)} must be between ${args[0]} and ${args[1]}.`
     }
     return `${s(name)} ga-adị n'etit ${args[0]} na mkpụrụedemede ${args[1]} ogologo.`
   },
 
   /**
    * The confirmation field does not match
    */
   confirm: function ({ name, args }) {
     return `${s(name)} adabaghị.`
   },
 
   /**
    * Is not a valid date.
    */
   date: function ({ name, args }) {
     if (Array.isArray(args) && args.length) {
       return `${s(name)} abụghị ezigbo ụbọchị, biko jiri usoro ${args[0]}`
     }
     return `${s(name)} abụghị ezigbo ụbọchị.`
   },
 
   /**
    * The default render method for error messages.
    */
   default: function ({ name }) {
     return `Ala a anaghị arụ ọrụ.`
   },
 
   /**
    * Is not a valid email address.
    */
   email: function ({ name, value }) {
     if (!value) {
       return 'Biko tinye adreesị ozi ịntanetị dabara adaba.'
     }
     return `“${value}” abụghị ezigbo adreesị ozi-e.`
   },
 
   /**
    * Ends with specified value
    */
   endsWith: function ({ name, value }) {
     if (!value) {
       return `Ala a anaghị ejedebe uru dị irè.`
     }
     return `“${value}” anaghị ejedebe uru bara uru.`
   },
 
   /**
    * Value is an allowed value.
    */
   in: function ({ name, value }) {
     if (typeof value === 'string' && value) {
       return `“${s(value)}” abụghị ezigbo ${name}.`
     }
     return `Nke a ekweghi ${name}.`
   },
 
   /**
    * Value is not a match.
    */
   matches: function ({ name }) {
     return `${s(name)} abụghị uru kwere.`
   },
 
   /**
    * The maximum value allowed.
    */
   max: function ({ name, value, args }) {
     if (Array.isArray(value)) {
       return `I nwere ike họrọ naanị ${args[0]} ${name}.`
     }
     const force = Array.isArray(args) && args[1] ? args[1] : false
     if ((!isNaN(value) && force !== 'length') || force === 'value') {
       return `${s(name)} ga-erughị ma ọ bụ hara ka ${args[0]}.`
     }
     return `${s(name)} ga-erugharị ma ọ bụ hara ka mkpụrụedemede ${args[0]}.`
   },
 
   /**
    * The (field-level) error message for mime errors.
    */
   mime: function ({ name, args }) {
     return `${s(name)} ga-abụrịrị nke ụdị ahụ: ${args[0] || 'Onweghị ụdị faịlị kwere..'}`
   },
 
   /**
    * The maximum value allowed.
    */
   min: function ({ name, value, args }) {
     if (Array.isArray(value)) {
       return `I choro opekata mpe ${args[0]} ${name}.`
     }
     const force = Array.isArray(args) && args[1] ? args[1] : false
     if ((!isNaN(value) && force !== 'length') || force === 'value') {
       return `${s(name)} ga-abụrịrị opekata mpe ${args[0]}.`
     }
     return `${s(name)} ga-opekata mpe mkpụrụ edemede ${args[0]} ogologo.`
   },
 
   /**
    * The field is not an allowed value
    */
   not: function ({ name, value }) {
     return `“${value}” abụghị ikike ${name}.`
   },
 
   /**
    * The field is not a number
    */
   number: function ({ name }) {
     return `${s(name)} ga-abụ ọnụ ọgụgụ.`
   },
 
   /**
    * Required field.
    */
   required: function ({ name }) {
     return `${s(name)} achọrọ.`
   },
 
   /**
    * Starts with specified value
    */
   startsWith: function ({ name, value }) {
     if (!value) {
       return `Ala a anaghị ebido uru bara uru.`
     }
     return `“${value}” anaghị ebido uru bara uru.`
   },
 
   /**
    * Value is not a url.
    */
   url: function ({ name }) {
     return `Biko tinye url ziri ezi.`
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
 