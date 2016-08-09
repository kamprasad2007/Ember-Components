import Ember from 'ember';
import BaseInput from './core-input';
import layout from '../templates/components/core-textarea';

export default BaseInput.extend({
  layout,
  max : 140,
  keyUp:function(e){
  	this.set('length',$(e.target).val().length);
  },
});
