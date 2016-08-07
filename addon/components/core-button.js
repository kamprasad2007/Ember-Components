//import Ember from 'ember';
//import layout from '../templates/components/core-button';
//
//export default Ember.Component.extend({
//  layout
//});


import Ember from 'ember';
//import UsesSettings from '../mixins/uses-settings';
import layout from '../templates/components/core-button';

const { Component, computed, typeOf, run: { scheduleOnce } } = Ember;
//'button', 'button_color_light', 'button-ripple'
export default Component.extend( {
  layout,
  tagName: 'a',
  //classNameBindings: ['btn:waves-effect', 'wavesClass', 'isDisabled:disabled:waves-effect', 'buttonClass'],
  classNames: ['button', 'button-ripple'],
  //classNameBindings :['isDisabled'],
  classNameBindings: ['isDisabled:button_status_disabled-light:button_color_light'],
  wavesClass: 'waves-light',
  text: null,
  icon: null,
  iconPosition: null,
  buttonType: null,
  actionArg: null,
  isFlat: computed.equal('buttonType', 'flat'),
  isDisabled: false,

  init() {
    this._super(...arguments);
    if (!this.get('iconPosition')) {
      this.set('iconPosition', this.get('_mdSettings.buttonIconPosition'));
    }
  },

  didInsertElement() {
    this._super(...arguments);
    scheduleOnce('afterRender', this, this._setupWaves);
  },

  buttonClass: computed('buttonType', function() {
    const buttonType = this.get('buttonType');
    return buttonType ? `btn-${buttonType}` : 'btn';
  }),

  _setupWaves() {
    const Waves = window.Waves || {};
    if (typeOf(Waves.displayEffect) === 'function') {
      Waves.displayEffect();
    }
  },

  click() {
    if (!this.get('disabled')) {
      this.sendAction('action', this.get('actionArg'));
    }
  }
});