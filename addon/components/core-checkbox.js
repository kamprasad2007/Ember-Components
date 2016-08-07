//import Ember from 'ember';
//import layout from '../templates/components/core-checkbox';
//
//export default Ember.Component.extend({
//  layout
//});

import Ember from 'ember';
import SelectableItem from './selectable-item';
import layout from '../templates/components/core-checkbox';

const { computed: { alias } } = Ember;

export default SelectableItem.extend({
  layout,
  text: alias('name'),
  classNames: ['materialize-checkbox']
});
