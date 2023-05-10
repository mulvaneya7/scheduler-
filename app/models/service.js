import Model, { attr } from '@ember-data/model';

const TIME_TO_COMPLETE = 30;

export default class ServiceModel extends Model {
  @attr date;
  @attr time;
  @attr service_name;

  get time_to_complete() {
    return TIME_TO_COMPLETE;
  }
}
