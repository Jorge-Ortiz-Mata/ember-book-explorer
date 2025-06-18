import { module, test } from 'qunit';
import { setupTest } from 'book-explorer/tests/helpers';

module('Unit | Route | explorer', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:explorer');
    assert.ok(route);
  });
});
