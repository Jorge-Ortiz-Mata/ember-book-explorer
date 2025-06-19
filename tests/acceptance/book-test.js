import { assert, module, test } from 'qunit';
import { visit, click, select } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import authorName from 'book-explorer/helpers/author-name';

module('Acceptance | Book', function(hooks) {
  setupApplicationTest(hooks);

  this.book = {
    title: "Mock Book 1",
    description: "Some description",
    first_publish_year: 2000,
    authors: [{ name: "Mock Author 1" }]
  };

  test("it renders the book content", async (assert) => {
    globalThis.fetch = () => {
      return Promise.resolve({
        json: () => Promise.resolve(this.book)
      })
    };

    await visit("/book/3DKJn82")

    assert.dom("h1").hasText("EmberJS Book Explorer - Book Show Page");
    assert.dom("h6").hasText(this.book.title)
    assert.dom("#book p").hasText(this.book.description)
    assert.dom("#book-year").hasText("Año de publicación: 2000")
    this.book.authors.forEach((author) => {
      const name = authorName(author.name);

      assert.dom(`#author-${name}`).hasText(`Autor: ${author.name}`)
    })
  });
});