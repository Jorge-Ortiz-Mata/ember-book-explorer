import Service from '@ember/service';

export default class OpenService extends Service {
  baseUrl = 'https://openlibrary.org';

  async fetchBooks(topic) {
    const url = `${this.baseUrl}/subjects/${topic}.json`;
    const response = await fetch(url);
    const data = await response.json();

    return data.works;
  }

  async fetchBook(id) {
    const url = `${this.baseUrl}/works/${id}.json`;
    const response = await fetch(url);
    const data = response.json();

    return data;
  }
}
