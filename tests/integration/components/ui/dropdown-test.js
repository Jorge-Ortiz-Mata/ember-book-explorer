import { module, test } from 'qunit';
import { setupRenderingTest } from 'book-explorer/tests/helpers';
import { render, select } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | ui/dropdown', function (hooks) {
  setupRenderingTest(hooks);

  this.topicOptions = [
    { label: 'Selecciona un tema', value: '' },
    { label: 'Science Fiction', value: 'science_fiction' },
    { label: 'Fantasy', value: 'fantasy' },
    { label: 'Romance', value: 'romance' },
    { label: 'History', value: 'history' },
    { label: 'Horror', value: 'horror' },
  ];

  this.topicSelected = undefined;

  test('it renders the component', async function (assert) {
    this.mockOnChange = (value) => (this.topicSelected = value);

    await render(
      hbs`
        <Ui::Dropdown
          @name="topic-select"
          @id="topic-select"
          @options={{this.topicOptions}}
          @onChange={{this.mockOnChange}}
        />
      `,
    );

    await select('#topic-select', 'horror');
    assert.equal(this.topicSelected, 'horror');
  });
});
