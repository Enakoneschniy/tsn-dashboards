import Vue from 'vue'
import { ValidationProvider, ValidationObserver, extend, configure, localize } from 'vee-validate'
import { required, email, min } from 'vee-validate/dist/rules'
import en from 'vee-validate/dist/locale/en.json'
import fr from 'vee-validate/dist/locale/fr.json'

// import { required, email, min } from 'vee-validate/dist/rules'

// Install required rule.
extend('required', required)

// Install email rule.
extend('email', email)

// Install min rule.
extend('min', min)

configure({
  classes: {
    valid: 'is-valid',
    invalid: 'has-error',
    dirty: ['is-dirty', 'is-dirty'] // multiple classes per flag!
    // ...
  }
})

// Install English and Arabic localizations.
localize({
  en: {
    messages: en.messages,
    names: {
      email: 'E-mail Address',
      password: 'Password',
      firstName: 'First Name',
      lastName: 'Last Name'
    },
    fields: {
      password: {
        min: '{_field_} is too short, you want to get hacked?'
      }
    }
  },
  fr: {
    messages: fr.messages,
    names: {
      email: 'E-mail Address fr',
      password: 'Password fr',
      firstName: 'First Name fr',
      lastName: 'Last Name fr'
    },
    fields: {
      password: {
        min: '{_field_} is too short, you want to get hacked?'
      }
    }
  }
})
// Register it globally
Vue.component('ValidationProvider', ValidationProvider)
Vue.component('ValidationObserver', ValidationObserver)
