import { module, test } from 'qunit';
import { setupRenderingTest } from 'book-explorer/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import authorName from 'book-explorer/helpers/author-name';

module('Integration | Component | ui/book', function (hooks) {
  setupRenderingTest(hooks);

  this.title = 'Harry Potter';
  this.key = '/works/298fnys1';
  this.cover_id = 'siue9297ecsj';
  this.first_publish_year = 1998;
  this.authors = [{ name: 'Luis Perez' }, { name: 'Jorge Ortiz' }];

  this.book = {
    title: this.title,
    key: this.key,
    cover_id: this.cover_id,
    first_publish_year: this.first_publish_year,
    authors: this.authors,
  };

  test('it renders the book with the content', async function (assert) {
    await render(hbs`<Ui::Book @book={{this.book}} />`);

    assert.dom('h6').hasText(this.title);
    assert.dom('#book-id').hasText(`ID: ${this.cover_id}`);
    assert
      .dom('#book-year')
      .hasText(`Año de publicación: ${this.first_publish_year}`);
    this.authors.forEach((author) => {
      const id = authorName(author.name);

      assert.dom(`#author-${id}`).hasText(`Autor: ${author.name}`);
    });
    assert.dom('#link-298fnys1').exists();
  });
});
