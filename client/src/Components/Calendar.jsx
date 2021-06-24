import React, { Component } from 'react';
import Days from './Days';
import Weeks from './Weeks';
import Months from './Months';
import dateFns from 'date-fns';
import '../Styles/Calendar.css';

class Calendar extends Component {
  state = {
    viewStates: {
      dayView: false,
      weekView: false,
      monthView: true // default
    }
  };

  changeView = (time) => {
    let newStates = {
      dayView: false,
      weekView: false,
      monthView: false
    };
    newStates[time] = true;
    this.setState({ viewStates: newStates });
  };

  render() {
    let viewStates = this.state.viewStates;
    let view;
    if (viewStates.dayView) view = <Days />;
    else if (viewStates.weekView) view = <Weeks />;
    else if (viewStates.monthView) view = <Months />;
    return (
      <React.Fragment>
        <ul className='menu'>
          <li
            className='days menu-options'
            onClick={() => {
              this.changeView('dayView');
            }}
          >
            Day
          </li>
          <li
            className='weeks menu-options'
            onClick={() => {
              this.changeView('weekView');
            }}
          >
            Week
          </li>
          <li
            className='months menu-options'
            onClick={() => {
              this.changeView('monthView');
            }}
          >
            Month
          </li>
        </ul>

        {view}
      </React.Fragment>
    );
  }
}

export default Calendar;
