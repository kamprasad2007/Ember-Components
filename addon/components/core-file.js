import Ember from 'ember';
import layout from '../templates/components/core-file';

export default Ember.Component.extend({
  layout,
  fileType: null,
  fileTypeCss: '',
  classNameBindings: ['isDisabled:button_status_disabled-light:button_color_light'],

  init() {
    this._super(...arguments);
    let type = this.get('fileType');
    if(type ==="xls"){

    	this.set('fileTypeCss','global-file-type_xls');
    }
    else if(type ==='pdf'){
    	this.set('fileTypeCss','global-file-type_pdf');
    }
  },
});
