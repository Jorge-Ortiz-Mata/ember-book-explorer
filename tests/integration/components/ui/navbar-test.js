import { module, test } from 'qunit';
import { setupRenderingTest } from 'book-explorer/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | navbar', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders the component with the logo and links', async function (assert) {
    await render(hbs`<Ui::Navbar />`);

    assert.dom().hasAnyText('Book Explorer');
    assert.dom().hasAnyText('EmberJS App');
    assert.dom().hasAnyText('Home');
    assert.dom().hasAnyText('Explorer');
  });
});
