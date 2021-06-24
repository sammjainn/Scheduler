import React, { Component } from 'react';
import '../Styles/Days.css';

class Days extends Component {
  state = { currDate: 15, allSlots: this.props.allSlots };

  prev = () => {
    if (this.state.currDate > 1)
      this.setState({ currDate: this.state.currDate - 1 });
  };
  next = () => {
    if (this.state.currDate < 28)
      this.setState({ currDate: this.state.currDate + 1 });
  };

  getCurrSlots = () => {
    let currSlot = [];
    this.state.allSlots.forEach((slot) => {
      let date = new Date(Date.parse(slot.date));
      slot.date = date;
      if (date.getDate() == this.state.currDate) currSlot.push(slot);
    });
    return currSlot;
  };

  render() {
    let days = [...Array(28).keys()];
    const currSlot = this.getCurrSlots();
    let hours = [...Array(24).keys()];
    let hourSlots = [];
    hours.forEach((hour) => {
      let hasSlot = false;
      currSlot.forEach((slot) => {
        // console.log(slot.startTime.split(':')[0] == hour);
        if (slot.startTime.split(':')[0] == hour) {
          hourSlots.push({ slot: slot, hour: hour });
          hasSlot = true;
        }
      });
      if (!hasSlot) hourSlots.push({ hour: hour });
    });
    // console.log(hourSlots);

    return (
      <React.Fragment>
        {' '}
        <div className='day__controls'>
          <i onClick={this.prev}>prev</i>
          <h1>Date: {this.state.currDate}</h1>
          <i onClick={this.next}>next</i>
        </div>
        <div className='day__hours'>
          {hourSlots.map((hourObj) => (
            <div className='day__hourCells' key={hourObj.hour}>
              <i className='day__hour'>{hourObj.hour}:00</i>
              <div className='day__slots'>
                {hourObj.slot ? (
                  <div className='day__slot'>
                    <strong>{hourObj.slot.class} </strong>[
                    {hourObj.slot.startTime} - {hourObj.slot.endTime}]
                  </div>
                ) : (
                  <></>
                )}
              </div>
            </div>
          ))}
        </div>
      </React.Fragment>
    );
  }
}

export default Days;
