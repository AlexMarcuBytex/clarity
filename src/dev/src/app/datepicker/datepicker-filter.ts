/*
 * Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';

@Component({
  selector: 'clr-datepicker-filter-demo',
  styleUrls: ['./datepicker.demo.scss'],
  templateUrl: './datepicker-filter.html',
})
export class DatepickerFilterDemo {
  myFilter = (date: Date): boolean => {
    const day = date.getDay();
    const month = date.getMonth();
    const year = date.getFullYear();
    const nDate = new Date(2019, 9, 10);

    return day !== 6 && day !== 0 && month !== 5;
    // return date.getTime() !== nDate.getTime();
  };
}
