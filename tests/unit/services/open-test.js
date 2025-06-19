import { module, test } from 'qunit';
import { setupTest } from 'book-explorer/tests/helpers';

module('Unit | Service | Open', function (hooks) {
  setupTest(hooks);

  test('it fetches the books from OpenLibrary', async function (assert) {
    const mockData = [
      {
        title: 'Harry Potter',
        cover_id: '29wnjsfb82',
        first_publish_year: '1996',
        authors: [{ name: 'J.K. Rowling' }],
      },
      {
        title: 'The Outliers',
        cover_id: '3984fshbfd',
        first_publish_year: '2002',
        authors: [{ name: 'Luis Perez' }],
      },
    ];

    globalThis.fetch = () => {
      return Promise.resolve({
        json: () => Promise.resolve({ works: mockData }),
      });
    };

    const service = this.owner.lookup('service:open');
    const data = await service.fetchBooks('horror');

    assert.equal(data, mockData);
  });
});
