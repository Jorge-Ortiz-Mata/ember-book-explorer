import Service from '@ember/service';

export default class OpenService extends Service {
  baseUrl = "https://openlibrary.org/subjects"

  async fetchBooks(topic) {
    const url = `${this.baseUrl}/${topic}.json`
    const response = await fetch(url);
    const data = await response.json();

    return data.works;
  };
};
