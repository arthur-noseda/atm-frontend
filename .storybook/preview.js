import Vue from 'vue'
import i18n from '../src/i18n'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

export const decorators = [
  (story, context) => {
    const wrapped = story(context);
    return Vue.extend({
      i18n,
      beforeCreate: function() {
        this.$root._i18n = this.$i18n;
      },
      components: { wrapped },
      template: `<wrapped />`,
    });
  },
];
