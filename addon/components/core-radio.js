//import Ember from 'ember';
//import layout from '../templates/components/core-radio';
//
//export default Ember.Component.extend({
//  layout
//});

import Ember from 'ember';
//import SelectableItem from './selectable-item';
import layout from '../templates/components/core-radio';

const { computed: { alias }, isEmpty, assert,Component } = Ember;

export default Component.extend({
  actions:{
    checked: function(){
      this.set('isChecked', !this.get('isChecked'));
    },
    click:function(){
      $(this.element).find('.global-ripple').trigger('mousedown');
      $(this.element).find('.global-ripple').trigger('mouseup');
      this.set('isChecked', !this.get('isChecked'));
    }
  },
  attributeBindings:['isChecked:checked'],
  layout,
  value: '',
  isChecked: false,
  text: alias('name'),
  groupValue: alias('group.selection'),

  didInsertElement() {
    this._super(...arguments);
    assert(!isEmpty(this.get('group')), 'materialize-radio is not supported outside the context of a materialize-radio-group');
  }
});
