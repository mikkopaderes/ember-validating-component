# Ember Validating Component

Gone are the days where you forgot to pass an argument from a parent to a child 
component. This addon will throw an error *only* in your test runs whenever a 
required argument is undefined or its type is invalid.

## Compatibility

Supports Ember CLI v2.8-LTS.

I'm planning to support only the latest LTS versions of Ember. I won't be doing 
tests for any versions other than that.

## Usage

To install this addon using Ember CLI, use this command:

```bash
ember install ember-validating-components
```

Then in your component.js:

```js
import Component from 'ember-validating-component/components/base-component';

export default Component.extend({
  argValidations: {
    firstName: {
      isRequired: true,
      type: 'string'
    },
    lastName: {
      isRequired: true,
      type: 'string'
    },
    age: {
      isRequired: true,
      type: 'number'
    }
  }
});
```

Currently only supports validations for required fields and data type. To see 
what types are available, 
see [Ember.typeOf](http://emberjs.com/api/classes/Ember.html#method_typeOf).

## Caveat

When your data is async, the `isRequired` will fail since the data originally 
will be undefined until it resolves and passes the correct value.

Current workarounds:

* Make sure async data resolves first before rendering component.
* Set `isRequired` to false since in essence, you're allowing the argument to be undefined if you use async.

I don't have any plans as of the moment to seemlessly support async data. 
I'm open to PRs if anyone has a good idea on how to handle it.

## Installation

* `git clone <repository-url>` this repository
* `cd ember-validating-component`
* `npm install`
* `bower install`

## Running

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

## Running Tests

* `npm test` (Runs `ember try:each` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://ember-cli.com/](http://ember-cli.com/).
