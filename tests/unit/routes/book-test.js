import { module, test } from 'qunit';
import { setupTest } from 'book-explorer/tests/helpers';

module('Unit | Route | book', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:book');
    assert.ok(route);
  });
});
