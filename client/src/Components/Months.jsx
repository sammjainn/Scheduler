import React, { Component } from 'react';
import '../Styles/Months.css';
import AddSlot from './AddSlot';
class Months extends Component {
  state = {
    allSlots: this.props.allSlots,
    showModal: false
  };

  getCurrSlots = () => {
    let currSlot = [];
    this.state.allSlots.forEach((slot) => {
      let date = new Date(Date.parse(slot.date));
      slot.date = date;
      currSlot.push(slot);
    });
    return currSlot;
  };

  toggleState = () => {
    this.setState({ showModal: false });
  };

  render() {
    let days = [...Array(28).keys()];
    let currSlots = this.getCurrSlots();
    let daySlots = [];
    days.forEach((day) => {
      let obj = [];
      let hasSlot = false;
      currSlots.forEach((slot) => {
        // console.log(slot.date.getDate() == day + 1);
        if (slot.date.getDate() == day + 1) {
          obj.push({ slot: slot, day: day });
          hasSlot = true;
        }
      });
      if (!hasSlot) daySlots.push({ day: day });
      else daySlots.push(obj);
    });

    // console.log(this.state);
    // console.log(daySlots);

    return (
      <React.Fragment>
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
        </div>
        <div className='month__allDays'>
          {daySlots.map((daySlot) => (
            <div
              className='month__cells'
              key={daySlot.day}
              onClick={() => this.setState({ showModal: true })}
            >
              {daySlot.length > 0 ? (
                <React.Fragment>
                  <i className='month__date'>{daySlot[0].day + 1}</i>
                  <div className='month__daySlots'>
                    {daySlot.map((item) => {
                      return (
                        <div className='month__daySlot'>{item.slot.class}</div>
                      );
                    })}
                  </div>
                </React.Fragment>
              ) : (
                <i className='month__date'>{daySlot.day + 1}</i>
              )}
            </div>
          ))}
        </div>
        {this.state.showModal ? (
          <AddSlot toggleState={this.toggleState} />
        ) : (
          <></>
        )}
      </React.Fragment>
    );
  }
}

export default Months;
