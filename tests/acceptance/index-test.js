import { module, test } from 'qunit';
import { visit, click } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | Index', function(hooks) {
  setupApplicationTest(hooks);
  
  test("I see the title and the description", async function (assert) {
    await visit("/");

    assert.dom("h1").hasText("EmberJS Book Explorer - Index Page");
    assert.dom("p").hasText("Explora libros por tema con la API de Open Library")
  });

  test("I visit the explorer page from the navbar", async function(assert) {
    await visit("/");
    await click("#link-explorer")

    assert.dom("h1").hasText("EmberJS Book Explorer - Explorer Page");
  });
});
