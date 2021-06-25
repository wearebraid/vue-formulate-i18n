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
 const locale = 'yo'
 
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
     return `Jọwọ gba awọn ${name}.`
   },
 
   /**
    * The date is not after.
    */
   after: function ({ name, args }) {
     if (Array.isArray(args) && args.length) {
       return `${s(name)} gbọdọ jẹ lẹhin ${args[0]}.`
     }
     return `${s(name)} gbọdọ jẹ ọjọ ti o pẹ.`
   },
 
   /**
    * The value is not a letter.
    */
   alpha: function ({ name }) {
     return `${s(name)} le ni awọn ohun kikọ labidi nikan.`
   },
 
   /**
    * Rule: checks if the value is alpha numeric
    */
   alphanumeric: function ({ name }) {
     return `${s(name)} le nikan ni awọn lẹta ati awọn nọmba ninu.`
   },
 
   /**
    * The date is not before.
    */
   before: function ({ name, args }) {
     if (Array.isArray(args) && args.length) {
       return `${s(name)} gbọdọ wa ṣaaju ${args[0]}.`
     }
     return `${s(name)} gbọdọ jẹ ọjọ iṣaaju.`
   },
 
   /**
    * The value is not between two numbers or lengths
    */
   between: function ({ name, value, args }) {
     const force = Array.isArray(args) && args[2] ? args[2] : false
     if ((!isNaN(value) && force !== 'length') || force === 'value') {
       return `${s(name)} gbọdọ wa laarin awọn ${args[0]} ati ${args[1]}.`
     }
     return `${s(name)} gbọdọ wa laarin awọn ${args[0]} ati awọn ohun kikọ ${args[1]} pẹ.`
   },
 
   /**
    * The confirmation field does not match
    */
   confirm: function ({ name, args }) {
     return `${s(name)} ko baramu.`
   },
 
   /**
    * Is not a valid date.
    */
   date: function ({ name, args }) {
     if (Array.isArray(args) && args.length) {
       return `${s(name)} kii ṣe ọjọ ti o wulo, jọwọ lo ọna kika ${args[0]}`
     }
     return `${s(name)} kii ṣe ọjọ to wulo.`
   },
 
   /**
    * The default render method for error messages.
    */
   default: function ({ name }) {
     return `Aaye yii ko wulo.`
   },
 
   /**
    * Is not a valid email address.
    */
   email: function ({ name, value }) {
     if (!value) {
       return 'Jowo fun fun wa ni imeli re to je otito.'
     }
     return `“${value}” kii ṣe adirẹsi imeeli to wulo.`
   },
 
   /**
    * Ends with specified value
    */
   endsWith: function ({ name, value }) {
     if (!value) {
       return `Aaye yii ko pari pẹlu iye to wulo.`
     }
     return `“${value}” ko pari pẹlu iye to wulo.`
   },
 
   /**
    * Value is an allowed value.
    */
   in: function ({ name, value }) {
     if (typeof value === 'string' && value) {
       return `“${s(value)}” kii ṣe ${name} ti o gba laaye.`
     }
     return `Eyi kii ṣe ${name} ti o gba laaye.`
   },
 
   /**
    * Value is not a match.
    */
   matches: function ({ name }) {
     return `${s(name)} kii ṣe iye ti a gba laaye.`
   },
 
   /**
    * The maximum value allowed.
    */
   max: function ({ name, value, args }) {
     if (Array.isArray(value)) {
       return `O le yan ${args[0]} ${name} nikan.`
     }
     const force = Array.isArray(args) && args[1] ? args[1] : false
     if ((!isNaN(value) && force !== 'length') || force === 'value') {
       return `${s(name)} gbọdọ jẹ kere ju tabi dogba si ${args[0]}.`
     }
     return `${s(name)} gbọdọ jẹ kere ju tabi dogba si awọn ohun kikọ ${args[0]} pẹ.`
   },
 
   /**
    * The (field-level) error message for mime errors.
    */
   mime: function ({ name, args }) {
     return `${s(name)} gbọdọ jẹ ti iru: ${args[0] || 'Ko si awọn ọna kika faili laaye.'}`
   },
 
   /**
    * The maximum value allowed.
    */
   min: function ({ name, value, args }) {
     if (Array.isArray(value)) {
       return `O nilo ni o kere ${args[0]} ${name}.`
     }
     const force = Array.isArray(args) && args[1] ? args[1] : false
     if ((!isNaN(value) && force !== 'length') || force === 'value') {
       return `${s(name)} gbọdọ jẹ o kere ${args[0]}.`
     }
     return `${s(name)} gbọdọ jẹ o kere ju awọn kikọ ${args[0]} gun.`
   },
 
   /**
    * The field is not an allowed value
    */
   not: function ({ name, value }) {
     return `“${value}” kii ṣe ${name} ti o gba laaye.`
   },
 
   /**
    * The field is not a number
    */
   number: function ({ name }) {
     return `${s(name)} gbọdọ jẹ nọmba kan.`
   },
 
   /**
    * Required field.
    */
   required: function ({ name }) {
     return `${s(name)} nilo.`
   },
 
   /**
    * Starts with specified value
    */
   startsWith: function ({ name, value }) {
     if (!value) {
       return `Aaye yii ko bẹrẹ pẹlu iye to wulo.`
     }
     return `“${value}” ko bẹrẹ pẹlu iye to wulo.`
   },
 
   /**
    * Value is not a url.
    */
   url: function ({ name }) {
     return `Jọwọ ṣafikun url to wulo kan.`
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
 