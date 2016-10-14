import ValidatingComponent from 'ember-validating-component/components/validating-component';

export function initialize() {
  ValidatingComponent.reopen();
}

export default {
  name: 'validating-component',
  initialize
};
