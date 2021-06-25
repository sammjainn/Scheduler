import React, { Component } from 'react';
import '../Styles/Weeks.css';
import AddSlot from './AddSlot';
class Weeks extends Component {
  state = { currWeek: 1, allSlots: this.props.allSlots, showModal: false };

  prev = () => {
    if (this.state.currWeek > 1)
      this.setState({ currWeek: this.state.currWeek - 1 });
  };
  next = () => {
    if (this.state.currWeek < 4)
      this.setState({ currWeek: this.state.currWeek + 1 });
  };

  toggleState = () => {
    this.setState({ showModal: false });
  };

  getCurrSlots = () => {
    let currSlot = [];
    this.state.allSlots.forEach((slot) => {
      let date = new Date(Date.parse(slot.date));
      slot.date = date;
      // console.log(Math.floor(date.getDate() / 7) + 1, this.state.currWeek);
      if (Math.floor(date.getDate() / 7) + 1 == this.state.currWeek)
        currSlot.push(slot);
    });
    return currSlot;
  };

  render() {
    let days = [...Array(28).keys()];
    let hours = [...Array(24).keys()];
    let daysOfWeek = [...Array(7).keys()];
    const currSlots = this.getCurrSlots();
    // console.log(currSlots);

    let hourWeekSlots = [];
    hours.forEach((hour) => {
      let hasSlot = false;
      currSlots.forEach((slot) => {
        if (slot.startTime.split(':')[0] == hour) {
          hourWeekSlots.push({
            slot: slot,
            hour: hour
          });
          hasSlot = true;
        }
      });
      if (!hasSlot) hourWeekSlots.push({ hour: hour });
    });
    // console.log(hourWeekSlots);

    return (
      <React.Fragment>
        {' '}
        <div className='week__controls'>
          <i onClick={this.prev} className='week__prev'>
            prev
          </i>
          <h1>Week {this.state.currWeek}</h1>
          <i onClick={this.next} className='week__next'>
            next
          </i>
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
            day >= (this.state.currWeek - 1) * 7 &&
            day < (this.state.currWeek - 1) * 7 + 7 ? (
              <div className='week__dateCells' key={day}>
                <i className='week__date'>{day + 1}</i>
              </div>
            ) : (
              <></>
            )
          )}
        </div>
        <div className='week__hours'>
          {hourWeekSlots.map((hourWeekSlot) => (
            <div className='week__hourCells' key={hourWeekSlot.hour}>
              <i className='week__hour'>{hourWeekSlot.hour}:00</i>
              <div className='week__dayCells'>
                {daysOfWeek.map((dayOfWeek) => (
                  <div
                    className='week__dayCell'
                    key={dayOfWeek + 1}
                    onClick={() => this.setState({ showModal: true })}
                  >
                    {hourWeekSlot.slot &&
                    this.state.currWeek ==
                      Math.floor(hourWeekSlot.slot.date.getDate() / 7) + 1 &&
                    dayOfWeek + 1 == hourWeekSlot.slot.date.getDate() % 7 ? (
                      <div className='week__slotBooked'>
                        <strong>{hourWeekSlot.slot.class} </strong>
                        <div>
                          [{hourWeekSlot.slot.startTime} -{' '}
                          {hourWeekSlot.slot.endTime}]
                        </div>
                      </div>
                    ) : (
                      <></>
                    )}
                  </div>
                ))}
              </div>
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

export default Weeks;
