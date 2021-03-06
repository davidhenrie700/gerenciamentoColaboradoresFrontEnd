import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'localDate'
})
export class LocalDatePipe implements PipeTransform {

  transform(date: string): string {
    let dateOut: moment.Moment = moment(date, "YYYY-MM-DD");
    return dateOut.format("DD/MM/YYYY");
  }
}
