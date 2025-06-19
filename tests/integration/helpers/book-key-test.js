import { module, test } from 'qunit';
import { setupRenderingTest } from 'book-explorer/tests/helpers';
import isolateKey from 'book-explorer/helpers/book-key';

module('Integration | Helper | book-key', function (hooks) {
  setupRenderingTest(hooks);

  test('it only leaves the id from the books key attribute', async function(assert) {
    const result = isolateKey('/works/290vns')

    assert.equal(result, '290vns');
  });
});
