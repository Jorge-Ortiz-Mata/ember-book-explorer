import { module, test } from 'qunit';
import { setupRenderingTest } from 'book-explorer/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | ui/book', function (hooks) {
  setupRenderingTest(hooks);

  this.title = "Harry Potter"
  this.cover_id = "siue9297ecsj"
  this.first_publish_year = 1998
  this.authors = [
    { name: "Luis Perez" },
    { name: "Jorge Ortiz" },
  ]

  this.book = {
    title: this.title,
    cover_id: this.cover_id,
    first_publish_year: this.first_publish_year,
    authors: this.authors
  }

  this.authorName = (name) => {
      return name
      .trim()
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(".", "-");
    }

  test("it renders the book with the content", async function(assert) {
    await render(
      hbs`<Ui::Book @book={{this.book}} />`
    );

    assert.dom("h6").hasText(this.title);
    assert.dom("#book-id").hasText(`ID: ${this.cover_id}`);
    assert.dom("#book-year").hasText(`Año de publicación: ${this.first_publish_year}`);
    this.authors.forEach(author => {
      const id = this.authorName(author.name);

      assert.dom(`#author-${id}`).hasText(`Autor: ${author.name}`);
    });
  });

  // test('it renders', async function (assert) {
  //   // Set any properties with this.set('myProperty', 'value');
  //   // Handle any actions with this.set('myAction', function(val) { ... });

  //   await render(hbs`<Ui::Book />`);

  //   assert.dom().hasText('');

  //   // Template block usage:
  //   await render(hbs`
  //     <Ui::Book>
  //       template block text
  //     </Ui::Book>
  //   `);

  //   assert.dom().hasText('template block text');
  // });
});
