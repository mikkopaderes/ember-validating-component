import { assert } from 'ember-metal/utils';
import { isNone, typeOf } from 'ember-utils';
import Component from 'ember-component';

import config from 'ember-get-config';

export default Component.extend({
  didReceiveAttrs() {
    this._super(...arguments);

    this._validateArgs();
  },

  /**
   * Validate the component's arguments during test runs
   */
  _validateArgs() {
    if (config.environment === 'test') {
      let argValidations = this.get('argValidations');

      for (let argKey in argValidations) {
        let argValidation = argValidations[argKey];
        let argValidationType = argValidation.type;
        let argValue = this.getAttr(argKey);

        if (argValidation.isRequired) {
          this._validateIsRequired(argKey, argValue);
        }

        if (argValidationType && !isNone(argValue)) {
          this._validateType(argKey, argValue, argValidationType);
        }
      }
    }
  },

  /**
   * Validate isRequired
   *
   * @param {string} argKey Argument key
   * @param {string} argValue Argument value
   */
  _validateIsRequired(argKey, argValue) {
    if (isNone(argValue)) {
      assert(`Required attribute ${argKey} is undefined`);
    }
  },

  /**
   * Validate type
   *
   * @param {string} argKey Argument key
   * @param {string} argValue Argument value
   * @param {string} type Expected type
   */
  _validateType(argKey, argValue, expectedType) {
    if (typeOf(argValue) !== expectedType) {
      assert(`Argument ${argKey} should be of type ${expectedType}`);
    }
  }
});
