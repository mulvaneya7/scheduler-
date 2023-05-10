import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class DatetimeSelectorComponent extends Component {
  @action
  dateTimeSelected(event) {
    const selectedDateTime = event.target.value;
    this.args.onDateTimeSelected(selectedDateTime);
  }
}
