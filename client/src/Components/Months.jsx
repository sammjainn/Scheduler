import React, { Component } from 'react';
import '../Styles/Months.css';

class Months extends Component {
  state = { slots: 0 };

  addClass = () => {
    this.setState({ slots: this.state.slots + 1 });
    console.log('add a slot');
  };
  render() {
    let days = [...Array(28).keys()];
    // console.log(days);

    console.log(this.state);
    return (
      <React.Fragment>
        {' '}
        <div className='month__controls'>
          <i>prev</i>
          <h1>June 2021</h1>
          <i>next</i>
        </div>
        <div className='month__weekdays'>
          <div className='month__weekday'>Mon</div>
          <div className='month__weekday'>Tue</div>
          <div className='month__weekday'>Wed</div>
          <div className='month__weekday'>Thurs</div>
          <div className='month__weekday'>Fri</div>
          <div className='month__weekday'>Sat</div>
          <div className='month__weekday'>Sun</div>
        </div>{' '}
        <div className='month__allDays'>
          {days.map((day) => (
            <div className='month__cells' key={day} onClick={this.addClass}>
              <i className='month__date'>{day + 1}</i>
            </div>
          ))}
        </div>
      </React.Fragment>
    );
  }
}

export default Months;
