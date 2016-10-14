import { moduleForComponent, test } from 'ember-qunit';

moduleForComponent('validating-component', 'Unit | Component | validating component', {
  // Specify the other units that are required for this test
  // needs: ['component:foo', 'helper:bar'],
  unit: true
});

test('should not throw any error', function(assert) {
  assert.expect(1);

  // Arrange
  this.subject({
    attrs: {
      name: 'Foo'
    },

    argValidations: {
      name: {
        isRequired: true,
        type: 'string'
      }
    }
  });

  assert.ok(true);
});

test('should throw an is required error', function(assert) {
  assert.expect(1);

  assert.throws(() => {
    this.subject({
      argValidations: {
        name: {
          isRequired: true,
          type: 'string'
        }
      }
    });
  }, Error("Assertion Failed: Required attribute name is undefined"));
});

test('should throw a type error', function(assert) {
  assert.expect(1);

  assert.throws(() => {
    this.subject({
      attrs: {
        name: 'Foo'
      },

      argValidations: {
        name: {
          isRequired: true,
          type: 'number'
        }
      }
    });
  }, Error("Assertion Failed: Argument name should be of type number"));
});
