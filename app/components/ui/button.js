import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class UiButtonComponent extends Component {
  @action
  handleOnClick() {
    this.args.onClick();
  }
}
