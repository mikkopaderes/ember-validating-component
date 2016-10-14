import Ember from 'ember';
import ValidatingComponentInitializer from 'dummy/initializers/validating-component';
import { module, test } from 'qunit';

let application;

module('Unit | Initializer | validating component', {
  beforeEach() {
    Ember.run(function() {
      application = Ember.Application.create();
      application.deferReadiness();
    });
  }
});

// Replace this with your real tests.
test('it works', function(assert) {
  ValidatingComponentInitializer.initialize(application);

  // you would normally confirm the results of the initializer here
  assert.ok(true);
});
