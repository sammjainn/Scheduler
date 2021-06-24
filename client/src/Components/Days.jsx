import React, { Component } from 'react';
import '../Styles/Days.css';

class Days extends Component {
  state = { currDate: 2 };

  prev = () => {
    if (this.state.currDate > 1)
      this.setState({ currDate: this.state.currDate - 1 });
  };
  next = () => {
    if (this.state.currDate < 28)
      this.setState({ currDate: this.state.currDate + 1 });
  };

  render() {
    let days = [...Array(28).keys()];
    let hours = [...Array(24).keys()];

    return (
      <React.Fragment>
        {' '}
        <div className='day__controls'>
          <i onClick={this.prev}>prev</i>
          <h1>Date: {this.state.currDate}</h1>
          <i onClick={this.next}>next</i>
        </div>
        <div className='day__hours'>
          {hours.map((hour) => (
            <div className='day__hourCells' key={hour}>
              <i className='day__hour'>{hour + 1}:00</i>
            </div>
          ))}
        </div>
      </React.Fragment>
    );
  }
}

export default Days;
