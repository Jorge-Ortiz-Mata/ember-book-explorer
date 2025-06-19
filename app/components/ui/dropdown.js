import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class UiDropdownComponent extends Component {
  @action
  handleOnChange(event) {
    const { value } = event.target;

    this.args.onChange(value);
  }
}
