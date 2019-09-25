/*
 * Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';

@Component({
  selector: 'clr-datepicker-min-max-demo',
  templateUrl: './datepicker-min-max.html',
  styleUrls: ['./datepicker.demo.scss'],
})
export class DatepickerMinMaxDemo {
  minDate: Date = new Date('1997-12-21');
  maxDate: Date = new Date('2021-02-16');

  disableMin() {
    this.minDate = null;
  }
  disableMax() {
    this.maxDate = null;
  }
}
