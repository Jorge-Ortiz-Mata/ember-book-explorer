import { module, test } from 'qunit';
import { visit, click, select } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | Explorer', function (hooks) {
  setupApplicationTest(hooks);

  this.dataMocked = [
    {
      title: 'Mock Book 1',
      key: '/works/abc123',
      cover_id: 'mock1',
      first_publish_year: 2000,
      authors: [{ name: 'Mock Author 1' }],
    },
    {
      title: 'Mock Book 2',
      key: '/works/abc124',
      cover_id: 'mock2',
      first_publish_year: 2005,
      authors: [{ name: 'Mock Author 2' }],
    },
  ];

  test('it shows the explorer page', async function (assert) {
    await visit('/explorer');

    assert.dom('h1').hasText('EmberJS Book Explorer - Explorer Page');
    assert.dom('#topic-selected').hasAnyText('Tópico seleccionado:');
    assert.dom('#books-section-title').hasText('Libros');
    assert.dom('#empty-message').hasText('Sin libros para mostrar');
  });

  test('it shows the books requested', async (assert) => {
    globalThis.fetch = () => {
      return Promise.resolve({
        json: () => Promise.resolve({ works: this.dataMocked }),
      });
    };

    await visit('/explorer');
    await select('#topic-select', 'fantasy');
    await click('#btn-fetch');

    assert.dom('#empty-message').doesNotExist();
  });

  test('it takes the user to the explorer show page', async (assert) => {
    globalThis.fetch = () => {
      return Promise.resolve({
        json: () => Promise.resolve({ works: this.dataMocked }),
      });
    };

    await visit('/explorer');
    await select('#topic-select', 'fantasy');
    await click('#btn-fetch');
    await click('#link-abc123');

    assert.dom('h1').hasText('EmberJS Book Explorer - Book Show Page');
  });
});
