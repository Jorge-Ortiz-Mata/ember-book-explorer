import Controller from '@ember/controller';
import { action } from '@ember/object';
import { service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class ExplorerController extends Controller {
  @tracked topicSelected = 'N/A';
  @tracked books = undefined;
  @service open;

  topicOptions = [
    { label: 'Selecciona un tema', value: 'N/A' },
    { label: 'Science Fiction', value: 'science_fiction' },
    { label: 'Fantasy', value: 'fantasy' },
    { label: 'Romance', value: 'romance' },
    { label: 'History', value: 'history' },
    { label: 'Horror', value: 'horror' },
  ];

  @action
  onChange(value) {
    this.topicSelected = value;
  }

  @action
  async getBooks() {
    if (this.topicSelected == 'N/A') return;

    const data = await this.open.fetchBooks('horror');
    this.books = data;
  }
}
