import { module, test } from 'qunit';
import { setupRenderingTest } from 'book-explorer/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | ui/button', function (hooks) {
  setupRenderingTest(hooks);

  this.id = 'button-id';
  this.name = 'button-name';
  this.style = 'primary';
  this.label = 'Save';

  test('', async function (assert) {
    await render(
      hbs`
        <Ui::Button 
          @id={{this.id}}
          @name={{this.name}}
          @style={{this.style}}
          @label={{this.label}}
        />
      `,
    );

    assert.dom('button').hasText(this.label);
  });
});
