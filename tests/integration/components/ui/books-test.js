import { module, test } from 'qunit';
import { setupRenderingTest } from 'book-explorer/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | ui/books', function (hooks) {
  setupRenderingTest(hooks);

  this.emptyMessage = "Sin libros para mostrar";
  this.title = "Harry Potter";
  this.cover_id = "siue9297ecsj";
  this.first_publish_year = 1998;
  this.authors = [
    { name: "Luis Perez" },
    { name: "Jorge Ortiz" },
  ];

  this.book = {
    title: this.title,
    cover_id: this.cover_id,
    first_publish_year: this.first_publish_year,
    authors: this.authors
  };

  this.books = [this.book];
  
  test("it renders an empty message without books", async function(assert) {
    await render(
      hbs`
        <Ui::Books @books={{undefined}} />
      `
    );

    assert.dom("#books-section-title").hasText("Libros");
    assert.dom("#empty-message").hasText(this.emptyMessage); 
  });

  test("it renders a list of books", async function(assert) {
    await render(
      hbs`
        <Ui::Books @books={{this.books}} />
      `
    );
  
    assert.dom("#empty-message").doesNotExist();
  });
});
