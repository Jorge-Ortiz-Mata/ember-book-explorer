import { module, test } from 'qunit';
import { setupRenderingTest } from 'book-explorer/tests/helpers';
import authorName from 'book-explorer/helpers/author-name';

module('Integration | Helper | author-name', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    const result = authorName('Luis Perez');

    assert.equal(result, 'luis-perez');
  });
});
