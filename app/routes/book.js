import Route from '@ember/routing/route';
import { service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class BookRoute extends Route {
  @tracked book = undefined;
  @service open;

  async model(params) {
    const id = params.key_id;
    const data = await this.open.fetchBook(id);
    return data;
  }
}
