import { DateRange } from 'react-date-range';
import React, {Component} from 'react';

class Calendar extends Component {
  render() {
    const {range, onChange, onToggle} = this.props;
    return (
      <DateRange
        ranges={range}
        onChange={onChange}
        moveRangeOnFirstSelection={false}
      />

    );
  }
}

export default Calendar;

// Calendar 윗부분 제거하시려면 알 props 추가하시면됩니다.
// showDateDisplay={false}
