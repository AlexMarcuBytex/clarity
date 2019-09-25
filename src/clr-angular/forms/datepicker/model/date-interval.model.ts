/*
 * Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

export class DateIntervalModel {
  private minDate: Date;
  private maxDate: Date;

  constructor(minDate?: Date, maxDate?: Date) {
    this.minDate = minDate;
    this.maxDate = maxDate;
  }

  private isMinYear(year) {
    return year === this.minDate.getFullYear();
  }

  private isMaxYear(year) {
    return year === this.maxDate.getFullYear();
  }

  private isOnlyMinRangeDefined() {
    return this.minDate && !this.maxDate;
  }

  private isOnlyMaxRangeDefined() {
    return !this.minDate && this.maxDate;
  }

  private isFullIntervalDefined() {
    return this.minDate && this.maxDate;
  }

  /**
   * Checks if a day is in the interval. If the interval is not defined, we consider that the day is available
   */
  public isDayInInterval(day: Date) {
    if (this.isFullIntervalDefined()) {
      return day >= this.minDate && day <= this.maxDate;
    } else if (this.isOnlyMinRangeDefined()) {
      return day >= this.minDate;
    } else if (this.isOnlyMaxRangeDefined()) {
      return day <= this.maxDate;
    }
    return true;
  }

  /**
   * Checks if a month is in the interval. If the interval is not defined, we consider that the month is available
   */
  public isMonthInInterval(monthIndex: number, year: number) {
    if (this.isYearInInterval(year)) {
      // if the current year is neither first nor last, then all months should be available by returning true
      if (this.isFullIntervalDefined()) {
        if (this.isMinYear(year)) {
          return monthIndex >= this.minDate.getMonth();
        } else if (this.isMaxYear(year)) {
          return monthIndex <= this.maxDate.getMonth();
        }
      } else if (this.isOnlyMinRangeDefined()) {
        if (this.isMinYear(year)) {
          return monthIndex >= this.minDate.getMonth();
        }
      } else if (this.isOnlyMaxRangeDefined()) {
        if (this.isMaxYear(year)) {
          return monthIndex <= this.maxDate.getMonth();
        }
      }
      return true;
    }
    return false;
  }

  /**
   * Checks if a year is in the interval. If the interval is not defined, we consider that the year is available
   */
  public isYearInInterval(year: number) {
    if (this.isFullIntervalDefined()) {
      return year >= this.minDate.getFullYear() && year <= this.maxDate.getFullYear();
    } else if (this.isOnlyMinRangeDefined()) {
      return year >= this.minDate.getFullYear();
    } else if (this.isOnlyMaxRangeDefined()) {
      return year <= this.maxDate.getFullYear();
    }
    return true;
  }
}
