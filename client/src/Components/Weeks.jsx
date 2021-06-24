import React, { Component } from 'react';
import '../Styles/Weeks.css';

class Weeks extends Component {
  state = { currWeek: 1 };
  render() {
    let days = [...Array(28).keys()];
    let hours = [...Array(24).keys()];
    let daysOfWeek = [...Array(7).keys()];

    console.log(this.state);
    return (
      <React.Fragment>
        {' '}
        <div className='week__controls'>
          <i>prev</i>
          <h1>Week {this.state.currWeek + 1}</h1>
          <i>next</i>
        </div>
        <div className='week__weekdays'>
          <div className='week__weekday'>Mon</div>
          <div className='week__weekday'>Tue</div>
          <div className='week__weekday'>Wed</div>
          <div className='week__weekday'>Thurs</div>
          <div className='week__weekday'>Fri</div>
          <div className='week__weekday'>Sat</div>
          <div className='week__weekday'>Sun</div>
        </div>{' '}
        <div className='week__allDays'>
          {days.map((day) =>
            day >= this.state.currWeek * 7 &&
            day < this.state.currWeek * 7 + 7 ? (
              <div
                className='week__dateCells'
                key={day}
                onClick={this.addClass}
              >
                <i className='week__date'>{day + 1}</i>
              </div>
            ) : (
              <React.Fragment key={day}></React.Fragment>
            )
          )}
        </div>
        <div className='week__hours'>
          {hours.map((hour) => (
            <div className='week__hourCells' key={hour}>
              <i className='week__hour'>{hour + 1}:00</i>
              <div className='week__dayCells'>
                {daysOfWeek.map((dayOfWeek) => (
                  <div
                    className='week__dayCell'
                    key={dayOfWeek}
                    onClick={this.addClass}
                  ></div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </React.Fragment>
    );
  }
}

export default Weeks;
